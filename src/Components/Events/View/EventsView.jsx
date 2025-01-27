import {
  Box,
  Button,
  Stack,
  Tab,
  Table,
  TableContainer,
  Tabs,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Body from "./Table/Body";
import Header from "./Table/Header";
import RemoveModal from "../Remove/RemoveModal";
import { useNavigate } from "react-router-dom";
import PreviewDrawer from "../Preview/PreviewDrawer";

export default function EventsView() {
  const [events, setEvents] = useState([]); // For set data from api
  const [skip, setSkip] = useState(0); // Track how many events to skip
  const [hasMore, setHasMore] = useState(true); // Whether there are more events to load
  const [loading, setLoading] = useState(false); // Track loading state
  const limit = 5; // Number of events to load per request
  const [selectedTab, setSelectedTab] = useState("running"); // Active tab state
  const navigate = useNavigate(); // For navigation
  const [open, setOpen] = useState(null); // For open pop up menu
  const [selectedRowId, setSelectedRowId] = useState(null); // Tracks the ID of the currently selected row to display the action menu.
  const [isModalOpen, setIsModalOpen] = useState(false); // For open remove modal
  const [dataToDelete, setDataToDelete] = useState(null); // For selected data to remove
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    loadEvents(true); // Initial load or on tab change
  }, [selectedTab]);

  const loadEvents = async (initial = false) => {
    if (loading) return; // Prevent multiple requests
    if (!hasMore && !initial) return; // Stop if no more events

    try {
      setLoading(true);

      const currentSkip = initial ? 0 : skip;

      // Call the API with limit, skip, and status
      const { data } = await axios.get("/events", {
        params: { limit, skip: currentSkip, status: selectedTab },
      });
      console.log("Fetched data:", data);

      if (initial) {
        // Reset state on initial load or tab change
        setEvents(data.events);
        setSkip(limit); // Reset skip for the next batch
      } else {
        // Append new events to the list
        setEvents((prev) => [...prev, ...data.events]);
        setSkip(currentSkip + limit); // Increment skip for next batch
      }

      setHasMore(data.hasMore); // Update hasMore
    } catch (err) {
      toast.error("Error loading events");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSkip(0); // Reset skip
    setHasMore(true); // Reset hasMore
  };

  // Open the popup menu funtion start here //

  const handleOpenMenu = (event, eventData) => {
    setOpen(event.currentTarget);
    setSelectedRowId(eventData);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  // Open the popup menu funtion end here //

  // Drag and change sequence start here //

  const onDragEnd = async (result) => {
    if (selectedTab !== "running") return; // Only allow drag in 'running' tab
    if (!result.destination) return;

    const reorderedEvent = Array.from(events);
    const [movedResource] = reorderedEvent.splice(result.source.index, 1);
    reorderedEvent.splice(result.destination.index, 0, movedResource);
    setEvents(reorderedEvent);

    try {
      await axios.post("/update-event-order", { reorderedEvent });
      toast.success("Events order updated successfully!");
    } catch (error) {
      toast.error("Failed to update events order.");
    }
  };

  // Drag and change sequence end here //

  // Open Up the remove modal Start Here //

  const showModal = () => {
    setIsModalOpen(true);
  };

  // Open up the remove modal end here //

  //  Navigate the Preview Event or COurse Start here //

  const handlePreview = () => {
    setPreviewOpen(true);
    setOpen(false)
  };
  const toggleDrawer = (open) => () => {
    setPreviewOpen(open);
  };
  //  Navigate the Preview Event or COurse End here //

  // Navigate to update the selected row id start here //

  const redirectEdit = (event, data) => {
    event.preventDefault();
    navigate(`/courses_events/${data._id}`);
  };

  // Remove Event or course Start here //

  const removeData = async (id) => {
    // Show a "deleting" toast
    const toastId = toast.loading("Deleting...");

    try {
      // Make a DELETE request to the backend to delete the resource by its ID
      const { data } = await axios.delete(`/events/${id}`);

      // Notify the user of the successful deletion
      toast.dismiss(toastId); // Close the "deleting" toast
      toast.success(data.message || "Event deleted successfully");

      // Update the state by filtering out the deleted resource
      setEvents((prevevents) => prevevents.filter((event) => event._id !== id));
    } catch (err) {
      console.error("Error deleting Event:", err);

      // Close the "deleting" toast and show an error toast
      toast.dismiss(toastId);
      toast.error("Unable to delete event at the moment.");
    }
  };

  const handleRemove = () => {
    if (dataToDelete) {
      // Call the removeResource function with the ID of the resource to delete
      removeData(dataToDelete._id);

      // Close the modal and reset the resourceToDelete state
      setIsModalOpen(false);
      setDataToDelete(null);
    }
  };

  // Remove Event or course End here //

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
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Running Events" value="running" />
          <Tab label="Archived Events" value="archived" />
        </Tabs>
        <Table sx={{ mt: "16px" }}>
          <Header selectedTab={selectedTab} />
          <Body
            events={events}
            selectedTab={selectedTab} // Pass the selectedTab to Body
            open={open}
            handleOpenMenu={handleOpenMenu}
            handleCloseMenu={handleCloseMenu}
            onDragEnd={onDragEnd}
            showModal={showModal}
            selectedRowId={selectedRowId}
            setDataToDelete={setDataToDelete}
            setIsModalOpen={setIsModalOpen}
            handlePreview={handlePreview}
            redirectEdit={redirectEdit}
          />
        </Table>
        {hasMore && !loading && (
          <Stack
            sx={{
              width: "100%",
              borderTop: 1,
              borderColor: "divider",
              pt: "16px",
            }}
            alignItems="flex-end"
          >
            <Button
              onClick={() => loadEvents(false)}
              variant="contained" // Changed to 'contained' for better visibility
              sx={{ width: "120px" }}
            >
              Load More
            </Button>
          </Stack>
        )}
        {loading && (
          <Stack alignItems="center" sx={{ pt: "16px" }}>
            <Typography variant="body1">Loading...</Typography>
          </Stack>
        )}
      </TableContainer>
      <RemoveModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        resourceTitle={dataToDelete ? dataToDelete.name : ""}
        handleRemove={handleRemove}
      />
      <PreviewDrawer
        open={previewOpen} // Pass open state
        toggleDrawer={toggleDrawer} // Pass toggle function
        eventData={selectedRowId} // Pass selected event data
      />
    </Box>
  );
}
