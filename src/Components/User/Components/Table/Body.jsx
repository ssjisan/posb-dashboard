import { IconButton, TableBody, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PropTypes from "prop-types";
import { ChangePassword, Remove } from "../../../../assets/IconSet";
import RemoveUserModal from "../RemoveUserModal";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";

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
  // eslint-disable-next-line
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      color: "#212121",
      fontWeight: "500",
      border: "none",
      padding: "8px",
    },
  }));

  return (
    <TableBody>
      {users
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data.id}>
            <StyledTableCell align="left">{data.name}</StyledTableCell>
            <StyledTableCell align="left">{data.email}</StyledTableCell>
            <StyledTableCell align="center">
              <IconButton
                sx={{ width: "40px", height: "40px" }}
              >
                <ChangePassword color="#919EAB" size={24} />
              </IconButton>
              <IconButton
                sx={{ width: "40px", height: "40px" }}
                onClick={() => {
                  showModal();
                  setSelectedUser(data);
                }}
              >
                <Remove color="red" size={24} />
              </IconButton>
            </StyledTableCell>
          </TableRow>
        ))}
      <RemoveUserModal
        handleRemove={handleRemove}
        isModalOpen={isModalOpen}
        userRemoveModal={userRemoveModal}
      />
    </TableBody>
  );
}

Body.propTypes = {
  users: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.func,
  theme: PropTypes.any,
};
