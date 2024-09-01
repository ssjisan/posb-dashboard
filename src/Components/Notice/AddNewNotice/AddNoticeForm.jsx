import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddNoticeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/notice", {
        title,
        description,
        link
      });
      if (data?.error) {
        console.log(data.error);
        toast.error(data.error);
      } else {
        navigate("/notice_list");
        toast.success("Notice Created");
        setTitle("");
        setDescription("");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <Box sx={{ p: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack spacing={3}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              label="Event Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Link"
              variant="outlined"
              fullWidth
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}