import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DetailsVideo = () => {
    return (
        <Card sx={{ display: 'flex', boxShadow: "0", margin: "10px" }}>
            <img width="65%" height="115px" src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="" />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ padding: "2px" }}>
                    <Typography gutterBottom variant="p" component="div">
                        রাজধানীতে ২টি স্বর্ণে দোকানে ডাকাতি, সাড়ে ৪শ' ভোরি স্বর্ণ লুট
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        Jamuna tv
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        5454454-views 3231 like
                    </Typography>

                </Box>

            </Box>

        </Card>
    );
};

export default DetailsVideo;