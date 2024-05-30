import { Box, Container, Typography } from "@mui/material";
import AlbumTable from "./AlbumTable";

export default function AllAblumListTable() {
  return (
    <Container>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">All Album List</Typography>
      </Box>
      <AlbumTable />
    </Container>
  );
}
