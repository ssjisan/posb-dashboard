import { Box, Container, Typography } from "@mui/material";
import AddEventForm from "./AddEventForm";

export default function AddAnEvent() {
  return (
    <Container>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Create an Event</Typography>
      </Box>
      <AddEventForm />
    </Container>
  );
}
