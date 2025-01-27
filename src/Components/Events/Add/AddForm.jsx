import { Button, Grid, Stack, useMediaQuery } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import EventInformation from "./EventInformation";
import EventDetails from "./EventDetails";
import EventCover from "./EventCover";

export default function AddForm() {
  const forBelow1200 = useMediaQuery("(max-width:1200px)"); // Media Query
  const [name, setName] = useState(""); //Event Name
  const [location, setLocation] = useState(""); //Event Location
  const [eventDate, setEventDate] = useState(""); //Event Date
  const [eventTime, setEventTime] = useState(""); //Event Time
  const [registrationLink, setRegistrationLink] = useState(""); //Event Registration Link
  const [registrationStartDate, setRegistrationStartDate] = useState(null); //Registration Start Date
  const [registrationEndDate, setRegistrationEndDate] = useState(null); // Registration End Date
  const [eventDateError, setEventDateError] = useState(""); //Error State for Event Date
  const [registrationStartDateError, setRegistrationStartDateError] =
    useState(""); //Error State for Registration Start Date
  const [registrationEndDateError, setRegistrationEndDateError] = useState(""); //Error State for Registration Start Date
  const [details, setDetails] = useState(""); // Event Details
  const [coverPhoto, setCoverPhoto] = useState(""); //Evenet Cover Photo
  const [error, setError] = useState(null); // Error Handler
  const navigate = useNavigate(); // For Navigation
  const [isSubmitting, setIsSubmitting] = useState(false); //Submit State

  // Event Date Handler
  const handleEventDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).toISOString();
    if (newDate && newDate.isBefore(dayjs(), "day")) {
      setEventDateError("Event date cannot be in the past!");
    } else {
      setEventDateError("");
      setEventDate(formattedDate); // Store the formatted date
    }
  };

  // Registration Start Date Handler
  const handleRegistrationStartDateChange = (newDate) => {
    // Format the date for storage (ISO 8601 format)
    const formattedDate = dayjs(newDate).toISOString();
    if (newDate && newDate.isBefore(dayjs(), "day")) {
      setRegistrationStartDateError("Start date cannot be in the past!");
    } else if (newDate && newDate.isAfter(eventDate, "day")) {
      setRegistrationStartDateError(
        "Start date cannot be after the event date!"
      );
    } else {
      setRegistrationStartDateError("");
      setRegistrationStartDate(formattedDate); // Store the formatted date
    }
  };

  // Registration End Date Handler
  const handleRegistrationEndDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).toISOString();
    if (newDate && newDate.isBefore(dayjs(), "day")) {
      setRegistrationEndDateError("End date cannot be in the past!");
    } else if (newDate && newDate.isBefore(registrationStartDate, "day")) {
      setRegistrationEndDateError(
        "End date cannot be earlier than the start date!"
      );
    } else if (newDate && newDate.isAfter(eventDate, "day")) {
      setRegistrationEndDateError("End date cannot be after the event date!");
    } else {
      setRegistrationEndDateError("");
      setRegistrationEndDate(formattedDate); // Store the formatted date
    }
  };

  // Upload Cover Image Handler Starts Here

  const handleCoverPhoto = (event) => {
    const file = event.target.files[0];
    const MAX_SIZE_MB = 3; // Changed max size to 3 MB

    if (file) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2); // Convert bytes to MB and round to two decimals

      if (fileSizeMB > MAX_SIZE_MB) {
        setError({
          fileName: file.name,
          fileSize: fileSizeMB,
          message: "File is larger than 3MB.",
        });
        return;
      }

      setError(null); // Clear any previous error
      setCoverPhoto(file); // Set the uploaded file
    }
  };

  const removeImage = () => {
    setCoverPhoto(null);
  };

  // Upload Event Details Handler Starts Here

  const handleQuillChange = (content) => {
    setDetails(content);
  };

  const handleSubmit = async () => {
    // Check for missing required fields and show error toast for each
    if (!name.trim()) {
      toast.error("Name is required!");
      return;
    }

    if (!location.trim()) {
      toast.error("Location is required!");
      return;
    }

    if (!eventDate) {
      toast.error("Event Date is required!");
      return;
    }

    if (!eventTime) {
      toast.error("Event Time is required!");
      return;
    }

    if (!details.trim()) {
      toast.error("Details info about event is required!");
      return;
    }

    if (!coverPhoto) {
      toast.error("Cover photo is required!");
      return;
    }

    // If registrationLink is provided, validate related fields
    if (registrationLink) {
      if (!registrationStartDate) {
        toast.error("Registration Start Date is required");
        return;
      }
      if (!registrationEndDate) {
        toast.error("Registration End Date is required");
        return;
      }
    }
    // Start form submission
    setIsSubmitting(true); // Disable form interactions during submission
    const toastId = toast.loading("Uploading..."); // Show a loading toast

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("details", details);
    formData.append("eventDate", eventDate);
    formData.append("eventTime", eventTime);
    formData.append("registrationLink", registrationLink);

    if (registrationStartDate) {
      formData.append("registrationStartDate", registrationStartDate);
    }
    if (registrationEndDate) {
      formData.append("registrationEndDate", registrationEndDate);
    }

    if (coverPhoto) {
      formData.append("coverPhoto", coverPhoto); // Append the cover photo only if provided
    }

    try {
      const { data } = await axios.post("/create-event", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data?.error) {
        toast.dismiss(toastId); // Dismiss the loading toast
        toast.error(data.error);
      } else {
        toast.dismiss(toastId); // Dismiss the loading toast
        toast.success("Event Created");
        navigate("/events_list"); // Navigate to the events list page
      }
    } catch (error) {
      toast.dismiss(toastId); // Dismiss the loading toast
      toast.error("Event creation failed, check all fields");
    } finally {
      setIsSubmitting(false); // Re-enable form interactions
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Stack gap="40px">
            <EventInformation
              name={name}
              setName={setName}
              location={location}
              setLocation={setLocation}
              eventDate={eventDate}
              eventDateError={eventDateError}
              handleEventDateChange={handleEventDateChange}
              eventTime={eventTime}
              setEventTime={setEventTime}
              registrationLink={registrationLink}
              setRegistrationLink={setRegistrationLink}
              handleRegistrationStartDateChange={
                handleRegistrationStartDateChange
              }
              handleRegistrationEndDateChange={handleRegistrationEndDateChange}
              registrationStartDateError={registrationStartDateError}
              registrationEndDateError={registrationEndDateError}
              registrationEndDate={registrationEndDate}
            />
            <EventDetails
              details={details}
              setDetails={setDetails}
              handleQuillChange={handleQuillChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <EventCover
            coverPhoto={coverPhoto}
            handleCoverPhoto={handleCoverPhoto}
            removeImage={removeImage}
            error={error}
          />
        </Grid>
      </Grid>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap="16px"
        sx={{
          position: "fixed",
          bottom: "0px",
          left: forBelow1200 ? "0" : "280px",
          right: "0",
          zIndex: 1000,
          p: "12px 40px",
          background: "#FFF",
          borderTop: "1px solid rgba(145, 142, 175, 0.4)",
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => window.history.back()}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create"}
        </Button>
      </Stack>
    </>
  );
}
