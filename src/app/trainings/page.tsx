"use client";

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Container, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NatureIcon from '@mui/icons-material/Nature';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useRouter, usePathname } from 'next/navigation';


const TrainingCards = () => {
  const trainings = [
    {
        title: 'Quick Start',
        description: 'Get started quickly with a brief overview of our platform, covering all the basics you need to know to begin your journey efficiently. Dive in, explore, and learn at your own pace with this introduction.',
        image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
        icon: <PlayArrowIcon />
    },
    {
        title: 'Organic Training',
        description: 'Learn how to grow organically with our comprehensive guide. We will walk you through the steps of building a sustainable strategy that helps you grow without relying on paid methods.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
        icon: <NatureIcon />
    },
    {
        title: 'Paid Training',
        description: 'Master the art of paid marketing strategies with in-depth tutorials. Understand how to use your budget effectively to maximize your reach and return on investment.',
        image: 'https://images.pexels.com/photos/4050317/pexels-photo-4050317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600', // New image
        icon: <MonetizationOnIcon />
    }
];


  const router = useRouter();
  const currentPath = usePathname();

  const navItems = ["Step 1", "Step 2", "Step 3", "Trainings", "Funnels", "Members", "Leaderboard", "Account"];

  return (
    <div style={{
        background: 'linear-gradient(to bottom right, rgba(10, 10, 30, 1), rgb(34, 62, 104), rgb(41, 82, 41), rgba(97, 81, 69))',
        minHeight: 'auto',
        padding: '100px',
        color: 'white'
      }}>

      {/* Navigation Menu */}
      <Box display="flex" justifyContent="flex-end" marginBottom={2}>
        {navItems.map((item) => {
          const itemPath = `/${item.replace(" ", "").toLowerCase()}`;
          const isActive = currentPath === itemPath;

          return (
            <Button
              key={item}
              color={isActive ? "primary" : "inherit"}
              style={{
                marginLeft: '10px',
                textDecoration: isActive ? 'underline' : 'none',
                fontWeight: isActive ? 'bold' : 'normal'
              }}
              onClick={() => router.push(itemPath)}
            >
              {item}
            </Button>
          );
        })}
      </Box>

      <Container>
        <Typography variant="h3" align="center" gutterBottom style={{ color: 'white', margin: '100px' }}>
          Trainings
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {trainings.map((training, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  maxWidth: 500, 
               
                 marginTop:'10px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-40px)',
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={training.image}
                  alt={training.title}
                  sx={{cursor:'pointer'}}
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" display="flex" alignItems="center">
                    {training.icon} <Box marginLeft={1}>{training.title}</Box>
                  </Typography>
                  <Typography variant="body1" style={{ color: 'grey' }}>
                    {training.description}
                  </Typography>
                </CardContent>
                <div key={index} style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <Button variant="contained" size="large" startIcon={training.icon}>
                        {training.title}
                    </Button>
                </div>
              </Card>
             
            </Grid>
            
          ))}
        </Grid>
      </Container>
      <Box display="flex" justifyContent="center" marginTop={4} gap={2}>
      <Button 
          variant="contained" 
          color="primary"  
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px' }} 
          onClick={() => router.push('/step3')} 
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          color="success" 
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px'  }} 
          onClick={() => router.push('/funnels')}  
        >
          Next
        </Button>
    </Box>
    </div>
  );
};

export default TrainingCards;
