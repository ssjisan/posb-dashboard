import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Minus, Plus } from "../../../assets/IconSet";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateExecutiveForm() {
  const [committeeName, setCommitteeName] = useState("");
  const [members, setMembers] = useState([]); // To load available members from the API
  const [executiveBody, setExecutiveBody] = useState([{ member: null, position: "" }]);
  const navigate = useNavigate();
  const params = useParams(); // Extract the committee ID
  const [id,setId]=useState(null)
  useEffect(() => {
    loadExecutiveBody();
    loadMembers();
  }, []);

  const loadExecutiveBody = async () => {
    try {
      const { data } = await axios.get(`/executive-committee/${params.slug}`);
      setCommitteeName(data.title);
      setId(data._id)
      setExecutiveBody(
        data.members.map((member) => ({
          member: member.member,
          position: member.position,
        }))
      );
    } catch (error) {
      console.error('Failed to fetch committee data:', error);
    }
  };

  const loadMembers = async () => {
    try {
      const { data } = await axios.get("/members"); // Adjust endpoint as per your API
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

  const handleUpdateCommittee = async () => {
    try {
      // Validate and extract member IDs from executiveBody
      const updatedMembers = executiveBody.map((item, index) => {
        console.log(`Processing Member at index ${index}:`, item.member); // Log member object
  
        const memberId = item.member ? item.member._id : null; // Correctly extract memberId
        if (!memberId) {
          console.warn(`Skipping member at index ${index} due to invalid memberId: ${item.member}`);
        }
  
        return {
          memberId,
          position: item.position
        };
      }).filter(member => member.memberId); // Only include members with valid IDs
  
      // Check the final list of members
      console.log("Final Members List:", updatedMembers);
  
      const updatedCommittee = {
        title: committeeName,
        members: updatedMembers,
      };
  
      // Log the complete updated committee payload
      console.log("Updated Committee Payload:", updatedCommittee);
  
      // Make the API call to update the committee
      const { data } = await axios.put(`/executive-committee/${id}`, updatedCommittee);
  
      // Success notification and navigation
      toast.success("Committee updated successfully");
      navigate("/committee-list");
    } catch (error) {
      // Log any errors
      console.error("Error updating committee:", error);
      toast.error("Failed to update committee");
    }
  };
  
  
  
  

  const getAvailableMembers = (index) => {
    const selectedMemberIds = executiveBody
      .map((item, i) => i !== index ? item.member?.id : null)
      .filter(Boolean);
    return members.filter((member) => !selectedMemberIds.includes(member.id) || member.id === executiveBody[index].member?.id);
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
          >
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
