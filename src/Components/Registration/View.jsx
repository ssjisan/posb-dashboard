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
  const [open, setOpen] = useState(null); // For open pop up menu
  const [selectedRowId, setSelectedRowId] = useState(null); // Tracks the ID of the currently selected row to display the action menu.

  // ---------------- MENU HANDLERS ----------------
  const handleOpenMenu = (event, rowData) => {
    setOpen(event.currentTarget);
    setSelectedRowId(rowData);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setSelectedRowId(null);
  };

  // ---------------- FETCH EVENTS ----------------
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/events-list"); // API returns [{ _id, name }]
        setEvents(res.data || []);
      } catch (err) {
        console.error("Failed to fetch events list:", err);
      }
    };
    fetchEvents();
  }, []);

  // ---------------- FETCH REGISTRATIONS ----------------
  const fetchRegistrations = async () => {
    if (!selectedEvent) {
      setRegistrations([]);
      return;
    }
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

  useEffect(() => {
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
            <Body
              registrations={registrations}
              handleOpenMenu={handleOpenMenu}
              open={open}
              handleCloseMenu={handleCloseMenu}
              refreshData={fetchRegistrations}
              selectedEvent={selectedEvent}
            />
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
