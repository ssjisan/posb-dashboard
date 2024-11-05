import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";

export default function Header() {

  
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <TableCell align="left">Name</TableCell>
        <TableCell align="left">Description</TableCell>
        <TableCell align="left">Location</TableCell>
        <TableCell align="left">Date</TableCell>
        <TableCell align="left">Reg. Link</TableCell>
        <TableCell align="left">Event Status</TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
}

