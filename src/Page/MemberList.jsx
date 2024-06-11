import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AllMemberList from "../Components/Members/MembersList/AllMemberList";
export default function MemberList() {
  const drawerWidth = 280;

  return (
    <Box>
      <Sidebar />
      <Box
        component="main"
        sx={{
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <AllMemberList/>
      </Box>
    </Box>
  );
}
