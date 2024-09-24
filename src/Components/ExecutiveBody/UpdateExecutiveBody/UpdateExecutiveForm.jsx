import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { Minus, Plus, Drag } from "../../../assets/IconSet"; // Ensure Drag icon is imported
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateExecutiveForm() {
  const [committeeName, setCommitteeName] = useState("");
  const [members, setMembers] = useState([]);
  const [executiveBody, setExecutiveBody] = useState([{ member: null, position: "" }]);
  const navigate = useNavigate();
  const params = useParams();
  const [id, setId] = useState(null);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  useEffect(() => {
    loadExecutiveBody();
    loadMembers();
  }, []);

  const loadExecutiveBody = async () => {
    try {
      const { data } = await axios.get(`/executive-committee/${params.slug}`);
      setCommitteeName(data.title);
      setId(data._id);
      setExecutiveBody(data.members.map((member) => ({
        member: member.member,
        position: member.position,
      })));
    } catch (error) {
      console.error('Failed to fetch committee data:', error);
    }
  };

  const loadMembers = async () => {
    try {
      const { data } = await axios.get("/members");
      setMembers(data);
    } catch (error) {
      console.error('Failed to load members:', error);
    }
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

  const handleAddMember = () => {
    setExecutiveBody([...executiveBody, { member: null, position: "" }]);
  };

  const handleRemoveMember = (index) => {
    const newExecutiveBody = [...executiveBody];
    newExecutiveBody.splice(index, 1);
    setExecutiveBody(newExecutiveBody);
  };

  // Drag and Drop Functions
  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDrop = () => {
    const dragIndex = dragItem.current;
    const hoverIndex = dragOverItem.current;

    const copiedExecutiveBody = [...executiveBody];
    const draggedItem = copiedExecutiveBody[dragIndex];

    copiedExecutiveBody.splice(dragIndex, 1);
    copiedExecutiveBody.splice(hoverIndex, 0, draggedItem);

    setExecutiveBody(copiedExecutiveBody);

    dragItem.current = null;
    dragOverItem.current = null;
  };

  const handleUpdateCommittee = async () => {
    // Validate and prepare the updated committee data
    const updatedMembers = executiveBody.map((item) => ({
      memberId: item.member ? item.member._id : null,
      position: item.position,
    })).filter(member => member.memberId);

    const updatedCommittee = {
      title: committeeName,
      members: updatedMembers,
    };

    try {
      await axios.put(`/executive-committee/${id}`, updatedCommittee);
      toast.success("Committee updated successfully");
      navigate("/committee-list");
    } catch (error) {
      console.error("Error updating committee:", error);
      toast.error("Failed to update committee");
    }
  };

  const getAvailableMembers = (index) => {
    // Get names of selected members except for the current index
    const selectedMemberNames = executiveBody
      .map((item, i) => (i !== index ? item.member?.name : null))
      .filter(Boolean);

    // Filter the members to only include those not already selected
    return members.filter((member) => 
      !selectedMemberNames.includes(member.name) || member.name === executiveBody[index].member?.name
    );
  };

  return (
    <Box>
      <Stack>
        <Stack spacing={3} sx={{ width: "100%", maxWidth: "420px", mb: "40px" }}>
          <TextField
            label="Committee Name"
            variant="outlined"
            fullWidth
            value={committeeName}
            onChange={(e) => setCommitteeName(e.target.value)}
          />
        </Stack>
        {executiveBody.map((item, index) => (
          <Stack
            key={index}
            spacing={3}
            direction="row"
            alignItems="center"
            sx={{ width: "100%", maxWidth: "820px", mb: "24px" }}
            draggable={executiveBody.length > 1}
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDrop}
            onDrop={handleDrop}
          >
            <IconButton onMouseDown={() => handleDragStart(index)} onDragEnter={() => handleDragEnter(index)}>
              <Drag color="#000" size="24px" />
            </IconButton>
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
                disabled={!item.member || !item.position}
              >
                <Plus color={item.member && item.position ? "#00AE60" : "#918EAF"} size="32px" />
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
        <Button variant="contained" sx={{ width: "220px" }} onClick={handleUpdateCommittee}>
          Update
        </Button>
      </Stack>
    </Box>
  );
}
