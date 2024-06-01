import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { EyeOff, EyeOn } from "../../assets/IconSet";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function InputFields() {
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    useContext(DataContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("isChecked") === "true"
  );
  const { auth, setAuth } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        if (rememberMe) {
          localStorage.setItem("email", email); // Store email in local storage
          localStorage.setItem("password", password); // Store password in local storage (not secure)
          localStorage.setItem("isChecked", rememberMe); // Store password in local storage (not secure)
        }
        if (!rememberMe) {
          localStorage.removeItem("email", email); // Store email in local storage
          localStorage.removeItem("password", password); // Store password in local storage (not secure)
          localStorage.removeItem("isChecked", rememberMe); // Store password in local storage (not secure)
        }
        setAuth({ ...auth, token: data.token, user: data.user });
        setLoading(false);
        toast.success("Login Successful");
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      toast.success("Please try again");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        mt: "40px",
        mb: "160px",
      }}
    >
      <TextField
        id="email"
        label="Your Email"
        variant="outlined"
        type="email"
        value={email}
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl sx={{}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          }
          label="Remember me"
        />
      </FormGroup>
      <Button
        variant="contained"
        onClick={handleLogin}
        endIcon={loading ? <img src="/spinner.gif" width="24px" /> : null}
      >
        Login
      </Button>
    </Box>
  );
}
