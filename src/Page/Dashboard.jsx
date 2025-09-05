import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import MatrixCardDeck from "../Components/Dashboard/MatrixCardDeck";
import WelcomeCard from "../Components/Dashboard/WelcomeCard/WelcomeCard";
export default function Dashboard() {
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
        <Box>
          <WelcomeCard />
          <MatrixCardDeck />
          {/* <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <NoticeUpdate />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Box>
  );
}
