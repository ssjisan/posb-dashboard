import { Box, Typography } from "@mui/material";
import AddNoticeForm from "./AddNoticeForm";

export default function AddAnNotice() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Create a Notice</Typography>
      </Box>
      <AddNoticeForm />
    </Box>
  );
}
