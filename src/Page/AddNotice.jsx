import { Box, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
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
        <Box sx={{ paddingBottom: "20px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Typography variant="h4" color="text.priamry">
              This is Add Notice
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
