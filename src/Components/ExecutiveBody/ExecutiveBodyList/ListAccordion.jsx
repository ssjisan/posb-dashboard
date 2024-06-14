import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DownArrow, Remove, Update } from "../../../assets/IconSet";
import RemoveModal from "../RemoveExecutiveBody/RemoveModal";

export default function ListAccordion() {
  const AccordionSx = {
    marginBottom: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(145, 142, 175, 0.40)",
    boxShadow: "none",
    position: "inherit",
    padding: "4px",
  };
  const [committees, setCommittees] = useState([]);

  useEffect(() => {
    loadCommittees();
  }, []);

  const loadCommittees = async () => {
    try {
      const { data } = await axios.get("/executive-committee");
      setCommittees(data);
    } catch (error) {
      toast.error("Failed to load committees");
    }
  };
  const [selectedCommittee, setSelectedCommittee] = useState({ id: null, name: "" });

  const handleOpenModal = (committeeId, committeeName) => {
    setSelectedCommittee({ id: committeeId, name: committeeName });
  };

  const handleCloseModal = () => {
    setSelectedCommittee(null);
  };

  const handleDeleteCommittee = async () => {
    try {
      await axios.delete(`/executive-committee/${selectedCommittee.id}`);
      toast.success("Committee deleted successfully");
      window.location.reload();
      handleCloseModal();
    } catch (error) {
      toast.error("Failed to delete committee");
    }
  };
  return (
    <Box>
      {committees.map((data, index) => {
        return (
          <Accordion
            key={data._id}
            defaultExpanded={index === 0}
            sx={AccordionSx}
            square={"false"}
          >
            <AccordionSummary expandIcon={<DownArrow size="24px" color="#000" />}>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {data.title}
                </Typography>
                <Stack direction="row">
                  <IconButton>
                    <Update color="#918EAF" size={24} />
                  </IconButton>
                  <IconButton onClick={() => handleOpenModal(data._id, data.title)}>
                    <Remove color="#FF4842" size={24} />
                  </IconButton>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              {data.members.length > 0 ? (
                <Box>
                  {data.members.map((memberDetail, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {memberDetail.member.name}
                      </Typography>
                      <Typography variant="body2">
                        {memberDetail.position}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography>No members available</Typography>
              )}
            </AccordionDetails>
            <RemoveModal
              open={selectedCommittee.id !== null}
              onClose={handleCloseModal}
              onConfirm={handleDeleteCommittee}
              eventName={selectedCommittee.name}
            />
          </Accordion>
        );
      })}
    </Box>
  );
}
