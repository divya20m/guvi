import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
export function All() {
  return (
    <div>

      <div className='all-cards'>
        <Grid container spacing={2}>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Bets-ways-to-learn-Automation-Testing.webp"
                title="Best Ways to Learn Automation Testing" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Best Ways to Learn Automation Testing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In today’s tech world, making sure software works perfectly is super important. That’s where automation
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Bets-ways-to-learn-Automation-Testing.webp"
                title="Best Ways to Learn Automation Testing" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Best Ways to Learn Automation Testing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In today’s tech world, making sure software works perfectly is super important. That’s where automation
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-How-Long-Would-It-Take-To-Learn-Web-Development.webp"
                title="How Long Would It Take to Learn Web Development?" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  How Long Would It Take to Learn Web Development?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ever noticed how websites make our lives easier? From buying clothes online to watching funny
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp"
                title="Top Selenium Interview Questions and Answers for 2023" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Top Selenium Interview Questions and Answers for 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Testing is a very important phase in the software development lifecycle (SDLC) and thus, Selenium,
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          </Grid>
          
          
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp"
                title="Top Selenium Interview Questions and Answers for 2023" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Top Selenium Interview Questions and Answers for 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Testing is a very important phase in the software development lifecycle (SDLC) and thus, Selenium,
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp"
                title="Top Selenium Interview Questions and Answers for 2023" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Top Selenium Interview Questions and Answers for 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Testing is a very important phase in the software development lifecycle (SDLC) and thus, Selenium,
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

