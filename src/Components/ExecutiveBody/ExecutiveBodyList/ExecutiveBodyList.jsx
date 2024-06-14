import { Box, Typography } from "@mui/material";
import ListAccordion from "./ListAccordion";

export default function ExecutiveBodyList() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 24px 0px" }}>
        <Typography variant="h4">All Executive Committees</Typography>
      </Box>
      <ListAccordion />
    </Box>
  )
}
