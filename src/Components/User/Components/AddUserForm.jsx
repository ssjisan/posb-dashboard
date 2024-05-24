import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import { EyeOff, EyeOn } from "../../../assets/IconSet";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AddUserForm() {
  
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    useContext(DataContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/register", { name, email, password });
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("User Created!");
        navigate("/user_list");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <Box sx={{ p: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <Stack spacing={3}>
            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="User Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormControl sx={{}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <EyeOff color="#918EAF" size="24px" />
                      ) : (
                        <EyeOn color="#918EAF" size="24px" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Create
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
