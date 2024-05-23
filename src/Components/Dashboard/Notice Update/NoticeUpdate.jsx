import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { Box, Button, Typography } from "@mui/material";
import notice from "../../../assets/notice.json";
import { ArrowRight } from "../../../assets/IconSet";
export default function NoticeUpdate() {

  return (
    <Box
      sx={{
        borderRadius: "16px",
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
      }}
    >
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h6">Notice Update</Typography>
      </Box>
      <Box sx={{ p: "16px 16px 0px 16px" }}>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {notice.map((data, index) => {
            return (
              <TimelineItem key={data.id}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index === notice.length - 1 ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle2">{data.title}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {data.dateTime}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
        <Box sx={{borderTop:"1px dashed rgba(145, 158, 171, 0.2)",p:"16px 0px 16px 0px", textAlign:"right"}}>
            <Button color="inherit" endIcon={<ArrowRight size={16} color="#060415"/>}>View All</Button>
        </Box>
      </Box>
    </Box>
  );
}
