import {
  Box,
  Button,
  Container,
  Stack,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";
import Pagination from "./Table/Pagination";
import { Dashboard } from "../../assets/IconSet";
export default function ProjectRequestTable() {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Events</Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<Dashboard color="white" size={24} />}
        >
          New User
        </Button>
      </Stack>
      <Box
        sx={{
          boxShadow:
            "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
          borderRadius: "16px",
          p: 2,
          mt: 3,
        }}
      >
        <TableContainer>
          <Table>
            <Header />
            <Body />
          </Table>
          <Pagination />
        </TableContainer>
      </Box>
    </Container>
  );
}
