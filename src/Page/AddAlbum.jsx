import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AddNewAlbum from "../Components/Albums/AddNewAlbum/AddNewAlbum";
export default function AddAlbum() {
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
        <AddNewAlbum/>
      </Box>
    </Box>
  );
}
