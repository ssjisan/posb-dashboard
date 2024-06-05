import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { AlbumAdd } from "../../../assets/IconSet";
import PropTypes from "prop-types";

export default function AddAlbumForm({
  handleBoxClick,
  inputRef,
  setAlbumName,
  handleFilesChange,
  albumName,
  handleSubmit,
  loading,
}) {
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mb: "40px" }}>
        Create Album
      </Typography>
      <Stack direction="column" spacing={3}>
        <TextField
          label="Album Name"
          variant="outlined"
          fullWidth
          disabled={loading}
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <Button
          color="inherit"
          variant="soft"
          startIcon={
            <AlbumAdd size="24px" color={loading ? "#B2B3B6" : "#060415"} />
          }
          onClick={handleBoxClick}
          disabled={loading}
        >
          Upload image
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            name="image"
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
        <Button variant="contained" type="submit" disabled={loading}>
          Create
        </Button>
      </Stack>
    </Box>
  );
}

AddAlbumForm.propTypes = {
  handleBoxClick: PropTypes.any,
  inputRef: PropTypes.any,
  handleFilesChange: PropTypes.any,
  handleAlbumNameChange: PropTypes.any,
  albumName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.any,
  setAlbumName: PropTypes.any,
  loading: PropTypes.any,
};
