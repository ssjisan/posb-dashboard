import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import UpdateSelectedAlbum from "../Components/Albums/UpdateAlbum/UpdateSelectedAlbum";
export default function UpdateAlbum() {
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
        <UpdateSelectedAlbum />
      </Box>
    </Box>
  );
}
