import { Box, Button, Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function ImagePreview({ images, handleRemoveImage }) {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
            <img 
              src={URL.createObjectURL(image)} 
              alt={`preview-${index}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <Button 
              variant="contained" 
              color="error" 
              sx={{ 
                position: 'absolute', 
                top: '8px', 
                right: '8px',
                padding: '4px 8px',
                minWidth: 'auto',
                fontSize: '12px'
              }} 
              onClick={() => handleRemoveImage(index)}
            >
              Remove
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

ImagePreview.propTypes = {
  images: PropTypes.array.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
};
