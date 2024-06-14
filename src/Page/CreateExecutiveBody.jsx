import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import SetExecutiveBody from "../Components/ExecutiveBody/SetExecutiveBody/SetExecutiveBody";
export default function CreateExecutiveBody() {
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
        <SetExecutiveBody/>
      </Box>
    </Box>
  );
}
