import { Stack, TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function UpdateMemberInfo({
  name,
  setName,
  designation,
  setDesignation,
  workPlace,
  setWorkPlace,
  email,
  setEmail,
  phone,
  setPhone,
  mailingAddress,
  setMailingAddress,
}) {
  return (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: "460px" }}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Designation"
        variant="outlined"
        fullWidth
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
      />
      <TextField
        label="Work Place"
        variant="outlined"
        fullWidth
        value={workPlace}
        onChange={(e) => setWorkPlace(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        label="Mailing Address"
        multiline
        rows={3}
        fullWidth
        value={mailingAddress}
        onChange={(e) => setMailingAddress(e.target.value)}
      />
    </Stack>
  );
}

UpdateMemberInfo.propTypes = {
  name: PropTypes.any,
  setName: PropTypes.any,
  designation: PropTypes.any,
  setDesignation: PropTypes.any,
  workPlace: PropTypes.any,
  setWorkPlace: PropTypes.any,
  email: PropTypes.any,
  setEmail: PropTypes.any,
  phone: PropTypes.any,
  setPhone: PropTypes.any,
  mailingAddress: PropTypes.any,
  setMailingAddress: PropTypes.any,
};
