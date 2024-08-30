import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";

export default function UpdateContactForm() {
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch existing contact info
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get("/contact-info");
        const { phoneNumber, whatsapp } = response.data;
        setPhone(phoneNumber || "");
        setWhatsapp(whatsapp || "");
      } catch (err) {
        toast.error("Failed to fetch contact information");
      } finally {
        setLoading(false);
      }
    };
    fetchContactInfo();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!phone.trim() || !whatsapp.trim()) {
      toast.error("Phone number and WhatsApp number are required");
      window.location.reload();
      return;
    }
    try {
      await axios.post("/contact-info", { phoneNumber: phone, whatsapp });
      toast.success("Contact information updated successfully");
      // Reload the page
      window.location.reload();
    } catch (err) {
      toast.error("Failed to update contact information");
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mb: "40px" }}>
        Update Contact
      </Typography>
      <Stack
        direction="column"
        spacing={3}
        sx={{ width: "360px", maxWidth: "100%" }}
      >
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{
            "& input[type='number']::-webkit-inner-spin-button, & input[type='number']::-webkit-outer-spin-button":
              {
                WebkitAppearance: "none",
                margin: 0,
              },
            "& input[type='number']": {
              MozAppearance: "textfield",
            },
          }}
        />
        <TextField
          label="Whatsapp Number"
          variant="outlined"
          fullWidth
          type="number"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          sx={{
            "& input[type='number']::-webkit-inner-spin-button, & input[type='number']::-webkit-outer-spin-button":
              {
                WebkitAppearance: "none",
                margin: 0,
              },
            "& input[type='number']": {
              MozAppearance: "textfield",
            },
          }}
        />
        <Button variant="contained" type="submit">
          Update
        </Button>
      </Stack>
    </Box>
  );
}
