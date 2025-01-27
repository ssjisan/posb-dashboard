import { Box, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Sidebar from "../../Layout/Sidebar";
import UpdateForm from "../../Components/Events/Update/UpdateForm";
export default function UpdateEvent() {
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
            <Stack gap={2} sx={{ pb: "64px", width: "100%" }}>
              <Typography variant="h4" sx={{ mb: "40px" }}>
                Update Event
              </Typography>
              <UpdateForm />
            </Stack>
          </Box>
      </Box>
    </Box>
  );
}
