import { Box, Typography } from "@mui/material";
import UpdateExecutiveForm from "./UpdateExecutiveForm";

export default function UpdateSelectedExecutiveBody() {

  return (
    <Box>
      <Box sx={{ p: "24px 24px 24px 0px" }}>
        <Typography variant="h4">Update Executive Body</Typography>
      </Box>
      <UpdateExecutiveForm />
    </Box>
  );
}
