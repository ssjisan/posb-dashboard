import { Box, Table, TableContainer } from "@mui/material";
import Header from "./Table/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Pagination from "./Table/Pagination";
import Body from "./Table/Body";

export default function AlbumTable() {
  const [albums, setAlbums] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    loadAlbums();
  }, []);
  const loadAlbums = async () => {
    try {
      const { data } = await axios.get("/albums");
      setAlbums(data);
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

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line
  const [userRemoveModal, setUserRemoveModal] = useState(false);
  const [albumToDelete, setAlbumToDelete] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenMenu = (event, data) => {
    setOpen(event.currentTarget);
    setSelectedAlbum(data);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  const removeProduct = async (id) => {
    try {
      await axios.delete(`/album/${id}`);
      // Remove the deleted album from the state
      setAlbums(albums.filter(album => album._id !== id));
      toast.success("Remove Success")
    } catch (error) {
      toast.error("There was an error deleting the album!", error);
    }
  };

  const handleConfirmRemove = () => {
    if (albumToDelete) {
      removeProduct(albumToDelete._id);
      setIsModalOpen(false);
      setAlbumToDelete(null);
    }
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
            events={albums}
            page={page}
            rowsPerPage={rowsPerPage}
            isModalOpen={isModalOpen}
            userRemoveModal={userRemoveModal}
            showModal={showModal}
            selectedAlbum={selectedAlbum}
            setSelectedAlbum={setSelectedAlbum}
            handleOpenMenu={handleOpenMenu}
            handleCloseMenu={handleCloseMenu}
            setAlbumToDelete={setAlbumToDelete}
            setIsModalOpen={setIsModalOpen}
            albumToDelete={albumToDelete}
            handleConfirmRemove={handleConfirmRemove}
            open={open}
          />
        </Table>
        <Pagination
          events={albums}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
