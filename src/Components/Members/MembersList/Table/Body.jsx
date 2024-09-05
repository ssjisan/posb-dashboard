import { Edit, More, Remove, Update } from "../../../../assets/IconSet";
import {
  Box,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import RemoveMemberModal from "../../RemoveMember.jsx/RemoveMemberModal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Body({
  members,
  rowsPerPage,
  page,
  handleOpenMenu,
  openMenu,
  handleCloseMenu,
  selectedMember,
}) {
  const defaultAvatar = "/dp.png"; // Replace with the path to your default avatar
  const [openRemoveModal,setOpenRemoveModal] = useState(false)
  const [memberForDelete, setMemberForDelete] = useState(null);
  const navigate = useNavigate()

  const handleDelete = async (memberId) => {
    try {
      const loadingToastId = toast.loading('Deleting member...');
      await axios.delete(`/member/${memberId}`);
      toast.success('Member deleted successfully', { id: loadingToastId });
      window.location.reload();
    } catch (error) {
      toast.error('Failed to delete member');
    }
  };

  const handleConfirmRemove = () => {
    if (memberForDelete) {
      handleDelete(memberForDelete._id);
      setOpenRemoveModal(false);
      setMemberForDelete(null)
    }
  };

  const redirectEdit = (event, data) => {
    event.preventDefault();
    navigate(`/member/${data._id}`);
  };


  return (
    <TableBody>
      {members
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data._id}>
            <TableCell component="th" scope="row" padding="none">
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={
                      data?.profilePhoto?.length
                        ? data.profilePhoto[0]?.url
                        : defaultAvatar
                    }
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
                    }}
                  >
                    {data.name}
                  </Box>
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="left">{data.designation}</TableCell>
            <TableCell align="left">{data.workPlace}</TableCell>
            <TableCell align="left">{data.email}</TableCell>
            <TableCell align="left">{data.phone}</TableCell>
            <TableCell align="left">{data.mailingAddress}</TableCell>
            <TableCell align="center">
              <Tooltip title="Actions">
                <IconButton
                  sx={{ width: "40px", height: "40px" }}
                  onClick={(e) => handleOpenMenu(e, data)}
                >
                  <More color="#919EAB" size={24} />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      <Popover
        open={openMenu}
        anchorEl={openMenu}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 160, p: "8px", borderRadius: "8px",boxShadow: "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)", },        }}
      >
        <MenuItem
          sx={{ display: "flex", gap: "8px", mb: "8px", borderRadius: "8px" }}
          onClick={(e) => redirectEdit(e, selectedMember)}
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
            setMemberForDelete(selectedMember)
            setOpenRemoveModal(true);
            handleCloseMenu(); // Close popover
          }}
        >
          <Remove color="red" size={20} /> Delete
        </MenuItem>
      </Popover>
      <RemoveMemberModal
        open={openRemoveModal}
        handleClose={() => setOpenRemoveModal(false)}
        memberName={memberForDelete ? memberForDelete.name : ""}
        handleRemove={handleConfirmRemove}
      />
    </TableBody>
  );
}

Body.propTypes = {
  members: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
  handleOpenMenu: PropTypes.any,
  openMenu: PropTypes.any,
  handleCloseMenu: PropTypes.any,
  selectedMember: PropTypes.any,
};
