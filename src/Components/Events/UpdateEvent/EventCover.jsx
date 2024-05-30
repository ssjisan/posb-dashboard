import { Box, Button, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import PropTypes from "prop-types";

export default function EventCover({ image, setImage, id, eventName }) {
  const inputRef = useRef(null);

  const handleBoxClick = () => {
    inputRef.current.click();
  };
  return (
    <div className="col">
      {image ? (
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
            src={URL.createObjectURL(image)}
            alt={eventName}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Box>
      ) : (
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
            src={`${
              process.env.REACT_APP_SERVER_API
            }/event/image/${id}?${new Date().getTime()}`}
            alt={eventName}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Box>
      )}
      <Stack sx={{ mt: "40px" }} justifyContent="flex-end">
        <Button color="primary" onClick={handleBoxClick} variant="outlined">
          Change
          <input
            type="file"
            accept="image/*"
            name="image"
            ref={inputRef}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            hidden
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        </Button>
      </Stack>
    </div>
  );
}

EventCover.propTypes = {
  image: PropTypes.any,
  setImage: PropTypes.any,
  id: PropTypes.any,
  eventName: PropTypes.any,
};
