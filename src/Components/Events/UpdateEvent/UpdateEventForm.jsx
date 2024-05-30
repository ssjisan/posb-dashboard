import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Calender, Clock } from "../../../assets/IconSet";
import EventCover from "./EventCover";
import AntSwitch from "../../Common/AntSwitch";
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
  const [published, setPublished] = useState(true);
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const params = useParams();

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
      setPublished(data.published);
      setId(data._id);
      setImage(data.image);
      console.log(data)
    } catch (err) {
      toast.error("Failed to load event data");
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const eventData = new FormData();
      image && eventData.append("image", image);
      eventData.append("name", eventName);
      eventData.append("description", eventDescription);
      eventData.append("location", eventLocation);
      eventData.append("eventDate", eventDate.toISOString());
      eventData.append("eventTime", eventTime.format("HH:mm"));
      eventData.append("published", published);

      const { data } = await axios.put(`/event/${id}`, eventData);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Event Updated");
        navigate("/events_list");
        window.location.reload();
      }
    } catch (err) {
      toast.error("Event update failed");
    }
  };

  return (
    <Box sx={{ p: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={7}>
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
              label="Event Description"
              multiline
              rows={4}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <Stack direction="row" spacing={1} alignItems="center">
              <AntSwitch
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              />
              <Typography>Publish Event</Typography>
            </Stack>
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <EventCover image={image} setImage={setImage} id={id} eventName={eventName}/>
        </Grid>
      </Grid>
    </Box>
  );
}
