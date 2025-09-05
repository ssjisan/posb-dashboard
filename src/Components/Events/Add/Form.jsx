import { Grid, Stack, Typography, Box, Button } from "@mui/material";
import EventInfo from "./EventInfo";
import EventCover from "./EventCover";
import EventDetails from "./EventDetails";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  // ------------------------------------------------------ State Start here ---------------------------------------------------- //
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [registrationRequired, setRegistrationRequired] = useState(false);
  const [registrationFees, setRegistrationFees] = useState("");
  const [registrationStartDate, setRegistrationStartDate] = useState(null);
  const [registrationEndDate, setRegistrationEndDate] = useState(null);
  const [paymentStartDate, setPaymentStartDate] = useState(null);
  const [paymentEndDate, setPaymentEndDate] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState("");
  const [error, setError] = useState(null);
  const [eventDateError, setEventDateError] = useState("");
  const [registrationStartError, setRegistrationStartError] = useState("");
  const [registrationEndError, setRegistrationEndError] = useState("");
  const [paymentStartError, setPaymentStartError] = useState("");
  const [paymentEndError, setPaymentEndError] = useState("");
  const [loading, setLoading] = useState(false);
  const [coverPhotoRemoved, setCoverPhotoRemoved] = useState(false);

  // ------------------------------------------------------ State End here ------------------------------------------------------ //

  const drawerWidth = 280;

  // ------------------------------------------------------ Event Date Handler ------------------------------------------------------ //
  const handleEventDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).toISOString();
    if (newDate && newDate.isBefore(dayjs(), "day")) {
      setEventDateError("Event date cannot be in the past!");
    } else {
      setEventDateError("");
      setEventDate(formattedDate);
    }
  };

  const handleRegistrationRequiredChange = (checked) => {
    setRegistrationRequired(checked);
    if (!checked) {
      // Clear all related fields
      setRegistrationFees("");
      setRegistrationStartDate(null);
      setRegistrationEndDate(null);
      setPaymentStartDate(null);
      setPaymentEndDate(null);

      // Clear any validation errors if you have them
      setRegistrationStartError("");
      setRegistrationEndError("");
      setPaymentStartError("");
      setPaymentEndError("");
    }
  };
  // ------------------------------------------------------ Registration Start Date Handler ------------------------------------------------------ //

  const handleRegistrationStartDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).toISOString();
    if (newDate && newDate.isBefore(dayjs(), "day")) {
      setRegistrationStartError("Start date cannot be in the past!");
    } else if (newDate && newDate.isAfter(eventDate, "day")) {
      setRegistrationStartError("Start date cannot be after the event date!");
    } else {
      setRegistrationStartError("");
      setRegistrationStartDate(formattedDate);
    }
  };

  // ------------------------------------------------------ Registration End Date Handler ------------------------------------------------------ //
  const handleRegistrationEndDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).toISOString();
    if (newDate && newDate.isBefore(dayjs(), "day")) {
      setRegistrationEndError("End date cannot be in the past!");
    } else if (newDate && newDate.isBefore(registrationStartDate, "day")) {
      setRegistrationEndError(
        "End date cannot be earlier than the start date!"
      );
    } else if (newDate && newDate.isAfter(eventDate, "day")) {
      setRegistrationEndError("End date cannot be after the event date!");
    } else {
      setRegistrationEndError("");
      setRegistrationEndDate(formattedDate);
    }
  };
  // ------------------------------------------------------ Payment Start Date Handler ------------------------------------------------------ //

  const handlePaymentStartDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).toISOString();

    if (newDate && newDate.isBefore(dayjs(), "day")) {
      setPaymentStartError("Payment start date cannot be in the past!");
    } else if (
      registrationStartDate &&
      newDate.isBefore(dayjs(registrationStartDate), "day")
    ) {
      setPaymentStartError(
        "Payment start date cannot be earlier than registration start date!"
      );
    } else if (eventDate && newDate.isAfter(dayjs(eventDate), "day")) {
      setPaymentStartError(
        "Payment start date cannot be after the event date!"
      );
    } else if (
      paymentEndDate &&
      newDate.isAfter(dayjs(paymentEndDate), "day")
    ) {
      setPaymentStartError(
        "Payment start date cannot be after payment end date!"
      );
    } else {
      setPaymentStartError("");
      setPaymentStartDate(formattedDate);
    }
  };
  // ------------------------------------------------------ Payment End Date Handler ------------------------------------------------------ //

  const handlePaymentEndDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).toISOString();

    if (newDate && newDate.isBefore(dayjs(), "day")) {
      setPaymentEndError("Payment end date cannot be in the past!");
    } else if (
      paymentStartDate &&
      newDate.isBefore(dayjs(paymentStartDate), "day")
    ) {
      setPaymentEndError(
        "Payment end date cannot be earlier than payment start date!"
      );
    } else if (eventDate && newDate.isAfter(dayjs(eventDate), "day")) {
      setPaymentEndError("Payment end date cannot be after the event date!");
    } else {
      setPaymentEndError("");
      setPaymentEndDate(formattedDate);
    }
  };

  // ------------------------------------------------------ Upload Cover Image Handler ------------------------------------------------------ //
  const handleCoverPhoto = (event) => {
    const file = event.target.files[0];
    const MAX_SIZE_MB = 3;

    if (file) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

      if (fileSizeMB > MAX_SIZE_MB) {
        setError({
          fileName: file.name,
          fileSize: fileSizeMB,
          message: "File is larger than 3MB.",
        });
        return;
      }

      setError(null);
      setCoverPhoto(file);
      setCoverPhotoRemoved(false);
    }
  };

  const removeImage = () => {
    setCoverPhoto(null);
    setCoverPhotoRemoved(true); // mark that the image was removed
  };

  // ------------------------------------------------------ Upload Event Details Handler ------------------------------------------------------ //
  const handleQuillChange = (content) => {
    setDetails(content);
  };

  // ------------------------------------------------------ Preload data for edit ------------------------------------------------------ //
  useEffect(() => {
    if (eventId) {
      // Fetch event data
      const fetchEventData = async () => {
        try {
          const { data } = await axios.get(`/events/${eventId}`);
          const event = data;

          setName(event.name);
          setLocation(event.location);
          setEventDate(event.eventDate);
          setEventTime(event.eventTime);
          setRegistrationRequired(event.registrationRequired);
          setRegistrationFees(event.registrationFees || "");
          setRegistrationStartDate(event.registrationStartDate || null);
          setRegistrationEndDate(event.registrationEndDate || null);
          setPaymentStartDate(event.paymentStartDate || null);
          setPaymentEndDate(event.paymentEndDate || null);
          setDetails(event.details || "");

          if (event.coverPhoto) {
            setCoverPhoto(event.coverPhoto.url);
          }
        } catch (err) {
          console.error("Error fetching event:", err);
          toast.error("Failed to load event data.");
        }
      };

      fetchEventData();
    }
  }, [eventId]);

  // ------------------------------------------------------ Submit Handler ------------------------------------------------------ //

  const handleSubmit = async () => {
    if (
      eventDateError ||
      registrationStartError ||
      registrationEndError ||
      paymentStartError ||
      paymentEndError
    ) {
      toast.error("Please fix all errors before submitting.");
      return;
    }

    const toastId = toast.loading("Uploading...");
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("location", location);
      formData.append("eventDate", eventDate);
      formData.append("eventTime", eventTime);
      formData.append("registrationRequired", registrationRequired);
      formData.append("registrationFees", registrationFees);
      formData.append("details", details);

      if (registrationStartDate)
        formData.append("registrationStartDate", registrationStartDate);
      if (registrationEndDate)
        formData.append("registrationEndDate", registrationEndDate);
      if (paymentStartDate)
        formData.append("paymentStartDate", paymentStartDate);
      if (paymentEndDate) formData.append("paymentEndDate", paymentEndDate);

      // Handle image
      if (coverPhoto instanceof File) {
        formData.append("coverPhoto", coverPhoto);
      }

      // Handle remove image flag for update
      if (coverPhotoRemoved) {
        formData.append("coverPhotoRemoved", true);
      }

      let response;
      if (eventId) {
        // Update
        response = await axios.put(`/update-event/${eventId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Create
        response = await axios.post("/create-event", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      toast.success(
        response.data.message ||
          (eventId
            ? "Event updated successfully!"
            : "Event created successfully!")
      );
      navigate("/events_list");
      toast.dismiss(toastId);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong.");
      toast.dismiss(toastId);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack sx={{ pb: "80px" /* leave space for sticky footer */ }}>
      <Stack sx={{ mb: "32px" }}>
        <Typography variant="h5">Create Event</Typography>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <EventInfo
            registrationRequired={registrationRequired}
            handleRegistrationRequiredChange={handleRegistrationRequiredChange}
            name={name}
            setName={setName}
            location={location}
            setLocation={setLocation}
            eventDate={eventDate}
            eventDateError={eventDateError}
            eventTime={eventTime}
            setEventTime={setEventTime}
            registrationFees={registrationFees}
            setRegistrationFees={setRegistrationFees}
            registrationStartDate={registrationStartDate}
            registrationEndDate={registrationEndDate}
            registrationStartError={registrationStartError}
            registrationEndError={registrationEndError}
            handleEventDateChange={handleEventDateChange}
            handleRegistrationStartDateChange={
              handleRegistrationStartDateChange
            }
            handleRegistrationEndDateChange={handleRegistrationEndDateChange}
            paymentStartDate={paymentStartDate}
            setPaymentStartDate={setPaymentStartDate}
            paymentEndDate={paymentEndDate}
            setPaymentEndDate={setPaymentEndDate}
            paymentStartError={paymentStartError}
            handlePaymentStartDateChange={handlePaymentStartDateChange}
            paymentEndError={paymentEndError}
            handlePaymentEndDateChange={handlePaymentEndDateChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack
            sx={{ p: "16px", borderRadius: "12px", background: "#fff" }}
            gap={3}
          >
            <EventCover
              coverPhoto={coverPhoto}
              handleCoverPhoto={handleCoverPhoto}
              removeImage={removeImage}
              error={error}
            />
            <EventDetails
              details={details}
              setDetails={setDetails}
              handleQuillChange={handleQuillChange}
            />
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          bgcolor: "#fff",
          borderTop: "1px solid #ddd",
          p: 2,
          display: "flex",
          justifyContent: "center",
          gap: 2,
          zIndex: 2,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Button variant="outlined" color="inherit">
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}
