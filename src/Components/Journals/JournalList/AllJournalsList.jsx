import NoticeListTable from "./NoticeListTable";
import { Box, Typography } from "@mui/material";

export default function AllJournalsList() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Journals List</Typography>
      </Box>
      <NoticeListTable />
    </Box>
  );
}
