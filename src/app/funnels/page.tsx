"use client";

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Container, Box, TextField } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import LinkIcon from '@mui/icons-material/Link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for Toastify

const Funnels = () => {
  const funnels = [
    {
      title: 'Sales Funnel 1',
      video: 'https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4    ',
      link: 'https://example.com/sales-funnel-1'
    },
    {
      title: 'Marketing Funnel 2',
      video: 'https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4',
      link: 'https://example.com/marketing-funnel-2'
    },
    {
      title: 'Conversion Funnel 3',
      video: 'https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4',
      link: 'https://example.com/conversion-funnel-3'
    },
    {
      title: 'Growth Funnel 4',
      video: 'https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4',
      link: 'https://example.com/growth-funnel-4'
    },
    {
      title: 'Engagement Funnel 5',
      video: 'https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4',
      link: 'https://example.com/engagement-funnel-5'
    },
    {
      title: 'Lead Generation Funnel 6',
      video: 'https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4',
      link: 'https://example.com/lead-generation-funnel-6'
    }
  ];

  const router = useRouter();
  const currentPath = usePathname();

  const navItems = ["Step 1", "Step 2", "Step 3", "Trainings", "Funnels", "Members", "Leaderboard", "Account"];

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast.success('Link copied to clipboard!', { position: "top-right", autoClose: 2000 });
  };

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
          Funnels
        </Typography>
        <Typography variant="h6" align="left" gutterBottom style={{ color: 'lightgrey', marginBottom: '40px' }}>
          Choose your favorite landing page and copy your personal link
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {funnels.map((funnel, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 500,
                  margin: 'auto',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                  }
                }}
              >
                {/* Video Section */}
                <CardMedia component="video" src={funnel.video} controls height="200" />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {funnel.title}
                  </Typography>

                  {/* Review and Copy Link Section */}
                  <Box display="flex" justifyContent="space-between" marginTop={2}>
                  <Button variant="contained" color="primary" onClick={() => window.open(funnel.video, '_blank')}>
                        Review
                        </Button>

                    <Button variant="contained" sx={{backgroundColor:'grey'}} onClick={() => handleCopyLink(funnel.link)}>
                      <LinkIcon /> Copy Link
                    </Button>
                  </Box>

                  {/* Display Link */}
                  <TextField
                    margin="dense"
                    fullWidth
                    value={funnel.link}
                    InputProps={{
                      readOnly: true,
                      style: { color: 'grey' }
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ToastContainer />
      <Box display="flex" justifyContent="center" marginTop={4} gap={2}>
      <Button 
          variant="contained" 
          color="primary"  
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px' }} 
          onClick={() => router.push('/trainings')} 
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          color="success" 
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px'  }} 
          onClick={() => router.push('/members')}  
        >
          Next
        </Button>
    </Box>
    </div>
  );
};

export default Funnels;
