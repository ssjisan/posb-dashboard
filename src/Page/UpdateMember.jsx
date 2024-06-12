import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import UpdateSelectedMember from "../Components/Members/UpdateMember/UpdateSelectedMember";

export default function UpdateMember() {
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
        <UpdateSelectedMember/>
      </Box>
    </Box>
  );
}
