import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AddAnEvent from "../Components/Events/AddEvent/AddAnEvent";
export default function AddEvent() {
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
        <AddAnEvent />
      </Box>
    </Box>
  );
}
