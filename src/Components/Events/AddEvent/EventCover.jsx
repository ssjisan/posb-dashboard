import { Box, Button, Stack, Typography } from "@mui/material";
import { Upload } from "../../../assets/IconSet";
import { useState } from "react";
import ImageUploading from "react-images-uploading";

export default function EventCover() {
  const backgroundImage =
    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23333' stroke-width='1' stroke-dasharray='12' stroke-dashoffset='15' stroke-linecap='round'/%3e%3c/svg%3e\")";
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        dragProps,
      }) => (
        // write your building UI
        <>
          {imageList.length === 0 && (
            <Box
              sx={{
                cursor:"pointer",
                width: "100%",
                height: "320px",
                backgroundImage: backgroundImage,
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={onImageUpload}
              {...dragProps}
            >
              <Upload color="#13B46C" size={48} />
              <Stack
                direction="column"
                sx={{ textAlign: "center", mt: "32px" }}
              >
                <Typography variant="h6">
                  Click to upload or drag and drop here
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Supported formate png, jpg
                </Typography>
              </Stack>
            </Box>
          )}
          {imageList.map((image, index) => (
            <Stack key={index}>
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
                onClick={onImageUpload}
                {...dragProps}
              >
                <img
                  src={image["data_url"]}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{mt:"16px"}}>
                <Button onClick={() => onImageUpdate(index)} color="inherit">Update</Button>
                <Button onClick={() => onImageRemove(index)} color="error">Remove</Button>
              </Stack>
            </Stack>
          ))}
        </>
      )}
    </ImageUploading>
  );
}

{
  /* <div className="upload__image-wrapper">
        <button
          style={isDragging ? { color: "red" } : undefined}
          onClick={onImageUpload}
          {...dragProps}
        >
          Click or Drop here
        </button>
        &nbsp;
        <button onClick={onImageRemoveAll}>Remove all images</button>
      </div> */
}
