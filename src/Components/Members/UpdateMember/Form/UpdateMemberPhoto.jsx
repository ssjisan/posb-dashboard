import { Box, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";

export default function UpdateMemberPhoto({ image, handleImageUpload,handleRemoveImage }) {
  return (
    <Stack>
      <Box
        sx={{
          cursor: "pointer",
          width: "120px",
          height: "120px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={image || "/dp.png"}
          alt="Profile"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="flex-start"
        sx={{ mt: "16px" }}
      >
        {!image ? (
          <Button color="inherit" component="label">
            Upload
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
        ) : (
          <>
            <Button color="inherit" component="label">
              Change
              <input type="file" hidden onChange={handleImageUpload} />
            </Button>
            <Button color="error" onClick={handleRemoveImage}>
              Remove
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
}

UpdateMemberPhoto.propTypes = {
  image: PropTypes.any,
  setImage: PropTypes.any,
  handleImageUpload: PropTypes.any,
  handleRemoveImage: PropTypes.any,
};
