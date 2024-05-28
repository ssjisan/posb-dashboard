import { Box, Table, TableContainer } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Pagination from "./Table/Pagination";
import Body from "./Table/Body";
import Header from "../../User/Components/Table/Header";

export default function EventListTable() {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line
  const [userRemoveModal, setUserRemoveModal] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    loadEvents();
  }, []);
  const loadEvents = async () => {
    try {
      const { data } = await axios.get("/events");
      setEvents(data);
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
            events={events}
            page={page}
            rowsPerPage={rowsPerPage}
            isModalOpen={isModalOpen}
            userRemoveModal={userRemoveModal}
            showModal={showModal}
            selectedEvents={selectedEvents}
            setSelectedEvents={setSelectedEvents}
          />
        </Table>
        <Pagination
          events={events}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
