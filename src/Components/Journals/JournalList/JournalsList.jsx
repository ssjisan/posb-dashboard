import { Box, Button, Stack, Typography } from "@mui/material";
import { Bullet, Link } from "../../../assets/IconSet";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

export default function JournalsList() {
  const [journals, setJournals] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line
  const [userRemoveModal, setUserRemoveModal] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    loadJournals();
  }, []);

  const loadJournals = async () => {
    try {
      const { data } = await axios.get("/journals");
      setJournals(data);
    } catch (err) {
      toast.error("Journals can't load");
    }
  };

  return (
    <>
      {journals.map((data) => {
        return (
          <Box
            sx={{
              width: "560px",
              maxWidth: "100%",
              p: 2,
              mt: 3,
            }}
            key={data.id}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} gap="8px">
                <Box sx={{ mt: "4px" }}>
                  <Bullet size={16} color={"#B9BFC6"} />
                </Box>
                <Box>
                  <Typography variant="h6">{data.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(data.createdAt).toLocaleString()}
                  </Typography>
                  <a href={data.link} target="_blank">
                    <Stack
                      direction={"row"}
                      gap="8px"
                      alignItems={"center"}
                      sx={{ mt: "8px" }}
                    >
                      <Typography variant="body2" sx={{ color: "#006BD6" }}>
                        Preview
                      </Typography>
                      <Link color="#006BD6" size="16px" />
                    </Stack>
                  </a>
                </Box>
              </Stack>
              <Stack direction="row" gap="8px">
                <Button>Edit</Button>
                <Button variant="contained" color="error">
                  Remove
                </Button>
              </Stack>
            </Stack>
          </Box>
        );
      })}
    </>
  );
}
