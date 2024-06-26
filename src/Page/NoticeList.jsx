import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AllNoticeList from "../Components/Notice/AllNoticeList/AllNoticeList";
export default function NoticeList() {
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
        <AllNoticeList />
      </Box>
    </Box>
  );
}
