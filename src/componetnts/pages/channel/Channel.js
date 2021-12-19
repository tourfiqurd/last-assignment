import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import SingleVideo from './../SingleVideo/SingleVideo';


const Channel = () => {
    return (
        <div>
            <img src="https://i.ibb.co/HthG1qN/Screenshot-2021-12-18-at-22-09-56-Learn-with-Sumit-Bangladesh.png" alt="" />
            <Box sx={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                    <Link to="/upload"><Button variant="contained">Upload Video</Button></Link>


                </Box>
            </Box>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Channel Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Box>
                <Grid sx={{ padding: "50px", display: "flex", justifyContent: "center" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>
                    <SingleVideo></SingleVideo>

                </Grid>
            </Box>

        </div >
    );
};

export default Channel;