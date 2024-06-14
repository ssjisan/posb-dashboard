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
  const [members, setMembers] = useState([]); // Assuming you will load available members from the API
  const [executiveBody, setExecutiveBody] = useState([{ member: null, position: "" }]);
  const navigate = useNavigate();
  const [committee, setCommittee] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    loadExecutiveBody();
  }, []);

  const loadExecutiveBody = async () => {
    try {
      const { data } = await axios.get(`/executive-committee/${params.slug}`);
      setCommittee(data);
      setCommitteeName(data.title); // Assuming the committee has a title field
      setExecutiveBody(
        data.members.map((member) => ({
          member: member.member, // Assuming each member has a member field with member details
          position: member.position,
        }))
      );
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch committee data:', error);
      setLoading(false);
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
    const newExecutiveBody = executiveBody.filter((_, i) => i !== index);
    setExecutiveBody(newExecutiveBody);
  };

  const handleCreateCommittee = async () => {
    try {
      const updatedCommittee = {
        title: committeeName,
        members: executiveBody.map((item) => ({
          memberId: item.member.id, // Assuming each member has an id
          position: item.position,
        })),
      };
      await axios.put(`/executive-committee/${params.slug}`, updatedCommittee);
      toast.success("Committee updated successfully");
      navigate('/committee-list'); // Navigate to the list or another page as needed
    } catch (error) {
      toast.error("Failed to update committee");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
              options={members} // Assuming members are loaded into this state
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
                <Plus color={item.member && item.position ? "#000" : "#ddd"} size="32px" />
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
          Update
        </Button>
      </Stack>
    </Box>
  );
}
