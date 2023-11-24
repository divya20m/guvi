import React from 'react';
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {NavigateButtons } from './App'
import {cardData} from './All'

export function DataScience() {
  return (
    <div>
      <div>
      <div style={{fontStyle: "italic", margin: "50px"}}>
        <h1 style={{textAlign: 'left',color: "darkgrey"}}>Data Science</h1>
        <br></br>
        
        <p style={{textAlign: 'left',fontSize:" large"}}>
      One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.
      <br/><br/>
          The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!
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
      </div>
    </div>
  );
}
