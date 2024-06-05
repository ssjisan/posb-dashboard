import { Box, Button, Grid, LinearProgress } from "@mui/material";
import PropTypes from "prop-types";

export default function UpdateImagePreview({
  images,
  handleRemoveImage,
  loading,
  newImages,
  handleRemoveNewImage
}) {
  return (
    <Box sx={{ position: "relative" }}>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            opacity: 0.6,
            zIndex: 1,
          }}
        >
          <LinearProgress />
        </Box>
      )}
      <Grid container spacing={2} sx={{ opacity: loading ? 0.1 : 1 }}>
        {images.map((image, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={image.src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Button
                variant="contained"
                color="error"
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  padding: "4px 8px",
                  minWidth: "auto",
                  fontSize: "12px",
                }}
                onClick={() => handleRemoveImage(i)}
              >
                Remove
              </Button>
            </Box>
          </Grid>
        ))}
        {newImages.map((image, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={image.src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Button
                variant="contained"
                color="error"
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  padding: "4px 8px",
                  minWidth: "auto",
                  fontSize: "12px",
                }}
                onClick={() => handleRemoveNewImage(i, false)}
              >
                Remove
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

UpdateImagePreview.propTypes = {
  images: PropTypes.any,
  handleRemoveImage: PropTypes.any,
  loading: PropTypes.any,
};
