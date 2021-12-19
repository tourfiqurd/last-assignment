import React from 'react';

import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const SingleVideo = () => {
    return (
        <Grid sx={{ boxShadow: "0" }} item xs={12} md={4} sm={6}>
            <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                    <CardMedia sx={{ width: "50px", height: "50px", borderRadius: "50%", padding: "2px" }}

                        component="img"
                        alt="green iguana"

                        image="https://yt3.ggpht.com/ytc/AKedOLS_CJ9T8GGnghENxFM8H1ye-KwOMloe8HbibwQjUA=s68-c-k-c0x00ffffff-no-rj"
                    />
                    <Box sx={{ padding: "px" }}>
                        <Typography gutterBottom variant="p" component="div">
                            রাজধানীতে ২টি স্বর্ণে দোকানে ডাকাতি, সাড়ে ৪শ' ভোরি স্বর্ণ লুট
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                            Jamuna tv
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                            5454454-views
                        </Typography>

                    </Box>
                </Box>

            </Card>
        </Grid>
    );
};

export default SingleVideo;