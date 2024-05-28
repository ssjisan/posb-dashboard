import {
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
import { Update, Remove, More } from "../../../../assets/IconSet";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function Body({
  events,
  page,
  rowsPerPage,
  handleRemove,
  selectedEvents,
  setSelectedEvents,
}) {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

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

  return (
    <TableBody>
      {events
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data._id}>
            <TableCell component="th" scope="row" padding="none">
              <Stack direction="row" alignItems="center" spacing={2}>
                <img
                  src={`${process.env.REACT_APP_SERVER_API}/event/image/${data._id}`}
                  alt={data.name}
                  width="80px"
                  height="48px"
                />

                <Typography variant="subtitle2" noWrap>
                  {data.name}
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="left">{data.location}</TableCell>
            <TableCell align="left">
              {format(new Date(data.eventDate), "dd/MM/yyyy")}
            </TableCell>
            <TableCell align="left">{data.eventTime}</TableCell>
            <TableCell align="left">
              {data.published === true ? "Published" : "Hold"}
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
          sx: { width: 160, p: "8px", borderRadius: "8px" },
        }}
      >
        <MenuItem
          sx={{ display: "flex", gap: "8px", mb: "8px", borderRadius: "8px" }}
          onClick={(e) => redirectEdit(e, selectedEvents)}
        >
          <Update color="#919EAB" size={24} />
          Edit
        </MenuItem>
        <MenuItem
          sx={{
            color: "error.main",
            display: "flex",
            gap: "8px",
            borderRadius: "8px",
          }}
          onClick={(e) => {
            handleRemove(e);
            handleCloseMenu();
          }}
        >
          <Remove color="red" size={24} /> Delete
        </MenuItem>
      </Popover>
    </TableBody>
  );
}

Body.propTypes = {
  events: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
  handleRemove: PropTypes.any,
  isModalOpen: PropTypes.any,
  showModal: PropTypes.any,
  selectedEvents: PropTypes.any,
  setSelectedEvents: PropTypes.any,
};
