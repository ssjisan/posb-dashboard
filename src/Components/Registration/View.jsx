import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Table,
  TableContainer,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";

export default function View() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all events for the dropdown
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/events-list"); // API that returns { _id, name }
        setEvents(res.data || []);
      } catch (err) {
        console.error("Failed to fetch events list:", err);
      }
    };
    fetchEvents();
  }, []);

  // Fetch registrations whenever selectedEvent changes
  useEffect(() => {
    if (!selectedEvent) {
      setRegistrations([]);
      return;
    }

    const fetchRegistrations = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/registrations?course=${selectedEvent}`);
        setRegistrations(res.data.registrations || []);
      } catch (err) {
        console.error("Failed to fetch registrations:", err);
        setRegistrations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [selectedEvent]);

  return (
    <Box
      sx={{
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        borderRadius: "16px",
        p: 2,
        mt: 3,
      }}
    >
      {/* Event select dropdown */}
      <FormControl sx={{ mb: 2, minWidth: 220 }}>
        <InputLabel id="event-select-label">Select Event</InputLabel>
        <Select
          labelId="event-select-label"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
        >
          {events.map((event) => (
            <MenuItem key={event._id} value={event._id}>
              {event.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Show table or message */}
      {loading ? (
        <Typography sx={{ mt: 2 }}>Loading registrations...</Typography>
      ) : registrations.length === 0 ? (
        <Typography sx={{ mt: 2 }}>No registration for this course</Typography>
      ) : (
        <TableContainer>
          <Table sx={{ mt: "16px" }}>
            <Header />
            <Body registrations={registrations} />
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
