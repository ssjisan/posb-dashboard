import { Box, Typography } from "@mui/material";
import UpdateEventForm from "./UpdateEventForm";

export default function UpdateAnEvent() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 24px 0px" }}>
      <Typography variant="h4">Update an Event</Typography>
      </Box>
      <UpdateEventForm />
    </Box>
  );
}
