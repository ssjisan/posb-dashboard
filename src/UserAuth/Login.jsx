import { Box, Container, Typography } from "@mui/material";
import InputFields from "../Components/Login/InputFields";
export default function Login() {

    return (
        <Box sx={{ background: "#F2F3F3", height: "100vh", pt: "120px" }}>
            <Container>
                <Box sx={{ padding: "0px 40px", maxWidth: "498px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "4px solid #fff", margin: "auto", borderRadius: "20px", background:"#fff" }}>
                    <Box sx={{ width: "284px" }}>
                        <img src="Form Logo.png" alt="logo" width="100%" />
                    </Box>
                    <Box sx={{ padding: "40px 0px" }}>
                        <Typography variant="h4">Login to InsightTech BD Portal</Typography>
                    </Box>
                    <InputFields />
                </Box>
            </Container>
        </Box>
    )
}