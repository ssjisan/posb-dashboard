import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateNoticeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState("");
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    loadNotice();
  }, []);

  const loadNotice = async () => {
    try {
      const { data } = await axios.get(`/notice/${params.noticeId}`);
      setTitle(data.title);
      setDescription(data.description);
      setLink(data.link);
      setId(data._id);
    } catch (err) {
      toast.error("Failed to load event data");
    }
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.put(`/notice/${id}`, {
        title,
        description,
        link,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Notice updated successfully");
        navigate("/notice_list");
      }
    } catch (err) {
      toast.error("Failed to update notice");
    }
  };
  return (
    <Box sx={{ p: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={7}>
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
