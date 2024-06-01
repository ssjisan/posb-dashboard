import NoticeListTable from "./NoticeListTable";
import { Box, Container, Typography } from "@mui/material";

export default function AllNoticeList() {
  return (
    <Container>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Notice List</Typography>
      </Box>
      <NoticeListTable />
    </Container>
  );
}
