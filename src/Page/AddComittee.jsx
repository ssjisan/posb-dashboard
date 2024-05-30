import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import CommitteeAdd from "../Components/ExecutiveCommittee/CommitteeAdd/CommitteeAdd";
export default function AddComittee() {
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
        <CommitteeAdd />
      </Box>
    </Box>
  );
}
