import { Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Sidebar from "../../Layout/Sidebar";
import View from "../../Components/RegistrationConfirmation/View";

export default function RegistrationConfirm() {
  const drawerWidth = 280;
  const forBelow1200 = useMediaQuery("(max-width:1200px)");
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
        <Box sx={{ p: forBelow1200 ? "24px 0px" : "24px" }}>
          <Typography variant="h5" sx={{ mb: "40px" }}>
            Registration Confirmation List
          </Typography>
          <View />
        </Box>
      </Box>
    </Box>
  );
}
