import { Box, Container, Typography } from "@mui/material";
import UserListTable from "./Components/UserListTable";

export default function AllUserList() {
  return (
    <Container>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">User List</Typography>
      </Box>
      <UserListTable />
    </Container>
  );
}
