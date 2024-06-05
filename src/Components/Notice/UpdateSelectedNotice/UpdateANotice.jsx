import { Box, Container, Typography } from "@mui/material";
import UpdateNoticeForm from "./UpdateNoticeForm";

export default function UpdateANotice() {
  return (
    <Container>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Update a Notice</Typography>
      </Box>
      <UpdateNoticeForm />
    </Container>
  );
}
