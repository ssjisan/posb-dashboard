import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";

export default function RemoveJournalModal({
  isOpen,
  handleClose,
  journalTitle,
  handleRemove,
}) {
  return (
    <Modal open={isOpen} onClose={handleClose}>
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
          Delete Journal
        </Typography>
        <Typography variant="body1">
          Are you sure you want to delete <strong>&quot;{journalTitle}&quot;</strong>?
        </Typography>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleRemove} variant="contained" color="error">
            Yes, Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

RemoveJournalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  journalTitle: PropTypes.string.isRequired
};
