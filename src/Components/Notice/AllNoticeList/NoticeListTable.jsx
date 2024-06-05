import { Box, Table, TableContainer } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Pagination from "./Table/Pagination";
import Body from "./Table/Body";
import Header from "./Table/Header";

export default function NoticeListTable() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line
  const [userRemoveModal, setUserRemoveModal] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    try {
      const { data } = await axios.get("/notices");
      setNotices(data);
    } catch (err) {
      toast.error("Check");
    }
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
          <Body
            notices={notices}
            page={page}
            rowsPerPage={rowsPerPage}
            isModalOpen={isModalOpen}
            userRemoveModal={userRemoveModal}
            showModal={showModal}
            selectedNotice={selectedNotice}
            setSelectedNotice={setSelectedNotice}
          />
        </Table>
        <Pagination
          notices={notices}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}

