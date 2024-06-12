import { Button, Modal, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function RemoveMemberModal({handleRemove,open,handleClose, memberName}) {
  return (
    <Modal open={open} onClose={handleClose}>
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
          Remove Member
        </Typography>
        <Typography variant="body1">
          Are you sure you want to remove{" "}
          <strong>&quot;{memberName}&quot;</strong>?
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
            Yes, Remove
          </Button>
        </div>
      </div>
    </Modal>
  );
}


RemoveMemberModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    memberName: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired,
  };
