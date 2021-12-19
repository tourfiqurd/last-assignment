import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: "130%" }}>
                <Typography gutterBottom variant="h3" component="div">
                    Login Here

                </Typography>
                <TextField sx={{ margin: "10px" }} fullWidth label="Enter Email Address" id="fullWidth" />

                <TextField sx={{ margin: "10px" }} fullWidth label="Enter Passwrod" id="fullWidth" />
                <Link to="/resister"> <Typography gutterBottom variant="p" component="div">
                    if not login|| register here

                </Typography></Link>
                <Button sx={{ margin: "10px" }} variant="contained">LOgin</Button>





            </div>
            <div style={{ width: "100%", padding: "10px" }}>
                <img width="100%" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg" alt="" />



            </div>
        </div>
    );
};

export default Login;