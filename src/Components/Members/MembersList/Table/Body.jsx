import { More } from "../../../../assets/IconSet";
import {
  Box,
  IconButton,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export default function Body({ members, rowsPerPage, page }) {
  const defaultAvatar = "/dp.png"; // Replace with the path to your default avatar
  return (
    <TableBody>
      {members
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data._id}>
            <TableCell component="th" scope="row" padding="none">
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                     src={data?.profilePhoto?.length ? data.profilePhoto[0]?.url : defaultAvatar}
                    alt={data.name}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src = defaultAvatar;
                    }}
                  />
                </Box>
                <Typography variant="subtitle2" noWrap>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {data.name}
                  </Box>
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="left">{data.designation}</TableCell>
            <TableCell align="left">{data.workPlace}</TableCell>
            <TableCell align="left">{data.email}</TableCell>
            <TableCell align="left">{data.phone}</TableCell>
            <TableCell align="left">{data.mailingAddress}</TableCell>
            <TableCell align="center">
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

Body.propTypes = {
  members: PropTypes.any,
  page: PropTypes.any,
  rowsPerPage: PropTypes.any,
};
