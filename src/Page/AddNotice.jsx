import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AddAnNotice from "../Components/Notice/AddNewNotice/AddAnNotice";
export default function AddNotice() {
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
        <AddAnNotice />
      </Box>
    </Box>
  );
}
