import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import UpdateSelectedExecutiveBody from "../Components/ExecutiveBody/UpdateExecutiveBody/UpdateSelectedExecutiveBody";
export default function UpdateExecutiveBody() {
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
        <UpdateSelectedExecutiveBody/>
      </Box>
    </Box>
  );
}
