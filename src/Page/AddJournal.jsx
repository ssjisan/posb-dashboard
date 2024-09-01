import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import AddAJournal from "../Components/Journals/AddJournal/AddAJournal";
export default function AddJournal() {
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
        <AddAJournal />
      </Box>
    </Box>
  );
}
