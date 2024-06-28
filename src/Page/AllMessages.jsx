import { Box, Grid, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import MessagesList from "../Components/Common/MessagesList";

export default function AllMessages() {
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <MessagesList />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
