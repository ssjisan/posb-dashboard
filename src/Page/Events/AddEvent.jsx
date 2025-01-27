import {
  Box,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "../../Layout/Sidebar";
import AddForm from "../../Components/Events/Add/AddForm";

export default function AddEvent() {
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
        <Box>
          <Box sx={{ p: forBelow1200 ? "24px 0px" : "24px" }}>
            <Stack gap={2} sx={{ pb: "64px", width: "100%" }}>
              <Typography variant="h4" sx={{ mb: "40px" }}>
                Create a new Event
              </Typography>
              <AddForm />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
