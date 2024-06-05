import { Box, Grid } from "@mui/material";
import AddAlbumForm from "./AddAlbumForm";
import ImagePreview from "./ImagePreview";
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddNewAlbum() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const handleBoxClick = () => {
    inputRef.current.click();
  };

  const [albumName, setAlbumName] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(images);

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!albumName || images.length === 0) {
        ("Please enter an album name and select at least one image.");
        setLoading(false);
        return;
      }

      const albumData = new FormData();
      albumData.append("name", albumName);

      images.forEach((image, index) => {
        albumData.append("images", image);
      });

      const { data } = await axios.post(
        "/album",
        albumData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(albumData);
      toast.success("Album created successfully!");
      navigate("/album_list");
      setAlbumName("");
      setImages([]);
    } catch (error) {
      toast.error(`Error creating album: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box sx={{ p: "24px 24px 0px 24px" }}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <AddAlbumForm
            handleBoxClick={handleBoxClick}
            inputRef={inputRef}
            handleFilesChange={handleFilesChange}
            albumName={albumName}
            handleSubmit={handleSubmit}
            loading={loading}
            setAlbumName={setAlbumName}
          />
        </Grid>
        <Grid item md={9}>
          <ImagePreview
            images={images}
            handleRemoveImage={handleRemoveImage}
            loading={loading}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
