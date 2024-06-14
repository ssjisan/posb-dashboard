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
import { Link, useNavigate } from "react-router-dom";
  
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
    const [selectedCommittee, setSelectedCommittee] = useState({ id: null, name: "" });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
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
  
    const handleOpen = (committeeId, committeeName) => {
      setSelectedCommittee({ id: committeeId, name: committeeName });
      setOpen(true);
    };
  
    const handleClose = () => {
      setSelectedCommittee({ id: null, name: "" });
      setOpen(false);
    };
  
    const handleDeleteCommittee = async () => {
      if (!selectedCommittee.id) return; // Ensure an ID is set
  
      try {
        await axios.delete(`/executive-committee/${selectedCommittee.id}`);
        toast.success("Committee deleted successfully");
        loadCommittees(); // Reload committees after deletion
        handleClose(); // Close modal after deletion
      } catch (error) {
        toast.error("Failed to delete committee");
      }
    };

    
    return (
      <Box>
        {committees.map((data, index) => (
          <Accordion
            key={data._id}
            defaultExpanded={index === 0}
            sx={AccordionSx}
            square
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
                <Link to={`/committee-list/${data.slug}`}>
                <IconButton>
                    <Update color="#918EAF" size={24} />
                  </IconButton>
                </Link>
                  <IconButton onClick={() => handleOpen(data._id, data.title)}>
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
              open={open}
              onClose={handleClose}
              onConfirm={handleDeleteCommittee}
              eventName={selectedCommittee.name}
            />
          </Accordion>
        ))}
      </Box>
    );
  }
  