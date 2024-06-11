import { TablePagination } from "@mui/material";
import PropTypes from "prop-types";

export default function Pagination({
  members,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <TablePagination
      rowsPerPageOptions={[5]}
      component="div"
      count={members.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{
        borderBottom: "none",
        borderTop: "1px solid rgba(145, 158, 171, 0.24)",
      }}
    />
  );
}
Pagination.propTypes = {
  members: PropTypes.any,
  rowsPerPage: PropTypes.any,
  page: PropTypes.func,
  handleChangePage: PropTypes.any,
  handleChangeRowsPerPage: PropTypes.any,
};
