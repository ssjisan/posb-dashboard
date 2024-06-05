import {
  Box,
  IconButton,
  MenuItem,
  Popover,
  TableBody,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import { Update, Remove, More } from "../../../../assets/IconSet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoticeModal from "../../RemoveNotice/NoticeModal";
import toast from "react-hot-toast";
import axios from "axios";

export default function Body({
  notices,
  page,
  rowsPerPage,
  selectedNotice,
  setSelectedNotice,
  isOpen,
  noticeTitle,
  handleClose,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const [noticeToDelete, setNoticeToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenMenu = (event, events) => {
    setOpen(event.currentTarget);
    setSelectedNotice(events);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const redirectEdit = (event, data) => {
    event.preventDefault();
    navigate(`/notice/${data._id}`);
  };
  const removeNotice = async (id) => {
    try {
      const { data } = await axios.delete(`/notice/${id}`);
      toast.success("Event deleted successfully");
      window.location.reload(); // Reloading the page to reflect the changes
    } catch (err) {
      console.error(err);
      toast.error("Unable to delete notice at the moment.");
    }
  };

  const handleRemove = () => {
    if (noticeToDelete) {
      removeNotice(noticeToDelete._id);
      setIsModalOpen(false);
      setNoticeToDelete(null);
    }
  };
  return (
    <TableBody>
      {notices
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data._id}>
            <TableCell component="th" scope="row" padding="none">
              <Typography variant="subtitle2" noWrap>
                {data.title}
              </Typography>
            </TableCell>
            <TableCell align="left" sx={{ width: "320px" }}>
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
            <TableCell align="left">{data?.author?.name}</TableCell>
            <TableCell align="left">
              {" "}
              {new Date(data.createdAt).toLocaleString()}
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
          onClick={(e) => redirectEdit(e, selectedNotice)}
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
            setNoticeToDelete(selectedNotice);
            setIsModalOpen(true);
            handleCloseMenu(); // Close popover
          }}
        >
          <Remove color="red" size={24} /> Delete
        </MenuItem>
      </Popover>
      <NoticeModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        noticeTitle={noticeToDelete ? noticeToDelete.title : ""}
        handleRemove={handleRemove}
      />
    </TableBody>
  );
}

Body.propTypes = {
  notices: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
  handleRemove: PropTypes.any,
  isModalOpen: PropTypes.any,
  showModal: PropTypes.any,
  setSelectedNotice: PropTypes.any,
  selectedNotice: PropTypes.any,
  setNoticeToDelete: PropTypes.any,
  noticeTitle: PropTypes.any,
  handleClose: PropTypes.any,
  isOpen: PropTypes.any,
  setIsModalOpen: PropTypes.any,
};
