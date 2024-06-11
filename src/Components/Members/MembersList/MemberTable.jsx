import { Box, Table, TableContainer } from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";
import Pagination from "./Table/Pagination";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function MemberTable() {
  const [members, setMembers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  //--------------------Pagination Controller--------------------//

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //--------------------Pagination Controller--------------------//

  //--------------------Members Load in table--------------------//

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      const { data } = await axios.get("/members");
      setMembers(data);
    } catch (err) {
      toast.error("Something Wrong");
    }
  };
  //--------------------Members Load in table--------------------//

  return (
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
          <Body members={members} rowsPerPage={rowsPerPage} page={page} />
        </Table>
        <Pagination
          members={members}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
        />
      </TableContainer>
    </Box>
  );
}
