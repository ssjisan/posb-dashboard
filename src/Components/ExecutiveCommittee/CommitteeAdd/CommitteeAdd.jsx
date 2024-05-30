import { Box, Container, Typography } from "@mui/material";
import CommitteeAddForm from "./CommitteeAddForm";
export default function CommitteeAdd() {
  
  return (
    <Container>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Add Committee Member</Typography>
      </Box>
      <CommitteeAddForm />
    </Container>
  );
}
