import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Calender, Clock } from "../../../assets/IconSet";
import EventCover from "./EventCover";
import { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddEventForm() {
  //------------------------------------------------------Custom Icon Start-------------------------------------------------------------//
  const CalenderIcon = () => {
    return <Calender color="grey" size={24} />;
  };
  const ClockIcon = () => {
    return <Clock color="grey" size={24} />;
  };
  //------------------------------------------------------Custom Icon End--------------------------------------------------------------//

  //-------------------------------------------------------State Start-----------------------------------------------------------------//
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState(dayjs());
  const [eventTime, setEventTime] = useState(dayjs());
  const [eventDescription, setEventDescription] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [linkExpireDate, setLinkExpireDate] = useState(dayjs()); // Initialize with today's date
  const [imageCover, setImageCover] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //-------------------------------------------------------State End-------------------------------------------------------------------//

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const eventData = new FormData();
      eventData.append("image", imageCover);
      eventData.append("name", eventName);
      eventData.append("description", eventDescription);
      eventData.append("location", eventLocation);
      eventData.append("eventDate", eventDate.toISOString());
      eventData.append("eventTime", eventTime.format("HH:mm"));
      eventData.append("registrationLink", registrationLink);
      if (linkExpireDate) {
        eventData.append("linkExpireDate", linkExpireDate.toISOString());
      }

      const { data } = await axios.post("/event", eventData);
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setLoading(false);
        toast.success("Event Created");
        navigate("/events_list");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Event creation failed, check all fields");
    }
  };

  const handleEventDateChange = (date) => {
    const newDate = dayjs(date);
    setEventDate(newDate);

    // Set linkExpireDate to eventDate or reset if the date is before today
    if (newDate.isAfter(dayjs())) {
      setLinkExpireDate(newDate);
    } else {
      setLinkExpireDate(dayjs().add(1, "day")); // Default to tomorrow if selected date is today or in the past
    }
  };

  return (
    <Box>
      <Grid
        container
        spacing={3}
        direction={{
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
        }}
      >
        <Grid item xs={12} sm={12} md={7} lg={5}>
          <Stack spacing={3}>
            <TextField
              label="Event Name"
              variant="outlined"
              fullWidth
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <TextField
              label="Event Location"
              variant="outlined"
              fullWidth
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
            <Stack direction="row" spacing={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  slots={{
                    openPickerIcon: CalenderIcon,
                  }}
                  value={eventDate}
                  minDate={dayjs()}
                  onChange={handleEventDateChange} // Update event date and link expire date here
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  slots={{
                    openPickerIcon: ClockIcon,
                  }}
                  value={eventTime}
                  onChange={(time) => setEventTime(dayjs(time))}
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                />
              </LocalizationProvider>
            </Stack>
            <TextField
              label="Registration Link"
              variant="outlined"
              fullWidth
              value={registrationLink}
              onChange={(e) => {
                setRegistrationLink(e.target.value);
                if (!e.target.value) {
                  setLinkExpireDate(dayjs()); // Reset to today if registration link is removed
                }
              }}
            />
            {registrationLink && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  slots={{
                    openPickerIcon: CalenderIcon,
                  }}
                  value={linkExpireDate}
                  minDate={dayjs().add(1, "day")}
                  maxDate={eventDate}
                  onChange={(date) => setLinkExpireDate(dayjs(date))}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </LocalizationProvider>
            )}
            <TextField
              label="Event Description"
              multiline
              rows={4}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreate}
              endIcon={
                loading ? <CircularProgress color="inherit" size={24} /> : null
              }
            >
              {loading ? "Creating" : "Create"}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <EventCover imageCover={imageCover} setImageCover={setImageCover} />
        </Grid>
      </Grid>
    </Box>
  );
}
