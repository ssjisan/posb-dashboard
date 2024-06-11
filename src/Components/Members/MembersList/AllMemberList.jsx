import { Box, Typography } from "@mui/material";
import MemberTable from "./MemberTable";

export default function AllMemberList() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 0px" }}>
        <Typography variant="h4">Member List</Typography>
      </Box>
      <MemberTable />
    </Box>
  );
}
