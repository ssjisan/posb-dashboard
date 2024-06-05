import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import UpdateAlbumForm from "./UpdateAlbumForm";
import UpdateImagePreview from "./UpdateImagePreview";

export default function UpdateSelectedAlbum() {
  const params = useParams();
  const navigate = useNavigate();
  const [albumName, setAlbumName] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [removeImageIds, setRemoveImageIds] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    loadAlbum();
  }, []);

  const loadAlbum = async () => {
    try {
      const { data } = await axios.get(
        `/album/${params.slug}`
      );
      setAlbumName(data.name);
      const formattedImages = data.images.map((image) => ({
        src: image.url,
        public_id: image.public_id,
        _id: image._id,
        fromDatabase: true,
      }));

      setImages(formattedImages);
      setId(data._id);
    } catch (err) {
      toast.error("Failed to load album data");
    }
  };
  const handleBoxClick = () => {
    inputRef.current.click();
  };

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => ({
      src: URL.createObjectURL(file),
      file: file,
      name: file.name, // Set the name property to the name of the file
      fromDatabase: false,
    }));
    setNewImages([...newImages, ...newFiles]);
  };

  const handleRemoveImage = (index) => {
    const imageToRemove = images[index];
    setRemoveImageIds([...removeImageIds, imageToRemove.public_id]);
    setImages(images.filter((_, i) => i !== index));
  };

  const handleRemoveNewImage = (index) => {
    setNewImages(newImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", albumName);
      formData.append("removeImageIds", JSON.stringify(removeImageIds)); // Convert array to JSON string
      newImages.forEach((image) => {
        formData.append("newImages", image.file);
      });

      const { data } = await axios.put(`/album/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Album updated successfully");
      navigate("/album_list");
    } catch (error) {
      toast.error("Failed to update album");
      console.error(error);
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
            setAlbumName={setAlbumName}
            handleFilesChange={handleFilesChange}
            albumName={albumName}
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid item md={9}>
          <UpdateImagePreview
            images={images}
            handleRemoveImage={handleRemoveImage}
            handleRemoveNewImage={handleRemoveNewImage}
            loading={loading}
            newImages={newImages}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
