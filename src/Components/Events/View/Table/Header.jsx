import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";

export default function Header({ selectedTab }) {
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        {selectedTab === "running" && <TableCell align="center"></TableCell>}
        <TableCell align="left" sx={{ p: "16px" }}>
          Name
        </TableCell>
        <TableCell align="left" sx={{ p: "16px" }}>
          Location
        </TableCell>
        <TableCell align="left" sx={{ p: "16px" }}>
          Date
        </TableCell>
        <TableCell align="left" sx={{ p: "16px" }}>
          Time
        </TableCell>
        <TableCell align="left" sx={{ p: "16px" }}>
          Reg. Required
        </TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
}

Header.propTypes = {
  selectedTab: PropTypes.string.isRequired, // Ensures selectedTab is a required string
};