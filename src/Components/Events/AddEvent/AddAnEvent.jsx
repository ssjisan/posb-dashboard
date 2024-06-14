import { Box,Typography } from "@mui/material";
import AddEventForm from "./AddEventForm";

export default function AddAnEvent() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 24px 0px" }}>
        <Typography variant="h4">Create an Event</Typography>
      </Box>
      <AddEventForm />
    </Box>
  );
}
