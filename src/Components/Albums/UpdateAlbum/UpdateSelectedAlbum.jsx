import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import UpdateAlbumForm from "./UpdateAlbumForm";
import UpdateImagePreview from "./UpdateImagePreview";

export default function UpdateSelectedAlbum() {
  const [albumName, setAlbumName] = useState("");
  const [images, setImages] = useState([]);
  const [imagesToRemove, setImagesToRemove] = useState([]);
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleBoxClick = () => {
    inputRef.current.click();
  };

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files).map(file => ({ src: file, fromDatabase: false }));
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    const imageToRemove = images[index];
    if (imageToRemove.fromDatabase) {
      setImagesToRemove((prev) => [...prev, imageToRemove.src]);
    }
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
console.log("update",images);
  const handleAlbumNameChange = (e) => {
    setAlbumName(e.target.value);
  };

  useEffect(() => {
    loadAlbum();
  }, []);

  const loadAlbum = async () => {
    try {
      const { data } = await axios.get(`/album/${params.slug}`);
      setAlbumName(data.name);
      const formattedImages = data.images.map((image) => ({ src: image, fromDatabase: true }));
      setImages(formattedImages);
      setId(data._id);
    } catch (err) {
      toast.error("Failed to load album data");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("albumName", albumName);
  
      // Append updated images to remove
      images.forEach((images) => {
        formData.append("images", images.src);
      });
  
      // Append new images to formData
      images.forEach((image) => {
        if (!image.fromDatabase) {
          formData.append("images", image.src);
        }
      });
  
      // Send request to update album
      const { data } = await axios.put(`/album/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      console.log("Update response:", data); // Debugging information
      toast.success("Album updated successfully");
      navigate("/album_list"); // Redirect after successful update
    } catch (err) {
      console.error("Error updating album:", err); // Debugging information
      toast.error("Failed to update album");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Box sx={{ p: "24px 24px 0px 24px" }}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <UpdateAlbumForm
            handleBoxClick={handleBoxClick}
            inputRef={inputRef}
            handleFilesChange={handleFilesChange}
            handleAlbumNameChange={handleAlbumNameChange}
            albumName={albumName}
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid item md={9}>
          <UpdateImagePreview
            images={images}
            handleRemoveImage={handleRemoveImage}
            loading={loading}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
