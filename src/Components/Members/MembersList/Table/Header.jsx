import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";

export default function Header() {
  
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <TableCell align="left">Name</TableCell>
        <TableCell align="left">Designation</TableCell>
        <TableCell align="left">Work Place</TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="left">Phone</TableCell>
        <TableCell align="left">Address</TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
}
