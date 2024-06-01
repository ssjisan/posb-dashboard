import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";

export default function Header() {

  
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <TableCell align="left">Title</TableCell>
        <TableCell align="left">Description</TableCell>
        <TableCell align="left">Author</TableCell>
        <TableCell align="left">Time</TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
}

