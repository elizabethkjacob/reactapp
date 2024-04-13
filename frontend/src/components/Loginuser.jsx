import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundimage from "../images/imagelogin.jpg"

const Loginuser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ Username: "", Password: "" }); 

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    axios
      .post("http://localhost:3005/user/login", user)
      .then((res) => {
        if (res.data.message === "User Login success") {
          alert(res.data.message);
          navigate("/viewemployees");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        backgroundImage:`url(${backgroundimage})`,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "35ch",
            borderRadius: "10px",
            "& input::placeholder": {
              color: "white",
            },
            border: "1px solid white",
            borderColor: "white",
          },
          bgcolor: "rgba(255, 255, 255, 0.2)",
          p: 4,
          borderRadius: "20px",
          textAlign: "center",
          height: "400px",
          width: "400px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h4"
          style={{ color: "white", marginBottom: "20px" }}
        >
          {" "}
          User Login
        </Typography>
        <div>
          <TextField
            id="outlined-required-email"
            label="Username"
            name="Username"
            InputLabelProps={{ style: { color: "white" } }}
            inputProps={{ style: { color: "white" } }}
            onChange={inputHandler}
          />
        </div>
        <div>
          <TextField
            id="outlined-required-password"
            label="Password"
            name="Password"
            type="password"
            InputLabelProps={{ style: { color: "white" } }}
            inputProps={{ style: { color: "white" } }}
            onChange={inputHandler}
          />
        </div>
        <Button variant="contained" color="secondary" onClick={addHandler}>
          Login
        </Button>
        <Typography
          variant="body2"
          style={{ marginTop: "20px", color: "white" }}
        >
          Don't have an account?{" "}
          <Link component={RouterLink} to="/sign" style={{ color: "white" }}>
            Signup
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Loginuser;