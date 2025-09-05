import {
  Box,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "../../Layout/Sidebar";
import Form from "../../Components/Events/Add/Form";

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
              <Form />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
