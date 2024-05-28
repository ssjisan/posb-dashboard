import { Box, Container, Typography } from "@mui/material";
import UpdateEventForm from "./UpdateEventForm";

export default function UpdateAnEvent() {
  return (
    <Container>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Update an Event</Typography>
      </Box>
      <UpdateEventForm />
    </Container>
  );
}
