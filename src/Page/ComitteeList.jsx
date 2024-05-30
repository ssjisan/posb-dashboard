import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import ListOfCommittee from "../Components/ExecutiveCommittee/ListOfCommittee/ListOfCommittee";
export default function ComitteeList() {
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
        <ListOfCommittee />
      </Box>
    </Box>
  );
}
