
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Input = styled('input')({
    display: 'none',
});

const Resister = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: "130%" }}>
                <Typography gutterBottom variant="h3" component="div">

                    Create Your Own Account Here

                </Typography>
                <Typography gutterBottom variant="p" component="div">

                    Please Fill OUt This Form || if resistered go login

                </Typography>
                <TextField sx={{ margin: "10px" }} fullWidth label="Enter Channel Name" id="fullWidth" />
                <TextField sx={{ margin: "10px" }} fullWidth label="Enter Email Address" id="fullWidth" />
                <TextField sx={{ margin: "10px" }} fullWidth label="Enter Passwrod" id="fullWidth" />
                <TextField sx={{ margin: "10px" }} fullWidth label="Enter Description" id="fullWidth" />
                <Link to="/login"> <Typography gutterBottom variant="p" component="div">
                    if  resistered || login here

                </Typography></Link>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span">
                        Upload Banner Image
                    </Button>
                </label>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button sx={{ margin: "10px" }} variant="contained" component="span">
                        Upload Clannel Logo
                    </Button>
                </label>
                <br />
                <Link to="/">

                    <Button sx={{ margin: "10px" }} variant="contained">Create Account</Button>
                </Link>






            </div>
            <div style={{ width: "100%", padding: "10px" }}>
                <img width="100%" src="https://img.freepik.com/free-vector/access-control-system-illustration_335657-4640.jpg?size=338&ext=jpg" alt="" />



            </div>
        </div>
    );
};

export default Resister;