import { Box, Button, Grid, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Remove } from "../../../assets/IconSet";

export default function CommitteeAddForm() {
  const [committeeName, setCommitteeName] = useState("");
  const [members, setMembers] = useState([
    { name: "", position: "", image: "" },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...members];
    list[index][name] = value;
    setMembers(list);
  };

  const handleAddMember = () => {
    setMembers([...members, { name: "", position: "", image: "" }]);
  };

  const handleRemoveMember = (index) => {
    const list = [...members];
    list.splice(index, 1);
    setMembers(list);
  };
  return (
    <Box sx={{ p: "24px" }}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField
            label="Committee Name"
            variant="outlined"
            fullWidth
            size="medium"
            value={committeeName}
            onChange={(e) => setCommitteeName(e.target.value)}
          />
        </Grid>
        <Grid item md={12}>
          <Box>
            {members.map((member, index) => (
              <Box
                key={index}
                sx={{
                  border: "1px dashed #BBBFCA",
                  borderRadius: "8px",
                  padding: "24px",
                  marginBottom: "40px",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Member Name"
                    variant="outlined"
                    fullWidth
                    size="medium"
                    name="name"
                    value={member.name}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  <TextField
                    label="Position"
                    variant="outlined"
                    fullWidth
                    size="medium"
                    value={member.position}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {members.length !== 1 && (
                    <IconButton
                      onClick={() => handleRemoveMember(index)}
                      sx={{ width: "40px", height: "40px" }}
                    >
                      <Remove color="red" size="24px" />
                    </IconButton>
                  )}
                </Stack>
              </Box>
            ))}
          </Box>
          <Button type="button" onClick={handleAddMember}>
            Add Member
          </Button>
          <Button
            type="button"
            variant="contained"
            onClick={() => console.log({ committeeName, members })}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
