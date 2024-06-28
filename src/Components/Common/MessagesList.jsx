import {
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  Badge,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MailNotification, TimeAgo } from "../../assets/IconSet";
import MessagePreview from "./MessagePreview"; // Import the MessagePreview component

export default function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const { data } = await axios.get("/messages");
      setMessages(data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleClickOpen = async (message) => {
    try {
      // Mark the message as read
      await axios.put(`/messages/${message._id}/read`);
      // Update the local state to reflect the change
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg._id === message._id ? { ...msg, read: true } : msg
        )
      );
      setSelectedMessage(message);
      setOpen(true);
    } catch (err) {
      toast.error("Failed to mark message as read.");
      console.error(err);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMessage(null);
    window.location.reload(); // Reload the page when the modal is closed
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">All Messages</Typography>
        </Box>
      </Box>
      {messages.length === 0 ? (
        <Box sx={{ px: 2.5, py: 2 }}>
          <Typography variant="body1" color="text.secondary">
            No messages available.
          </Typography>
        </Box>
      ) : (
        <List disablePadding>
          {messages.map((message) => {
            const createdAt = new Date(message.createdAt);
            const now = new Date();
            const timeDifference = Math.abs(now - createdAt);
            const minutesDifference = Math.floor(timeDifference / (1000 * 60));
            const hoursDifference = Math.floor(minutesDifference / 60);

            let formattedSendTime;
            if (hoursDifference >= 1) {
              formattedSendTime = `${hoursDifference} ${
                hoursDifference === 1 ? "hour" : "hours"
              } ago`;
            } else {
              formattedSendTime = `${minutesDifference} ${
                minutesDifference === 1 ? "minute" : "minutes"
              } ago`;
            }

            return (
              <ListItemButton
                key={message._id}
                sx={{
                  py: 1.5,
                  px: 2.5,
                  mt: "1px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "transparent", // Remove background color for all messages
                }}
                onClick={() => handleClickOpen(message)}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <MailNotification />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="body2" color="text.secondary">
                        You have a new message from &nbsp;
                        <Typography
                          component="span"
                          color="text.primary"
                          sx={{ fontWeight: "600" }}
                        >
                          {message.name}
                        </Typography>
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="caption"
                        component="span"
                        color="text.secondary"
                        sx={{
                          mt: 0.5,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <TimeAgo size="16px" color="#918EAF" /> Sent{" "}
                        {formattedSendTime}
                      </Typography>
                    }
                  />
                </Box>
                <Badge
                  color="error"
                  variant={!message.read ? "dot" : "standard"}
                  invisible={message.read}
                  sx={{ fontSize: "24px" }} // Customize size of the dot
                />
              </ListItemButton>
            );
          })}
        </List>
      )}

      {/* Pass the open state and handleClose function to the MessagePreview component */}
      <MessagePreview open={open} onClose={handleClose} message={selectedMessage} />
    </>
  );
}
