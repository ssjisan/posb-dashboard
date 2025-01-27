import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Calender, Clock, Cross } from "../../../assets/IconSet";

export default function PreviewDrawer({ toggleDrawer, open, eventData }) {
  const isLinkExpired = eventData?.linkExpireDate
    ? new Date() > new Date(eventData.linkExpireDate)
    : true; // Default to `true` if `linkExpireDate` is not provided

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
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Typography variant="h4">{eventData?.name}</Typography>
        <Box sx={{ ...PointSx, alignItems: "center" }}>
          <Box sx={IconBoxSx}>
            <Calender color="#00AE60" size="24px"/>
          </Box>
          {eventData?.eventDate ? (
            <Typography variant="body1">
              {format(new Date(eventData?.eventDate), "dd/MM/yyyy")}
            </Typography>
          ) : (
            <Typography variant="body1">Date not available</Typography>
          )}
        </Box>
        <Box sx={{ ...PointSx, alignItems: "center" }}>
          <Box sx={IconBoxSx}>
            <Clock color="#00AE60" size="24px" />
          </Box>
          <Typography variant="body1">{eventData?.eventTime}</Typography>
        </Box>
        <Box sx={PointSx}>
          <Box sx={IconBoxSx}>
            <Clock />
          </Box>
          <Typography variant="body1">{eventData?.location}</Typography>
        </Box>
        {eventData?.registrationLink ? (
          isLinkExpired ? (
            <Typography variant="body1" color="error">
              Registration is Closed
            </Typography>
          ) : (
            <Button
              variant="contained"
              href={eventData?.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Registration
            </Button>
          )
        ) : null}
      </Stack>
      <Divider />
      <Stack gap="8px" sx={{ p: "16px 24px" }}>
        <Typography variant="h4">About this event</Typography>
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
