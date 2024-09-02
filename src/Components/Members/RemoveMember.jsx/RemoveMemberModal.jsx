import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Warning } from "../../../assets/IconSet";

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
          borderRadius: "8px",
          width: "480px",
          maxWidth: "90%",
        }}
      >
        <Box
          sx={{
            p: "16px",
            borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Delete Member
          </Typography>
        </Box>
        <Stack
          gap="16px"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            p: "24px 16px",
          }}
        >
          <Warning size="48px" color="#dc3545" />
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Are you sure you want to delete{" "}
            <strong>&quot;{memberName}&quot;</strong>?
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          gap="16px"
          justifyContent={"flex-end"}
          sx={{ p: "16px", borderTop: "1px solid rgba(145, 158, 171, 0.24)" }}
        >
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleRemove} variant="contained" color="error">
            Yes, Delete
          </Button>
        </Stack>
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
