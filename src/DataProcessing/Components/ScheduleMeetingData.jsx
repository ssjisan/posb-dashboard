import axios from "axios";
import { useEffect, useState } from "react";

export default function ScheduleMeetingData() {
  const [allScheduleMeeting, setAllScheduleMeeting] = useState([]);
  const [schedulePage, setSchedulePage] = useState(0);
  const [scheduleRowsPerPage, setScheduleRowsPerPage] = useState(10);

  const handleSchedulePageChange = (event, newPage) => {
    setSchedulePage(newPage);
  };

  const handleScheduleRowsPerPage = (event) => {
    setScheduleRowsPerPage(+event.target.value);
    setSchedulePage(0);
  };
  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    axios
      .get(
        "https://insighttechbd-d4ca9-default-rtdb.firebaseio.com/MeetingResuest.json"
      )
      .then((response) => {
        // Process retrieved data
        const requestData = response.data;
        const requestsArray = Object.keys(requestData).map((key) => {
          return { id: key, ...requestData[key] };
        });
        setAllScheduleMeeting(requestsArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleScheduleRemoveRequest = (id) => {
    // Make a DELETE request to Firebase to remove the item
    axios
      .delete(
        `https://insighttechbd-d4ca9-default-rtdb.firebaseio.com/MeetingResuest/${id}.json`
      )
      .then(() => {
        console.log("Request removed successfully");
        // Update clientRequests state after successful deletion
        setAllScheduleMeeting((prevState) =>
          prevState.filter((request) => request.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error removing request:", error);
      });
  };
  // productLength={product.length} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} page={page} rowsPerPage={rowsPerPage}
  return {
    allScheduleMeeting,
    handleSchedulePageChange,
    handleScheduleRowsPerPage,
    schedulePage,
    scheduleRowsPerPage,
    handleScheduleRemoveRequest,
  };
}
