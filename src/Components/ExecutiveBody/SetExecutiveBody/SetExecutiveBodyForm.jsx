import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { Drag, Minus, Plus } from "../../../assets/IconSet"; // Assuming your icon set
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SetExecutiveBodyForm() {
  const [committeeName, setCommitteeName] = useState("");
  const [members, setMembers] = useState([]);
  const [executiveBody, setExecutiveBody] = useState([{ member: null, position: "" }]);
  const dragItem = useRef(null); // Ref to store the item being dragged
  const dragOverItem = useRef(null); // Ref to store the item being dragged over
  const navigate = useNavigate();

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      const { data } = await axios.get("/members");
      setMembers(data);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleAddMember = () => {
    const lastItem = executiveBody[executiveBody.length - 1];
    if (lastItem.member && lastItem.position) {
      setExecutiveBody([...executiveBody, { member: null, position: "" }]);
    } else {
      toast.error("Please fill out the current section before adding a new one.");
    }
  };

  const handleRemoveMember = (index) => {
    const newExecutiveBody = [...executiveBody];
    newExecutiveBody.splice(index, 1);
    setExecutiveBody(newExecutiveBody);
  };

  const handleMemberChange = (index, value) => {
    const newExecutiveBody = [...executiveBody];
    newExecutiveBody[index].member = value;
    setExecutiveBody(newExecutiveBody);
  };

  const handlePositionChange = (index, value) => {
    const newExecutiveBody = [...executiveBody];
    newExecutiveBody[index].position = value;
    setExecutiveBody(newExecutiveBody);
  };

  const getAvailableMembers = (index) => {
    const selectedIds = executiveBody.map((item) => item.member?._id);
    return members.filter(
      (member) =>
        !selectedIds.includes(member._id) ||
        member._id === executiveBody[index].member?._id
    );
  };

  // Drag and Drop Functions
  const handleDragStart = (index) => {
    dragItem.current = index; // Store the index of the item being dragged
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index; // Store the index of the item being dragged over
  };

  const handleDrop = () => {
    const dragIndex = dragItem.current;
    const hoverIndex = dragOverItem.current;

    // Swap the positions of the items
    const copiedExecutiveBody = [...executiveBody];
    const draggedItem = copiedExecutiveBody[dragIndex];

    copiedExecutiveBody.splice(dragIndex, 1);
    copiedExecutiveBody.splice(hoverIndex, 0, draggedItem);

    // Update the state with the reordered items
    setExecutiveBody(copiedExecutiveBody);

    // Reset drag refs
    dragItem.current = null;
    dragOverItem.current = null;
  };

  const handleCreateCommittee = async () => {
    // Check if all sections are filled
    const isValid = executiveBody.every((item) => item.member && item.position);

    if (!isValid) {
      toast.error("Please fill out all sections before submitting.");
      return;
    }

    const committeeData = {
      title: committeeName,
      members: executiveBody.map((item) => ({
        member: item.member._id,
        position: item.position,
      })),
    };

    try {
      await axios.post("/create-committee", committeeData);
      toast.success("Committee created successfully");
      // Clear state after successful submission
      setCommitteeName("");
      setExecutiveBody([{ member: null, position: "" }]);

      // Navigate to committee-list page
      navigate("/committee-list");
    } catch (error) {
      toast.error("Failed to create committee");
    }
  };

  return (
    <Box>
      <Stack>
        <Stack
          spacing={3}
          sx={{ width: "100%", maxWidth: "420px", mb: "40px" }}
        >
          <TextField
            label="Committee Name"
            variant="outlined"
            fullWidth
            value={committeeName}
            onChange={(e) => setCommitteeName(e.target.value)}
          />
        </Stack>

        {/* Loop through executive body */}
        {executiveBody.map((item, index) => (
          <Stack
            key={index}
            spacing={3}
            direction="row"
            alignItems="center"
            sx={{ width: "100%", maxWidth: "820px", mb: "24px" }}
            draggable={executiveBody.length > 1} // Enable dragging only if more than one row
            onDragStart={() => handleDragStart(index)} // Start dragging
            onDragEnter={() => handleDragEnter(index)} // Enter drag zone
            onDragEnd={handleDrop} // Handle drop
          >
            {/* Conditionally render the Drag Icon */}
            {executiveBody.length > 1 && (
              <IconButton>
                <Drag color="#000" size="24px" />
              </IconButton>
            )}

            <Autocomplete
              disablePortal
              fullWidth
              options={getAvailableMembers(index)}
              getOptionLabel={(option) => option.name}
              value={item.member}
              onChange={(event, value) => handleMemberChange(index, value)}
              renderInput={(params) => <TextField {...params} label="Member" />}
            />

            <TextField
              label="Position"
              variant="outlined"
              fullWidth
              value={item.position}
              onChange={(e) => handlePositionChange(index, e.target.value)}
            />

            {index === executiveBody.length - 1 ? (
              <IconButton
                sx={{ width: "40px", height: "40px" }}
                onClick={handleAddMember}
              >
                <Plus color="#00AE60" size="32px" />
              </IconButton>
            ) : (
              <IconButton
                sx={{ width: "40px", height: "40px" }}
                onClick={() => handleRemoveMember(index)}
              >
                <Minus color="#FF4842" size="32px" />
              </IconButton>
            )}
          </Stack>
        ))}

        <Button variant="contained" sx={{ width: "220px" }} onClick={handleCreateCommittee}>
          Save
        </Button>
      </Stack>
    </Box>
  );
}
