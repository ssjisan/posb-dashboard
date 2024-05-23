import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import ProjectRequestTable from "../Components/Events/ProjectRequestTable";
export default function EventList() {
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
        <ProjectRequestTable />
      </Box>
    </Box>
  );
}
