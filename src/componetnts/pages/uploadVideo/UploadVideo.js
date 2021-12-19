
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

const UploadVideo = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: "130%" }}>
                <Typography gutterBottom variant="h3" component="div">

                    Create Your Video Here

                </Typography>
                <Typography gutterBottom variant="p" component="div">

                    Please Fill OUt This Form

                </Typography>
                <TextField sx={{ margin: "10px" }} fullWidth label="Enter Your video Title Here" id="fullWidth" />

                <TextField sx={{ margin: "10px" }} fullWidth label="Enter Description" id="fullWidth" />
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span">
                        Upload Thumbnail Image
                    </Button>
                </label>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />

                </label>
                <br />
                <Link to="/upload">

                    <Button sx={{ margin: "10px" }} variant="contained">Upload Video</Button>
                </Link>






            </div>
            <div style={{ width: "100%", padding: "10px" }}>
                <img width="100%" src="https://image.freepik.com/free-vector/interface-design-abstract-concept-illustration-user-interface-engineering-visual-element-create-website-application-responsive-design-usability-test-hierarchy_335657-3345.jpg" alt="" />



            </div>
        </div>
    );
};

export default UploadVideo;