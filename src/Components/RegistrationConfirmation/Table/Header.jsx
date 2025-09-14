import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">Name</TableCell>

        {/* Merged Email + Phone */}
        <TableCell align="left">
          <Box>
            <Typography variant="body2" fontSize="0.8rem" noWrap>
              Email
            </Typography>
            <Typography variant="body1" noWrap>
              Phone
            </Typography>
          </Box>
        </TableCell>

        {/* Merged Designation + Workplace */}
        <TableCell align="left">
          <Box>
            <Typography variant="body1" noWrap>
              Designation
            </Typography>
            <Typography variant="body2" fontSize="0.8rem" noWrap>
              Workplace
            </Typography>
          </Box>
        </TableCell>

        <TableCell align="left">Payment From</TableCell>
        <TableCell align="left">TrxID</TableCell>
        <TableCell align="left">Status</TableCell>
      </TableRow>
    </TableHead>
  );
}
