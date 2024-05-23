import axios from "axios";
import { useEffect, useState } from "react";

export default function ProjectRequestData() {
  const [allRequests, setAllRequests] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    axios
      .get(
        "https://insighttechbd-2c31b-default-rtdb.firebaseio.com/ClientRequest.json"
      )
      .then((response) => {
        // Process retrieved data
        const requestData = response.data;
        const requestsArray = Object.keys(requestData).map((key) => {
          return { id: key, ...requestData[key] };
        });
        setAllRequests(requestsArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(allRequests);

  const handleRemoveRequest = (id) => {
    // Make a DELETE request to Firebase to remove the item
    axios
      .delete(
        `https://insighttechbd-2c31b-default-rtdb.firebaseio.com/ClientRequest/${id}.json`
      )
      .then(() => {
        console.log("Request removed successfully");
        // Update clientRequests state after successful deletion
        setAllRequests((prevState) =>
          prevState.filter((request) => request.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error removing request:", error);
      });
  };
  // productLength={product.length} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} page={page} rowsPerPage={rowsPerPage}
  return {
    allRequests,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    handleRemoveRequest,
  };
}
