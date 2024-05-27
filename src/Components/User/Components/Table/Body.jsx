import {
  IconButton,
  MenuItem,
  Popover,
  TableBody,
  TableRow,
  Tooltip,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import { Update, Remove, More } from "../../../../assets/IconSet";
import RemoveUserModal from "../RemoveUserModal";
import { useState } from "react";

export default function Body({
  users,
  page,
  rowsPerPage,
  handleRemove,
  isModalOpen,
  userRemoveModal,
  showModal,
  setSelectedUser,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event, user) => {
    setOpen(event.currentTarget);
    setSelectedUser(user);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  return (
    <TableBody>
      {users
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data.id}>
            <TableCell align="left">{data.name}</TableCell>
            <TableCell align="left">{data.email}</TableCell>
            <TableCell align="center">
              <IconButton
                sx={{ width: "40px", height: "40px" }}
                onClick={(event) => handleOpenMenu(event, data)}
              >
                <More color="#919EAB" size={24} />
              </IconButton>
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
          sx: { width: 160, p: "8px", borderRadius: "16px" },
        }}
      >
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
  users: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.func,
  handleRemove: PropTypes.any,
  isModalOpen: PropTypes.any,
  showModal: PropTypes.any,
  setSelectedUser: PropTypes.func,
  userRemoveModal: PropTypes.any,
};
