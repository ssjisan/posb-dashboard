import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AddAnUser from "../Components/User/AddAnUser";
export default function AddUser() {
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
        <AddAnUser />
      </Box>
    </Box>
  );
}
