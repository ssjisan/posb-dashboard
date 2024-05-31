import { Modal, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PropTypes from "prop-types";

export default function AlbumView({ selectedImages, handleClose, albumOpen }) {
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const galleryImages = selectedImages?.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: forBelow767 ? "100%" : "50%",
    p: 4,
    border: "0px solid transparent",
    boxShadow: 0,
  };
  return (
    <Modal
      open={albumOpen}
      onClose={handleClose}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        },
      }}
    >
      <Box sx={style}>
        <ImageGallery items={galleryImages} />
      </Box>
    </Modal>
  );
}

AlbumView.propTypes = {
  selectedImages: PropTypes.any,
  handleClose: PropTypes.any,
  albumOpen: PropTypes.any,
};
