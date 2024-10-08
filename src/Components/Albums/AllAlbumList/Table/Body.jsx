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
import { Update, Remove, More, EyeOn, EyeBold, Edit } from "../../../../assets/IconSet";
import RemoveAlbumModal from "../../RemoveAlbum/RemoveAlbumModal";
import AlbumView from "../AlbumView";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

export default function Body({
  events,
  page,
  open,
  rowsPerPage,
  selectedAlbum,
  handleOpenMenu,
  handleCloseMenu,
  setAlbumToDelete,
  setIsModalOpen,
  isModalOpen,
  albumToDelete,
  handleConfirmRemove,
}) {
  const [albumOpen, setAlbumOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]); // State for selected images
  const navigate = useNavigate()
  const handleOpen = (images) => {
    setSelectedImages(images); // Set the selected images array in state
    setAlbumOpen(true); // Open the modal
  };

  const handleClose = () => setAlbumOpen(false);

  const handlePreviewClick = () => {
    setAlbumOpen(true);
    handleCloseMenu(); // Close popover
  };
  const redirectEdit = (e, selectedAlbum) => {
    navigate(`/album/${selectedAlbum.slug}`);
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
                    src={data.images[0].url}
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
            {format(new Date(data.createdAt), "dd MMMM yyyy, hh:mm a")}
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
          sx: { width: 160, p: "8px", borderRadius: "8px",boxShadow: "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)", },
        }}
      >
        <MenuItem
          sx={{ display: "flex", gap: "8px", mb: "8px", borderRadius: "8px" }}
          onClick={handlePreviewClick}
        >
          <EyeBold color="#919EAB" size={20} />
          Preview
        </MenuItem>
        <MenuItem
          sx={{ display: "flex", gap: "8px", mb: "8px", borderRadius: "8px" }}
          onClick={(e) => redirectEdit(e, selectedAlbum)}
        >
          <Edit color="#919EAB" size={20} />
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
          <Remove color="red" size={20} /> Delete
        </MenuItem>
      </Popover>
      <RemoveAlbumModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        eventName={albumToDelete ? albumToDelete.name : ""}
        handleRemove={handleConfirmRemove}
      />
       <AlbumView
        selectedImages={selectedAlbum?.images} // Pass selected album images to AlbumView
        handleClose={() => setAlbumOpen(false)}
        albumOpen={albumOpen}
      />
    </TableBody>
  );
}

Body.propTypes = {
  events: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
  selectedAlbum: PropTypes.any,
  open: PropTypes.any,
  setSelectedAlbum: PropTypes.any,
  handleOpenMenu: PropTypes.any,
  handleCloseMenu: PropTypes.any,
  setAlbumToDelete: PropTypes.any,
  setIsModalOpen: PropTypes.any,
  isModalOpen: PropTypes.any,
  albumToDelete: PropTypes.any,
  handleConfirmRemove: PropTypes.any,
};
