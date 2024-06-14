import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";

export default function RemoveModal({
  open,
  onClose,
  onConfirm,
  eventName
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "480px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Delete Committee
        </Typography>
        <Typography variant="body1">
          Are you sure you want to delete &quot;{eventName}&quot; committee?
        </Typography>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="contained" color="error">
            Yes, Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

RemoveModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  eventName: PropTypes.string.isRequired,
};
