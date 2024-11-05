import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  TableBody,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import { Remove, More, Edit } from "../../../../assets/IconSet";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import EventModal from "../../RemoveEvent/EventModal";
import axios from "axios";
import toast from "react-hot-toast";

export default function Body({
  events,
  setEvents,
  page,
  rowsPerPage,
  selectedEvents,
  setSelectedEvents,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const handleOpenMenu = (event, events) => {
    setOpen(event.currentTarget);
    setSelectedEvents(events);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const redirectEdit = (event, data) => {
    event.preventDefault();
    navigate(`/event/${data.slug}`);
  };

  const removeProduct = async (id) => {
    try {
      await axios.delete(`/event/${id}`);
      // Update the events state by filtering out the deleted event
      setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
      toast.success("Event deleted successfully");
    } catch (err) {
      toast.error("Unable to delete event at the moment.");
    }
  };

  const handleConfirmRemove = () => {
    if (eventToDelete) {
      removeProduct(eventToDelete._id);
      setIsModalOpen(false);
      setEventToDelete(null);
    }
  };
  const defaultAvatar = "/elementor-placeholder-image.webp"; // Replace with the path to your default avatar

  return (
    <TableBody>
      {events
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data._id}>
            <TableCell
              component="th"
              scope="row"
              sx={{ padding: "16px", width: "320px" }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: "80px",
                    height: "48px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`${process.env.REACT_APP_SERVER_API}/event/image/${data._id}`}
                    alt={data.name}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src = defaultAvatar;
                    }}
                  />
                </Box>
                <Typography variant="subtitle2" noWrap>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      width: "274px",
                    }}
                  >
                    {data.name}
                  </Box>
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "320px" }}>
              <Tooltip title={data.description}>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: "320px",
                  }}
                >
                  {data.description}
                </Box>
              </Tooltip>
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "280px" }}>
              {data.location}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "200px" }}>
              {format(new Date(data.eventDate), "dd/MM/yyyy")}, {data.eventTime}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px", width: "140px" }}>
              {data.registrationLink && data.registrationLink.trim() !== "" ? (
                <a
                  href={data.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              ) : (
                "None"
              )}
            </TableCell>
            <TableCell align="left" sx={{ padding: "16px" }}>
              {data.eventExpired === false ? (
                <Chip label="Running" color="primary" variant="outlined" />
              ) : (
                <Chip label="Expired" color="error" variant="outlined" />
              )}
            </TableCell>
            <TableCell align="center">
              <Tooltip title="Actions">
                <IconButton
                  sx={{ width: "40px", height: "40px" }}
                  onClick={(event) => handleOpenMenu(event, data)}
                >
                  <More color="#919EAB" size={24} />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      <Popover
        open={open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            width: 160,
            p: "8px",
            borderRadius: "8px",
            boxShadow: "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
          },
        }}
      >
        <MenuItem
          sx={{ display: "flex", gap: "16px", mb: "8px", borderRadius: "8px" }}
          onClick={(e) => redirectEdit(e, selectedEvents)}
        >
          <Edit color="#919EAB" size={20} />
          Edit
        </MenuItem>
        <MenuItem
          sx={{
            color: "error.main",
            display: "flex",
            gap: "16px",
            borderRadius: "8px",
          }}
          onClick={() => {
            setEventToDelete(selectedEvents);
            setIsModalOpen(true);
            handleCloseMenu(); // Close popover
          }}
        >
          <Remove color="red" size={20} /> Delete
        </MenuItem>
      </Popover>
      <EventModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        eventName={eventToDelete ? eventToDelete.name : ""}
        handleRemove={handleConfirmRemove}
      />
    </TableBody>
  );
}

Body.propTypes = {
  events: PropTypes.any,
  setEvents: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
  handleRemove: PropTypes.any,
  isModalOpen: PropTypes.any,
  showModal: PropTypes.any,
  selectedEvents: PropTypes.any,
  setSelectedEvents: PropTypes.any,
};
