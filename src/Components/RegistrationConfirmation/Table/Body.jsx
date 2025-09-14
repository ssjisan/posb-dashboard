import {
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import { More } from "../../../assets/IconSet";
import axios from "axios";
import toast from "react-hot-toast";

const getStatusColor = (status) => {
  switch (status) {
    case "applied":
      return "#9e9e9e";
    case "payment-submitted":
      return "#ff9800";
    case "confirmed":
      return "#4caf50";
    case "rejected":
      return "#f44336";
    default:
      return "#9e9e9e";
  }
};

export default function Body({ registrations, refreshData, selectedEvent }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);

  // --- Rejection modal state ---
  const [rejectOpen, setRejectOpen] = useState(false);
  const [remarks, setRemarks] = useState("");

  const handleMoreClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelected(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelected(null);
  };

  // --- Approve ---
  const handleApprove = async () => {
    if (!selected) return;
    const toastId = toast.loading("Approving registration...");
    try {
      await axios.post("/registration/approve", {
        registrationId: selected.registrationId,
        courseId: selectedEvent,
      });
      toast.success(`Successfully approved ${selected.name}`, { id: toastId });
      refreshData?.();
    } catch (error) {
      console.error(error);
      toast.error("Failed to approve registration", { id: toastId });
    } finally {
      handleClose();
    }
  };

  // --- Open reject modal ---
  const [rejectTarget, setRejectTarget] = useState(null);
  const handleOpenRejectModal = () => {
    if (!selected) return;
    setRejectTarget(selected); // ✅ keep selected row
    setRejectOpen(true);
    setRemarks("");
    handleClose(); // close menu
  };

  // --- Submit rejection ---
  const handleRejectSubmit = async () => {
    if (!remarks.trim()) {
      toast.error("Please provide remarks for rejection.");
      return;
    }
    if (!rejectTarget) return; // safety check

    const toastId = toast.loading("Rejecting registration...");
    try {
      await axios.post("/registration/reject", {
        registrationId: rejectTarget.registrationId,
        courseId: selectedEvent,
        remarks,
      });
      toast.success(`Successfully rejected ${rejectTarget.name}`, {
        id: toastId,
      });
      refreshData?.();
      setRejectOpen(false);
      setRejectTarget(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to reject registration", { id: toastId });
    }
  };

  return (
    <>
      <TableBody>
        {registrations.map((data, index) => (
          <TableRow key={index}>
            <TableCell style={{ verticalAlign: "top" }}>{data.name}</TableCell>
            <TableCell style={{ verticalAlign: "top" }}>
              <Box>
                <Typography variant="body2" fontSize="0.8rem" noWrap>
                  {data.email}
                </Typography>
                <Typography variant="body1" noWrap>
                  {data.phone}
                </Typography>
              </Box>
            </TableCell>
            <TableCell style={{ verticalAlign: "top" }}>
              <Box>
                <Typography variant="body1" noWrap>
                  {data.designation}
                </Typography>
                <Typography variant="body2" fontSize="0.8rem" noWrap>
                  {data.workplace}
                </Typography>
              </Box>
            </TableCell>
            <TableCell style={{ verticalAlign: "top" }}>
              {data.senderNumber}
            </TableCell>
            <TableCell style={{ verticalAlign: "top" }}>
              {data.transactionId}
            </TableCell>
            <TableCell style={{ verticalAlign: "top" }}>
              <Chip
                label={data.status}
                size="small"
                sx={{
                  backgroundColor: getStatusColor(data.status),
                  color: "#fff",
                  fontWeight: 500,
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
