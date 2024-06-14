import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import ExecutiveBodyList from "../Components/ExecutiveBody/ExecutiveBodyList/ExecutiveBodyList";
export default function ExecutiveBody() {
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
        <ExecutiveBodyList/>
      </Box>
    </Box>
  );
}
