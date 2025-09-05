import { Stack, TextField } from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Calender, Clock } from "../../../../assets/IconSet";
import dayjs from "dayjs";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

export default function EventInformation({
  name,
  setName,
  location,
  setLocation,
  eventTime,
  setEventTime,
  eventDate,
  registrationLink,
  setRegistrationLink,
  eventDateError,
  handleEventDateChange,
  registrationStartDate,
  handleRegistrationEndDateChange,
  handleRegistrationStartDateChange,
  registrationStartDateError,
  registrationEndDateError,
  registrationEndDate,
}) {
  const CalenderIcon = () => {
    return <Calender color="grey" size={24} />;
  };
  const ClockIcon = () => {
    return <Clock color="grey" size={24} />;
  };

  return (
    <Stack gap="24px">
      <TextField
        label="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Event Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
      />
      <Stack direction="row" gap="24px">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            slots={{
              openPickerIcon: CalenderIcon,
            }}
            label="Event Date"
            value={eventDate ? dayjs(eventDate) : null}
            format="DD/MM/YYYY"
            onChange={handleEventDateChange}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!eventDateError,
                helperText: eventDateError,
              },
            }}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Event Time"
            slots={{
              openPickerIcon: ClockIcon,
            }}
            value={eventTime ? dayjs(eventTime) : null}
            onChange={(time) => setEventTime(dayjs(time))}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
      </Stack>
      <TextField
        label="Registration Link"
        value={registrationLink}
        onChange={(e) => setRegistrationLink(e.target.value)}
        fullWidth
      />
      {registrationLink && (
        <Stack direction="row" gap="24px">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              slots={{
                openPickerIcon: CalenderIcon,
              }}
              label="Registration Start Date"
              value={
                registrationStartDate ? dayjs(registrationStartDate) : null
              }
              format="DD/MM/YYYY"
              onChange={handleRegistrationStartDateChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!registrationStartDateError,
                  helperText: registrationStartDateError,
                },
              }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              slots={{
                openPickerIcon: CalenderIcon,
              }}
              label="Registration End Date"
              value={registrationEndDate ? dayjs(registrationEndDate) : null}
              format="DD/MM/YYYY"
              onChange={handleRegistrationEndDateChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!registrationEndDateError,
                  helperText: registrationEndDateError,
                },
              }}
            />
          </LocalizationProvider>
        </Stack>
      )}
    </Stack>
  );
}

// Updated PropTypes
EventInformation.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  eventTime: PropTypes.string,
  setEventTime: PropTypes.func.isRequired,
  eventDate: PropTypes.string,
  handleEventDateChange: PropTypes.func.isRequired,
  registrationLink: PropTypes.string,
  setRegistrationLink: PropTypes.func.isRequired,
  registrationStartDate: PropTypes.string,
  handleRegistrationStartDateChange: PropTypes.func.isRequired,
  registrationStartDateError: PropTypes.string,
  registrationEndDate: PropTypes.string,
  handleRegistrationEndDateChange: PropTypes.func.isRequired,
  registrationEndDateError: PropTypes.string,
  eventDateError: PropTypes.string,
};
