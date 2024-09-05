import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Calender, Clock } from "../../../assets/IconSet";
import EventCover from "./EventCover";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateEventForm() {
  // Custom Icons
  const CalenderIcon = () => <Calender color="grey" size={24} />;
  const ClockIcon = () => <Clock color="grey" size={24} />;

  // State Declaration
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState(dayjs());
  const [eventTime, setEventTime] = useState(dayjs());
  const [eventDescription, setEventDescription] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const { data } = await axios.get(`/event/${params.slug}`);
      setEventName(data.name);
      setEventLocation(data.location);
      setEventDate(dayjs(data.eventDate));
      setEventTime(dayjs(data.eventTime, "HH:mm"));
      setEventDescription(data.description);
      setRegistrationLink(data.registrationLink);
      setId(data._id);
      setImage(data.image);
    } catch (err) {
      toast.error("Failed to load event data");
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const eventData = new FormData();
      image && eventData.append("image", image);
      eventData.append("name", eventName);
      eventData.append("description", eventDescription);
      eventData.append("registrationLink", registrationLink);
      eventData.append("location", eventLocation);
      eventData.append("eventDate", eventDate.toISOString());
      eventData.append("eventTime", eventTime.format("HH:mm"));

      const { data } = await axios.put(`/event/${id}`, eventData);
      if (data?.error) {
        setLoading(false);

        toast.error(data.error);
      } else {
        setLoading(false);

        toast.success("Event Updated");
        navigate("/events_list");
        window.location.reload();
      }
    } catch (err) {
      setLoading(false);

      toast.error("Event update failed");
    }
  };

  return (
    <Box>
      <Grid container spacing={3} direction={{ xs: "column-reverse", sm: "column-reverse", md: "row", lg: "row" }}>
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
                  onChange={(date) => setEventDate(dayjs(date))}
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
              onChange={(e) => setRegistrationLink(e.target.value)}
            />
            <TextField
              label="Event Description"
              multiline
              minRows={2} // Minimum number of rows
              maxRows={10}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdate}
              endIcon={loading ? <img src="/spinner.gif" width="24px" /> : null}
            >
              {loading ? "Updating" : "Update"}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <EventCover
            image={image}
            setImage={setImage}
            id={id}
            eventName={eventName}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
