import { Box, Typography } from "@mui/material";
import AddMemberForm from "./AddMemberForm";

export default function AddNewMember() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 0px" }}>
        <Typography variant="h4">Add a member</Typography>
      </Box>
      <AddMemberForm />
    </Box>
  );
}
