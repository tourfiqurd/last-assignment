import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SingleVideo from '../SingleVideo/SingleVideo';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Home = () => {
    return (
        <div>

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

        </div>
    );
};

export default Home;