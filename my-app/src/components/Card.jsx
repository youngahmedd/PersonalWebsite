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
import { Container } from '@mui/material';

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
    <section className="cards">
    {/* <Container maxWidth="lg"> */}
    <Card sx={{ display: 'flex', minWidth: 300, borderRadius: '20px', backgroundColor: '#e6e3dc', minheight: 300, m: '40px' }}>
    <Grid2 container spacing={2}>
    <Grid2 item>
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 800, justifyContent: "center", alignItems: "center" }}>
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
        Hi there, I'm Ahmed👋
        <br></br>
        <br></br>
        I'm a 2A Computer Science 💻 at the University of Waterloo, I am double specializing in Human-Computer Interaction and Software Engineering.
        <br></br>
        <br></br>
        I have many interests in the tech world which include Human-Computer Interaction, Product Management, Data Science, and anything that allows me to make an impact through Software.
        </Typography>
      </CardContent>
      </Box>
      </Grid2>
      <Grid2 item>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
      <CardContent>
      <CardMedia
        component="img"
        sx={{ width: 300, borderRadius: '20px', height: 300, mx: 'auto', my: 'auto' }}
        height='300'
        src={require('../img/IMG_1312.jpeg')}
        alt="My picture"
      />
      </CardContent>
      </Box>   
      </Grid2>
      </Grid2>
    </Card>
    {/* </Container> */}
    </section>
  );
}
