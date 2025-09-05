import { Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Calender, Clock } from "../../../assets/IconSet";
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
  registrationRequired,
  handleRegistrationRequiredChange,
  eventDateError,
  handleEventDateChange,
  registrationStartDate,
  handleRegistrationEndDateChange,
  handleRegistrationStartDateChange,
  registrationStartError,
  registrationEndError,
  registrationEndDate,
  registrationFees,
  setRegistrationFees,
  paymentStartDate,
  paymentEndDate,
  paymentStartError,
  handlePaymentStartDateChange,
  handlePaymentEndDateChange,
  paymentEndError,
}) {
  const CalenderIcon = () => {
    return <Calender color="grey" size={24} />;
  };
  const ClockIcon = () => {
    return <Clock color="grey" size={24} />;
  };

  return (
    <Stack
      gap="16px"
      sx={{ background: "#fff", p: "16px", borderRadius: "12px" }}
    >
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
      <Stack direction="row" gap="16px">
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
      <FormControlLabel
        control={
          <Checkbox
            checked={registrationRequired}
            onChange={(e) => handleRegistrationRequiredChange(e.target.checked)}
          />
        }
        label="Registration Required or not"
      />{" "}
      {registrationRequired && (
        <Stack direction="column" gap="16px">
          <TextField
            label="Reg. fee"
            value={registrationFees}
            onChange={(e) => setRegistrationFees(e.target.value)}
            fullWidth
          />
          <Stack gap="16px" flexDirection="row">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                slots={{
                  openPickerIcon: CalenderIcon,
                }}
                label="Reg. Start Date"
                value={
                  registrationStartDate ? dayjs(registrationStartDate) : null
                }
                format="DD/MM/YYYY"
                onChange={handleRegistrationStartDateChange}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!registrationStartError,
                    helperText: registrationStartError,
                  },
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                slots={{
                  openPickerIcon: CalenderIcon,
                }}
                label="Reg. End Date"
                value={registrationEndDate ? dayjs(registrationEndDate) : null}
                format="DD/MM/YYYY"
                onChange={handleRegistrationEndDateChange}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!registrationEndError,
                    helperText: registrationEndError,
                  },
                }}
              />
            </LocalizationProvider>
          </Stack>
          <Stack gap="16px" flexDirection="row">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                slots={{
                  openPickerIcon: CalenderIcon,
                }}
                label="Payment Start Date"
                value={paymentStartDate ? dayjs(paymentStartDate) : null}
                format="DD/MM/YYYY"
                onChange={handlePaymentStartDateChange}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!paymentStartError,
                    helperText: paymentStartError,
                  },
                }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                slots={{
                  openPickerIcon: CalenderIcon,
                }}
                label="Payment End Date"
                value={paymentEndDate ? dayjs(paymentEndDate) : null}
                format="DD/MM/YYYY"
                onChange={handlePaymentEndDateChange}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!paymentEndError,
                    helperText: paymentEndError,
                  },
                }}
              />
            </LocalizationProvider>
          </Stack>
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
  registrationRequired: PropTypes.string,
  handleRegistrationRequiredChange: PropTypes.func.isRequired,
  registrationStartDate: PropTypes.string,
  paymentStartDate: PropTypes.string,
  paymentEndDate: PropTypes.string,
  handleRegistrationStartDateChange: PropTypes.func.isRequired,
  registrationStartError: PropTypes.string,
  registrationEndDate: PropTypes.string,
  handleRegistrationEndDateChange: PropTypes.func.isRequired,
  registrationEndError: PropTypes.string,
  eventDateError: PropTypes.string,
  registrationFees: PropTypes.string,
  setRegistrationFees: PropTypes.string,
  paymentStartError: PropTypes.string,
  handlePaymentStartDateChange: PropTypes.func.isRequired,
  handlePaymentEndDateChange: PropTypes.func.isRequired,
  paymentEndError: PropTypes.string,
};
