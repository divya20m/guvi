import React from 'react';
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export function DataScience() {
  return (
    <div>
      <div>
      <div>
        <h1 style={{textAlign: 'left',color: "darkgrey"}}>Data Science</h1>
        <br></br>
        
        <p style={{textAlign: 'left',
   
    fontSize:" large"}}>
      One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.
          <br></br>
          The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!
        </p>
        <br></br><br></br>
      </div>
        <div className='fullstack-card'>
          <Grid container spacing={2}>

            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png"
                  title="The Top 10 Tools Every Full Stack Developer Should Master in 2023" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    The Top 10 Tools Every Full Stack Developer Should Master in 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.
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
                  image="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png"
                  title="The Ultimate Guide to Real-World Full Stack Development Applications" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    The Ultimate Guide to Real-World Full Stack Development Applications
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Full stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.
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
                  image="https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp"
                  title="Best Ways to Learn Full Stack Development in 2023" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Best Ways to Learn Full Stack Development in 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Full stack development is and will be a promising and an in-demand career in the upcoming years. According to Stack Overflow, there are more than 90,000 developers who responded to the tools being used, in a survey
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
                  title="How Long Would It Take to Be a Full Stack Developer?" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    How Long Would It Take to Be a Full Stack Developer?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Have you ever wondered how much time it would take to become a skilled Full Stack Developer, capable of creating awesome websites and web applications?
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
                  image="https://www.guvi.in/blog/wp-content/uploads/2023/07/image-6.png"
                  title="Top Skills To Become a Full Stack Developer in 2023" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Top Skills To Become a Full Stack Developer in 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Are you interested in becoming a great full-stack developer? If so, then you’re at the right place! In this comprehensive guide, we will explore the skills and knowledge required to excel in this multifaceted role.
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
                  image="https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Full-Stack-Development-Webinars-and-Workshops.jpg"
                  title="Top Full Stack Development Webinars and Workshops" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Top Full Stack Development Webinars and Workshops
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Are you keen to elevate your web development skills and master the art of Full Stack Development? There are numerous ways to acquire the knowledge necessary to become a proficient web developer.
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
    </div>
  );
}
