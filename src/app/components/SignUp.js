"use client";
import React, { useState } from "react";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/navigation";
// import { useMutation } from "@tanstack/react-query";
import { signUP } from "../API/api";
import { toast } from "react-toastify";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [userDetails, setUserDetails] = useState();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await signUP(formData);
      if (response.status === 200) {
        toast.success(response?.data?.message);
        setUserDetails(response.data);
        router.push("/login");
      }
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
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
          marginTop: 70,
        }}
      >
        <Box
          sx={{
            width: 400,
            padding: 4,
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
            Register an account to start
          </Typography>
          <form>
            <TextField
              label="Full Name"
              variant="outlined"
              name="fullName"
              fullWidth
              margin="normal"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              name="confirmPassword"
              fullWidth
              margin="normal"
              value={formData.confirmPassword}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <>
                  By signing up, you agree to{" "}
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
              onClick={handleSignUp}
              sx={{
                marginY: 2,
                borderRadius: 5,
                backgroundColor: "rgb(210,63, 87)",
              }}
            >
              Create An Account
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
            startIcon={<GoogleIcon sx={{ size: 3 }} />}
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
            startIcon={<FacebookOutlinedIcon sx={{ size: 3 }} />}
          >
            Continue With Facebook
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
