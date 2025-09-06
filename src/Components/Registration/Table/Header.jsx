import { TableHead, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { Box, Typography } from "@mui/material";

export default function Header() {
  const columnCount = 7; // Adjusted: Name, Email/Phone, Designation/Workplace, Payment From, TrxID, Status
  const cellStyle = {
    p: "16px",
    width: `${100 / columnCount}%`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    verticalAlign: "top",
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="left" sx={cellStyle}>
          Name
        </TableCell>

        {/* Merged Email + Phone */}
        <TableCell align="left" sx={cellStyle}>
          <Box>
            <Typography variant="body1" noWrap>
              Email
            </Typography>
            <Typography variant="body2" fontSize="0.8rem" noWrap>
              Phone
            </Typography>
          </Box>
        </TableCell>

        {/* Merged Designation + Workplace */}
        <TableCell align="left" sx={cellStyle}>
          <Box>
            <Typography variant="body1" noWrap>
              Designation
            </Typography>
            <Typography variant="body2" fontSize="0.8rem" noWrap>
              Workplace
            </Typography>
          </Box>
        </TableCell>

        <TableCell align="left" sx={cellStyle}>
          Payment From
        </TableCell>
        <TableCell align="left" sx={cellStyle}>
          TrxID
        </TableCell>
        <TableCell align="left" sx={cellStyle}>
          Status
        </TableCell>
        <TableCell align="left" sx={cellStyle}>
          Action
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
