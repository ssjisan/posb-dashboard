import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Table, TableContainer, Typography, Button } from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";
import { useParams } from "react-router-dom";

export default function View() {
  const { id: courseId } = useParams(); // courseId from URL params
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);

  // ---------------- FETCH REGISTRATIONS ----------------
  const fetchRegistrations = async () => {
    if (!courseId) return;
    setLoading(true);
    try {
      const res = await axios.get(`/registration/confirmation/${courseId}`);
      setRegistrations(res.data.registrations || []);
    } catch (err) {
      console.error("Failed to fetch registrations:", err);
      setRegistrations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, [courseId]);

  // ---------------- DOWNLOAD CSV ----------------
  const handleDownloadCSV = () => {
    if (!registrations.length) return;

    // CSV header
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Designation",
      "Workplace",
      "Bkash Number",
      "Transaction ID",
      "Status",
      "Remarks",
    ];

    // CSV rows
    const rows = registrations.map((r) => [
      r.name,
      r.email,
      r.phone,
      r.designation,
      r.workplace,
      r.senderNumber || "",
      r.transactionId || "",
      r.status,
      r.remarks || "",
    ]);

    // Combine header + rows
    const csvContent = [headers, ...rows]
      .map((e) => e.map((v) => `"${v}"`).join(",")) // wrap in quotes
      .join("\n");

    // Create Blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Confirmed_Registrations_${courseId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Box
      sx={{
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        borderRadius: "16px",
        p: 2,
        mt: 3,
      }}
    >
      {/* Download Button */}
      {registrations.length > 0 && (
        <Button variant="contained" sx={{ mb: 2 }} onClick={handleDownloadCSV}>
          Download CSV
        </Button>
      )}

      {loading ? (
        <Typography sx={{ mt: 2 }}>Loading registrations...</Typography>
      ) : registrations.length === 0 ? (
        <Typography sx={{ mt: 2 }}>No registrations for this course</Typography>
      ) : (
        <TableContainer>
          <Table sx={{ mt: "16px" }}>
            <Header />
            <Body
              registrations={registrations}
              refreshData={fetchRegistrations}
              selectedEvent={courseId}
            />
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
