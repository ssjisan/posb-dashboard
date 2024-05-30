import {
  Box,
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
import { Update, Remove, More, EyeOn } from "../../../../assets/IconSet";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import RemoveAlbumModal from "../../RemoveAlbum/RemoveAlbumModal";

export default function Body({
  events,
  page,
  rowsPerPage,
  selectedAlbum,
  setSelectedAlbum,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [albumToDelete, setAlbumToDelete] = useState(null);

  const handleOpenMenu = (event, data) => {
    setOpen(event.currentTarget);
    setSelectedAlbum(data);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const removeProduct = async (id) => {
    try {
      const { data } = await axios.delete(`/album/${id}`);
      toast.success("Event deleted successfully");
      window.location.reload(); // Reloading the page to reflect the changes
    } catch (err) {
      console.error(err);
      toast.error("Unable to delete album at the moment.");
    }
  };

  const handleConfirmRemove = () => {
    if (albumToDelete) {
      removeProduct(albumToDelete._id);
      setIsModalOpen(false);
      setAlbumToDelete(null);
    }
  };
  
  return (
    <TableBody>
      {events
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data._id}>
            <TableCell component="th" scope="row">
              <Stack direction="row" alignItems="center" spacing={2}>
                {data?.images?.length > 0 && ( // Check if images array is not empty
                  <Box
                    sx={{
                      width: "80px",
                      height: "48px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={data.images[0]}
                      alt="First Image"
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                )}
                <Typography variant="subtitle2" noWrap align="left">
                  {data.name}
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="left">
              {" "}
              {new Date(data.createdAt).toLocaleString()}
            </TableCell>
            <TableCell align="center">{data?.images?.length}</TableCell>
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
        >
          <EyeOn color="#919EAB" size={24} />
          Preview
        </MenuItem>
        <MenuItem
          sx={{ display: "flex", gap: "8px", mb: "8px", borderRadius: "8px" }}
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
          onClick={() => {
            setAlbumToDelete(selectedAlbum);
            setIsModalOpen(true);
            handleCloseMenu(); // Close popover
          }}
        >
          <Remove color="red" size={24} /> Delete
        </MenuItem>
      </Popover>
      <RemoveAlbumModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        eventName={albumToDelete ? albumToDelete.name : ""}
        handleRemove={handleConfirmRemove}
      />
    </TableBody>
  );
}

Body.propTypes = {
  events: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
  selectedAlbum: PropTypes.any,
  setSelectedAlbum: PropTypes.any,
};
