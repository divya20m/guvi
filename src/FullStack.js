import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import {NavigateButtons } from './App'
import {cardData} from './All'


export function FullStack() {
  
  return (
    <div>
      <div style={{fontStyle: "italic", margin: "50px"}}>
        <h1 style={{textAlign: 'left',color: "darkgrey"}}>Full Stack Development</h1>
        <br></br>
        
        <p style={{textAlign: 'left', fontSize:" large"}}>
          Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!
          <br/><br/>
          The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!
        </p>
        <br/>
      </div>
      <NavigateButtons />
      <div className='all-cards'>
        <Grid container spacing={2}>
          {cardData.map((card) => (
            <Grid key={card.id} item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={card.image} title={card.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read more</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div >
  );
}
