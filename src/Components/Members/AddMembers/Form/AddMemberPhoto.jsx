import { Box, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";

export default function AddMemberPhoto({ image, setImage, handleImageUpload }) {
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
          backgroundColor: image ? "#fff" : "#f0f0f0", // Background color change based on image presence
        }}
      >
        <img
          src={
            image
              ? URL.createObjectURL(image)
              : "https://res.cloudinary.com/dzdjgu1vc/image/upload/v1730688763/posb/members/b2e5qajsnjqjtlel2xx3.png"
          }
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
            <Button color="error" onClick={() => setImage(null)}>
              Remove
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
}

AddMemberPhoto.propTypes = {
  image: PropTypes.any,
  setImage: PropTypes.any,
  handleImageUpload: PropTypes.any,
};
