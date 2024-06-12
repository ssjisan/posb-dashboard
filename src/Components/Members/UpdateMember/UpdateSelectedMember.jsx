import { Box, Typography } from "@mui/material";
import UpdateMemberForm from "./UpdateMemberForm";

export default function UpdateSelectedMember() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 0px" }}>
        <Typography variant="h4">Update member</Typography>
      </Box>
      <UpdateMemberForm />
    </Box>
  );
}
