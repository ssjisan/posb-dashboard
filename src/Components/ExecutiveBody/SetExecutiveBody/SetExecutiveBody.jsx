import { Box, Typography } from "@mui/material";
import SetExecutiveBodyForm from "./SetExecutiveBodyForm";

export default function SetExecutiveBody() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 24px 0px" }}>
        <Typography variant="h4">Set Executive Body</Typography>
      </Box>
      <SetExecutiveBodyForm />
    </Box>
  );
}
