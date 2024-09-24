import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { AlbumAdd } from "../../../assets/IconSet";
import PropTypes from "prop-types";

export default function UpdateAlbumForm({
  handleBoxClick,
  inputRef,
  handleFilesChange,
  albumName,
  setAlbumName,
  handleSubmit,
}) {
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mb: "40px" }}>
        Update Album
      </Typography>
      <Stack direction="column" spacing={3}>
        <TextField
          label="Album Name"
          variant="outlined"
          fullWidth
          value={albumName}
          onChange={(e)=>setAlbumName(e.target.value)}
        />
        <Button
          color="inherit"
          variant="soft"
          startIcon={<AlbumAdd size="24px" color="#060415" />}
          onClick={handleBoxClick}
        >
          Upload image
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            name="images"
            hidden
            multiple
            onChange={handleFilesChange}
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        </Button>
        <Button variant="contained" type="submit">
          Update
        </Button>
      </Stack>
    </Box>
  );
}

UpdateAlbumForm.propTypes = {
  handleBoxClick: PropTypes.func.isRequired,
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  handleFilesChange: PropTypes.func.isRequired,
  handleAlbumNameChange: PropTypes.func.isRequired,
  albumName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};