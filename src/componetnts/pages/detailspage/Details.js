import React from 'react';
import Grid from '@mui/material/Grid';
import DetailsVideo from './detailsvideo/DetailsVideo';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Details = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <div style={{ width: "130%" }}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/IHppmAT1g-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Typography gutterBottom variant="p" component="div" >
                    রাজধানীতে ২টি স্বর্ণে দোকানে ডাকাতি, সাড়ে ৪শ' ভোরি স্বর্ণ লুট
                </Typography>
                <Box >

                    <Button variant="outlined" sx={{ margin: "10px" }} >
                        100 views
                    </Button>
                    <Button variant="outlined" sx={{ margin: "10px" }} >
                        4154 like
                    </Button>
                    <Button variant="outlined" sx={{ margin: "10px" }} >
                        12dislike
                    </Button>
                </Box>
                <hr />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <img style={{ padding: "1px" }} src="https://yt3.ggpht.com/3wUoiwrTI1S4wd4vKZYFsHzuAJCVs5n_vC4O1qjDV7_AZ78bkvtWo4VfNSBi-6Co-qzOeSWHfw=s48-c-k-c0x00ffffff-no-rj" alt="" />
                        <Box>
                            <Typography gutterBottom variant="p" component="div">
                                Learn with Sumit Bangladesh

                            </Typography>
                            <Typography gutterBottom variant="p" component="div">
                                52.9K subscribers

                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Button variant="contained">SubScribe</Button>

                    </Box>
                </Box>



            </div>
            <div style={{ width: "100%", padding: "10px" }}>
                <DetailsVideo></DetailsVideo>
                <DetailsVideo></DetailsVideo>
                <DetailsVideo></DetailsVideo>
                <DetailsVideo></DetailsVideo>
                <DetailsVideo></DetailsVideo>


            </div>
        </div>
    );
};

export default Details;