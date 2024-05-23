import { TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export default function Header() {
//eslint-disable-next-line
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F4F6F8",
      color: "#637381",
      fontWeight: "600",
      borderBottom: "none",
    },
    "&:first-child": {
      borderRadius: "10px 0px 0px 10px",
    },
    "&:last-child": {
      borderRadius: "0px 10px 10px 0px",
    },
  }));
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <StyledTableCell align="left">Name</StyledTableCell>
        <StyledTableCell align="left">Email</StyledTableCell>
        <StyledTableCell align="center">Phone</StyledTableCell>
        <StyledTableCell align="center">Position</StyledTableCell>
        <StyledTableCell align="center">Budget</StyledTableCell>
        <StyledTableCell align="center">Service</StyledTableCell>
        <StyledTableCell align="center">Project Brief</StyledTableCell>
        <StyledTableCell align="center"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

