import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";

export default function SupportCard() {
  const forBelow676 = useMediaQuery("(max-width:676px)");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: forBelow676 && "column",
        background:
          "linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)",
        borderRadius: "16px",
        height:"100%"
      }}
    >
      <Box
        sx={{
          p: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        <Stack>
          <Typography variant="h4" sx={{width:"220px"}}>
            Welcome back Fabiana Capmany!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn&lsquo;t anything
          </Typography>
        </Stack>
        <Button variant="contained">Visit Website</Button>
      </Box>
      <Box sx={{ p: "24px", width: forBelow676 ? "100%" :"auto", }}>
        <img src="/support.png" alt="support" width="100%" />
      </Box>
    </Box>
  );
}
