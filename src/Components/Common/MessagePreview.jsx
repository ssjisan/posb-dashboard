import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export default function MessagePreview({ open, onClose, message }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>Message</DialogTitle>
      <DialogContent>
        <Stack gap="16px">
          <Typography color={"text.secondary"} sx={{ fontSize: "18px" }}>
            Name:{" "}
            <Typography
              component={"span"}
              color={"text.primary"}
              variant="body"
            >
              {message?.name}
            </Typography>
          </Typography>
          <Typography color={"text.secondary"} sx={{ fontSize: "18px" }}>
            Email:{" "}
            <Typography
              component={"span"}
              color={"text.primary"}
              variant="body"
            >
              {message?.email}
            </Typography>
          </Typography>
          <Typography color={"text.secondary"} sx={{ fontSize: "18px" }}>
            Subject:{" "}
            <Typography
              component={"span"}
              color={"text.primary"}
              variant="body"
            >
              {message?.subject || "No subject to show"}
            </Typography>
          </Typography>
          <Typography>Messages:</Typography>
          <Typography>{message?.message || "No message to show"}</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

MessagePreview.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
    subject: PropTypes.string,
  }),
};
