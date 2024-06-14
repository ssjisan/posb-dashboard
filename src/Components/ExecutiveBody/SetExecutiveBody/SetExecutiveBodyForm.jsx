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
import { useNavigate } from "react-router-dom";

export default function SetExecutiveBodyForm() {
  const [committeeName, setCommitteeName] = useState("");
  const [members, setMembers] = useState([]);
  const [executiveBody, setExecutiveBody] = useState([{ member: null, position: "" }]);
  const navigate = useNavigate()
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

  const handleAddMember = () => {
    setExecutiveBody([...executiveBody, { member: null, position: "" }]);
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
    return members.filter((member) => !selectedIds.includes(member._id) || member._id === executiveBody[index].member?._id);
  };
  const getIconColor = (disabled) => {
    return disabled ? "#918EAF" : "#00AE60";
  };

  const handleCreateCommittee = async () => {
    const committeeData = {
      title: committeeName,
      members: executiveBody.map(item => ({
        member: item.member._id,  // Ensure to send _id
        position: item.position
      }))
    };
    
    try {
      const { data } = await axios.post("/create-committee", committeeData);
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
                <Plus  color={getIconColor(!item.member || !item.position)} size="32px" />
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
        <Button variant="contained" sx={{width:"220px"}} onClick={handleCreateCommittee}>Save</Button>
      </Stack>
    </Box>
  );
}
