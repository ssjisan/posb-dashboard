import { Box, Button, Stack, Typography } from "@mui/material";
import { Upload } from "../../../assets/IconSet";
import { useRef } from "react";
import PropTypes from "prop-types";

export default function EventCover({ imageCover, setImageCover }) {
  const backgroundImage =
    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23333' stroke-width='1' stroke-dasharray='12' stroke-dashoffset='15' stroke-linecap='round'/%3e%3c/svg%3e\")";

  const inputRef = useRef(null);

  const handleBoxClick = () => {
    inputRef.current.click();
  };
  return (
    <>
      {!imageCover ? (
        <Box
          onClick={handleBoxClick}
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "320px",
            backgroundImage: backgroundImage,
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Upload color="#13B46C" size={48} />
          <Stack direction="column" sx={{ textAlign: "center", mt: "32px" }}>
            <Typography variant="h6">
              Click to upload or drag and drop here
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Supported formate png, jpg
            </Typography>
          </Stack>
          <input
            type="file"
            accept="image/*"
            name="image"
            ref={inputRef}
            onChange={(e) => {
              setImageCover(e.target.files[0]);
            }}
            hidden
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        </Box>
      ) : (
        <Stack>
          <Box
            sx={{
              width: "100%",
              height: "320px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={URL.createObjectURL(imageCover)}
              alt=""
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            sx={{ mt: "16px" }}
          >
            <Button color="inherit" onClick={handleBoxClick}>
              Update
              <input
                type="file"
                accept="image/*"
                name="image"
                ref={inputRef}
                onChange={(e) => {
                  setImageCover(e.target.files[0]);
                }}
                hidden
                style={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              />
            </Button>
            <Button color="error" onClick={() => setImageCover("")}>
              Remove
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
}

EventCover.propTypes = {
  imageCover: PropTypes.any,
  setImageCover: PropTypes.any
};