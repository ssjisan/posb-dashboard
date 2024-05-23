import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Calender } from "../../../assets/IconSet";
import EventCover from "./EventCover";
export default function AddEventForm() {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 36,
    height: 20,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 18,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#13B46C",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 100,
      opacity: 1,
      backgroundColor: "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  const CalenderIcon = () => {
    return <Calender color="grey" size={24} />;
  };
  return (
    <Box sx={{ p: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <Stack spacing={3}>
            <TextField label="Event Name" variant="outlined" fullWidth />
            <TextField label="Event Location" variant="outlined" fullWidth />
            <Stack direction="row" spacing={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  slots={{
                    openPickerIcon: CalenderIcon,
                  }}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  slots={{
                    openPickerIcon: CalenderIcon,
                  }}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </LocalizationProvider>
            </Stack>
            <TextField label="Event Description" multiline rows={4} />
            <Stack direction="row" spacing={1} alignItems="center">
              <AntSwitch
                defaultChecked
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography>Publish Event</Typography>
            </Stack>
            <Button variant="contained" color="primary">Create</Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <EventCover />
        </Grid>
      </Grid>
    </Box>
  );
}
