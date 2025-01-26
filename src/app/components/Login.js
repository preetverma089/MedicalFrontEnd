"use client";
import React, { useState } from "react";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { loginUser } from "../API/api";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import { toast } from "react-toastify";
const Login = () => {
  const [userDetails, setUserDetails] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    debugger;
    try {
      const { status, data } = await loginUser(formData);
      if (data.status === 200) {
        toast.success("user LoggedIN");
        localStorage.setItem("Token", JSON.stringify(data.authToken));
        localStorage.setItem("userDetails", JSON.stringify(data.userDetails));
        console.log(data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleFormData = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Box
        sx={{
          // minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f4f4f4",
          marginTop: 65,
        }}
      >
        <Box
          sx={{
            width: 400,
            padding: 6,
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: 1,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            color="primary"
          >
            Welcome to Bazar
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Login an account to start
          </Typography>
          <form>
            <TextField
              label="Email or Phone Number"
              variant="outlined"
              fullWidth
              name="email"
              margin="normal"
              value={formData.email}
              onChange={handleFormData}
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleFormData}
            />

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <>
                  By login, you agree to{" "}
                  <Link href="#" underline="hover">
                    Terms & Conditions
                  </Link>
                </>
              }
              sx={{ marginY: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="medium"
              onClick={handleLogin}
              sx={{
                marginY: 2,
                borderRadius: 5,
                backgroundColor: "rgb(210,63, 87)",
              }}
            >
              Login
            </Button>
          </form>
          <Typography variant="body2" align="center" gutterBottom>
            or
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ backgroundColor: "#4285F4", color: "white", borderRadius: 5 }}
            startIcon={<FacebookOutlinedIcon sx={{ size: 3 }} />}
          >
            Continue With Google
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{
              marginTop: 2,
              bgcolor: "#3B5998",
              color: "white",
              borderRadius: 5,
            }}
            startIcon={<GoogleIcon sx={{ size: 3 }} />}
          >
            Continue With Facebook
          </Button>
          <Typography
            variant="body2"
            align="center"
            gutterBottom
            sx={{ marginTop: 2, fontSize: 15 }}
          >
            Don't have account ? Register
          </Typography>
          <Typography
            variant="body2"
            align="center"
            gutterBottom
            sx={{ marginTop: 2, fontSize: 15 }}
          >
            Forgot your password? Reset It
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
