import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Unstable_Grid2';
import { borderRadius } from '@mui/system';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <div className="cards">
    <Card sx={{ minWidth: 500, borderRadius: '20px', backgroundColor: '#e6e3dc' }}>
    <Grid2 container spacing={2}>
    <Grid2 item>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h5" component="div">
          My Name is Ah{bull}med
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          He/Him
        </Typography>
        <Typography variant="body2">
          I'm a 2A Computer Science student at the Univeristy of waterloo.
        </Typography>
      </CardContent>
      </Box>
      </Grid2>
      <Grid2 item>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent>
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: '20px' }}
        height='200'
        src={require('../img/IMG_1312.jpeg')}
        alt="My picture"
      />
      </CardContent>
      </Box>   
      </Grid2>
      </Grid2>
    </Card>
    </div>
  );
}
