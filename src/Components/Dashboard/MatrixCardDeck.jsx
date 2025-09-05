import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import EventCount from "./MatrixCard/EventCount";
import AlbumCount from "./MatrixCard/AlbumCount";
import NoticeNewsCount from "./MatrixCard/NoticeNewsCount";
import MemberCount from "./MatrixCard/MemberCount";

export default function MatrixCardDeck() {
  const [counts, setCounts] = useState({
    events: 0,
    notices: 0,
    albums: 0,
    members: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get("/dashboard-data"); // ✅ adjust base URL if needed
        if (res.data.success) {
          setCounts(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Box sx={{ mt: "40px", mb: "40px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <EventCount value={counts.events} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <NoticeNewsCount value={counts.notices} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <AlbumCount value={counts.albums} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <MemberCount value={counts.members} />
        </Grid>
      </Grid>
    </Box>
  );
}
