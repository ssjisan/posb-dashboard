import { Box, Stack, Typography } from "@mui/material";

export default function EventCount() {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        p: "40px 24px",
        display: "flex",
        gap: "24px",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img src="/dashboard/events.png" alt="event_illustration" />
      <Stack>
        <Typography variant="h4">26</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Total Events
        </Typography>
      </Stack>
    </Box>
  );
}
