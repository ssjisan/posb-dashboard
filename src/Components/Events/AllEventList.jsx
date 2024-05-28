import { Box, Container, Typography } from "@mui/material";
import EventListTable from "./EventList/EventListTable";

export default function AllEventList() {
  return (
    <Container>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Event List</Typography>
      </Box>
      <EventListTable />
    </Container>
  );
}
