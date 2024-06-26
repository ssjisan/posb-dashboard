import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AllAblumListTable from "../Components/Albums/AllAlbumList/AllAblumListTable";
export default function AlbumList() {
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
        <AllAblumListTable />
      </Box>
    </Box>
  );
}
