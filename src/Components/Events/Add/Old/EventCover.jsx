import { Box, IconButton, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Cross, Upload } from "../../../../assets/IconSet";

export default function EventCover({
  coverPhoto,
  handleCoverPhoto,
  removeImage,
  error,
}) {
    const backgroundImage =
    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23333' stroke-width='1' stroke-dasharray='12' stroke-dashoffset='15' stroke-linecap='round'/%3e%3c/svg%3e\")";

  return (
    
    <Stack gap="16px">
      <Box
        onClick={() =>
          document.getElementById("blog-cover-upload-input").click()
        } // Click on the hidden input when the box is clicked
        sx={{
            width: "100%",
          height: "320px",
          backgroundImage: backgroundImage,
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {coverPhoto ? (
          <>
            <img
              src={URL.createObjectURL(coverPhoto)}
              alt="Blog Cover"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <IconButton
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the image upload dialog when clicking on the remove button
                removeImage();
              }}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "#000",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
                "&:hover": {
                  background: "#7A7A7A",
                },
              }}
            >
              <Cross size="24px" color="#fff" />
            </IconButton>
          </>
        ) : (
          <Stack sx={{ textAlign: "center" }} alignItems="center">
            <Upload color="#13B46C" size={48} />
            <Typography
              color="text.primary"
              variant="h6"
              sx={{
                fontWeight: 500,
              }}
            >
              Click here to upload a cover
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#919EAB",
                fontWeight: 500,
              }}
            >
              Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb
            </Typography>
          </Stack>
        )}

        <input
          type="file"
          hidden
          id="blog-cover-upload-input"
          accept="image/*"
          onChange={handleCoverPhoto} // Trigger the image upload
        />
      </Box>
      {error && (
        <Stack
          sx={{ p: "16px", backgroundColor: "#FFF2EF", borderRadius: "12px" }}
        >
          <Typography
            color="text.primary"
            variant="body2"
            sx={{
              fontWeight: 600,
            }}
          >
            {error.fileName} - {error.fileSize} Mb
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#919EAB",
              fontWeight: 500,
            }}
          >
            {error.message}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}

EventCover.propTypes = {
  coverPhoto: PropTypes.any.isRequired,
  handleCoverPhoto: PropTypes.func.isRequired,
  removeImage: PropTypes.func.isRequired,
  error: PropTypes.any.isRequired,
};