import {
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Box,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import { More } from "../../../assets/IconSet";

const getStatusColor = (status) => {
  switch (status) {
    case "applied":
      return "#9e9e9e"; // grey[500]
    case "payment-submitted":
      return "#ff9800"; // warning.main
    case "payment-approved":
      return "#4caf50"; // success.main
    case "payment-rejected":
      return "#f44336"; // error.main
    default:
      return "#9e9e9e"; // grey[500]
  }
};

export default function Body({ registrations }) {
  const columnCount = 7;
  const cellStyle = {
    width: `${100 / columnCount}%`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    p: "16px",
    verticalAlign: "top",
  };

  return (
    <TableBody>
      {registrations.map((data, index) => (
        <TableRow key={index}>
          <TableCell sx={cellStyle}>{data.name}</TableCell>

          {/* Email + Phone */}
          <TableCell sx={cellStyle}>
            <Box>
              <Typography variant="body1" noWrap>
                {data.email}
              </Typography>
              <Typography variant="body2" fontSize="0.8rem" noWrap>
                {data.phone}
              </Typography>
            </Box>
          </TableCell>

          {/* Designation + Workplace */}
          <TableCell sx={cellStyle}>
            <Box>
              <Typography variant="body1" noWrap>
                {data.designation}
              </Typography>
              <Typography variant="body2" fontSize="0.8rem" noWrap>
                {data.workplace}
              </Typography>
            </Box>
          </TableCell>

          <TableCell sx={cellStyle}>{data.senderNumber}</TableCell>
          <TableCell sx={cellStyle}>{data.transactionId}</TableCell>

          {/* Status with custom theme color */}
          <TableCell sx={cellStyle}>
            <Chip
              label={data.status}
              size="small"
              sx={{
                backgroundColor: getStatusColor(data.status),
                color: "#fff", // white text for contrast
                fontWeight: 500,
              }}
            />
          </TableCell>
          <TableCell align="center" sx={cellStyle}>
            <Tooltip title="Actions">
              <IconButton sx={{ width: "40px", height: "40px" }}>
                <More color="#919EAB" size={24} />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
