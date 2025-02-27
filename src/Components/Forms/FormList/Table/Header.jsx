import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";

export default function Header() {
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <TableCell align="center" sx={{ width: "40px" }}></TableCell>
        <TableCell align="left">Title</TableCell>
        <TableCell align="left">Preview</TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
}
