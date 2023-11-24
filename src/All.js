import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import { NavigateButtons } from './App';


 export const cardData = [
  {
    id: 1,
    title: 'Best Ways to Learn Automation Testing',
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Bets-ways-to-learn-Automation-Testing.webp',
    description: 'In today’s tech world, making sure software works perfectly is super important. That’s where automation',
  },
  {
    id: 2,
    title: 'Best Ways to Learn Automation Testing',
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Bets-ways-to-learn-Automation-Testing.webp",
    description: 'In today’s tech world, making sure software works perfectly is super important. That’s where automation',
  },
  {
    id: 3,
    title: 'Best Ways to Learn Automation Testing',
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Bets-ways-to-learn-Automation-Testing.webp',
    description: 'In today’s tech world, making sure software works perfectly is super important. That’s where automation',
  },
  {
    id: 4,
    title: 'Best Ways to Learn Automation Testing',
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Bets-ways-to-learn-Automation-Testing.webp',
    description: 'In today’s tech world, making sure software works perfectly is super important. That’s where automation',
  },
  {
    id: 5,
    title: 'Best Ways to Learn Automation Testing',
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Bets-ways-to-learn-Automation-Testing.webp',
    description: 'In today’s tech world, making sure software works perfectly is super important. That’s where automation',
  },
  {
    id: 6,
    title: 'Best Ways to Learn Automation Testing',
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Bets-ways-to-learn-Automation-Testing.webp',
    description: 'In today’s tech world, making sure software works perfectly is super important. That’s where automation',
  }
];

export function All() {
  return (
    <div>
      <div><img src='https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png' className='all-img'/></div>
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
  );
}