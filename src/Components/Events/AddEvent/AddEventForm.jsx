import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Calender, Clock } from "../../../assets/IconSet";
import EventCover from "./EventCover";
import AntSwitch from "../../Common/AntSwitch";
export default function AddEventForm() {
  const CalenderIcon = () => {
    return <Calender color="grey" size={24} />;
  };
  const ClockIcon = () => {
    return <Clock color="grey" size={24} />;
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
                <TimePicker
                  slots={{
                    openPickerIcon: ClockIcon,
                  }}
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                />
              </LocalizationProvider>
            </Stack>
            <TextField label="Event Description" multiline rows={4} />
            <Stack direction="row" spacing={1} alignItems="center">
              <AntSwitch />
              <Typography>Publish Event</Typography>
            </Stack>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <EventCover />
        </Grid>
      </Grid>
    </Box>
  );
}
