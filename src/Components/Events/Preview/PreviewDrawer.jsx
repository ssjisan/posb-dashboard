import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Calender, Clock, Cross, Location } from "../../../assets/IconSet";

export default function PreviewDrawer({ toggleDrawer, open, eventData }) {
  const IconBoxSx = {
    width: "24px",
    height: "24px",
  };
  const PointSx = {
    display: "flex",
    gap: "16px",
  };

  const DrawerList = (
    <Box sx={{ width: 360 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ p: "16px 24px" }}
      >
        <Typography variant="h5">Event Details</Typography>
        <Cross color="#00AE60" size="24px" />
      </Stack>
      <Divider />
      <Stack sx={{ p: "16px 24px" }} gap="16px">
        <Box
          sx={{
            width: "100%",
            height: "240px",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <img
            src={eventData?.coverPhoto[0].url}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Typography variant="h6">{eventData?.name}</Typography>
        <Box sx={{ ...PointSx, alignItems: "center" }}>
          <Box sx={IconBoxSx}>
            <Calender color="#00AE60" size="24px" />
          </Box>
          {eventData?.eventDate ? (
            <Typography variant="body2">
              {format(new Date(eventData?.eventDate), "dd/MM/yyyy")}
            </Typography>
          ) : (
            <Typography variant="body2">Date not available</Typography>
          )}
        </Box>
        <Box sx={{ ...PointSx, alignItems: "center" }}>
          <Box sx={IconBoxSx}>
            <Clock color="#00AE60" size="24px" />
          </Box>
          <Typography variant="body2">{eventData?.eventTime}</Typography>
        </Box>
        <Box sx={PointSx}>
          <Box sx={IconBoxSx}>
            <Location color="#00AE60" size="24px" />
          </Box>
          <Typography variant="body2">{eventData?.location}</Typography>
        </Box>
        <Typography variant="body2">
          Registration Status -{" "}
          {(() => {
            const today = new Date();
            const startDate = new Date(eventData?.registrationStartDate);
            const endDate = new Date(eventData?.registrationEndDate);

            if (today >= startDate && today <= endDate) {
              if (
                today.getDate() === startDate.getDate() &&
                today.getMonth() === startDate.getMonth() &&
                today.getFullYear() === startDate.getFullYear()
              ) {
                return "Running";
              } else {
                return "Started";
              }
            } else if (today < startDate) {
              return "Not Started";
            } else if (today > endDate) {
              return "Ended";
            } else {
              return "N/A";
            }
          })()}
        </Typography>{" "}
      </Stack>
      <Divider />
      <Stack gap="8px" sx={{ p: "16px 24px" }}>
        <Typography variant="h6">About this event</Typography>
        <Typography
          sx={{ whiteSpace: "pre-wrap" }} // Ensure white space is preserved
          dangerouslySetInnerHTML={{ __html: eventData?.details }} // Render HTML content safely
        />
      </Stack>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
      {DrawerList}
    </Drawer>
  );
}

PreviewDrawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  eventData: PropTypes.object, // event prop containing the event data
};

PreviewDrawer.defaultProps = {
  event: null, // Default null if no event is provided
};
