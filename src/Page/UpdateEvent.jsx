import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import UpdateAnEvent from "../Components/Events/UpdateEvent/UpdateAnEvent";
export default function UpdateEvent() {
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
        <UpdateAnEvent />
      </Box>
    </Box>
  );
}
