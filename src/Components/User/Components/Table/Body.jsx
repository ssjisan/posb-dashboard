import { IconButton, TableBody, TableRow, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PropTypes from "prop-types";
import { Update, Remove } from "../../../../assets/IconSet";
import RemoveUserModal from "../RemoveUserModal";

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
              <Tooltip title="Update">
                <IconButton sx={{ width: "40px", height: "40px" }}>
                  <Update color="#919EAB" size={24} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Remove">
                <IconButton
                  sx={{ width: "40px", height: "40px" }}
                  onClick={() => {
                    showModal();
                    setSelectedUser(data);
                  }}
                >
                  <Remove color="red" size={24} />
                </IconButton>
              </Tooltip>
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
  handleRemove: PropTypes.any,
  isModalOpen: PropTypes.any,
  showModal: PropTypes.any,
  setSelectedUser: PropTypes.func,
  userRemoveModal: PropTypes.any,
};
