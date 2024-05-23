import { Box, IconButton, Stack } from "@mui/material";
import { ArrowLeft, ArrowRight } from "../../../assets/IconSet";

export default function DirectNavigation() {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        height: "300px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Stack
        sx={{ position: "absolute", top: "16px", right: "16px" }}
        direction="row"
        spacing={1}
      >
        <IconButton
          sx={{
            width: "36px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowLeft color="#fff" size={20} />
        </IconButton>
        <IconButton>
          <ArrowRight color="#fff" size={20} />
        </IconButton>
      </Stack>
      <img
        src="/event.jpg"
        alt="event"
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
