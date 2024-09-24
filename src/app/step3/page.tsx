"use client";

import React from 'react';
import { Typography, Button, Box, Divider } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import VideoSection from '../components/VideoSection';

const Step33 = () => {
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

      <Box sx={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', maxWidth: '800px', margin: 'auto' }}>
      
      {/* Welcome Section */}
      <Typography variant="h4" gutterBottom align="center">
        Welcome
      </Typography>

      <Divider sx={{ marginY: 3 }} />

      {/* Business Model Section */}
      <Typography variant="h5" gutterBottom align="left">
        My Current Business Model
      </Typography>

      <Typography variant="h6" paragraph align="left">
        In this 4 video module, you will learn about:
      </Typography>

      <Typography variant="body1" component="div" align="left">
        <ul>
          <li>Intro to your business journey</li>
          <li>The best product I found so far</li>
          <li>The perfect business model</li>
          <li>My best strategy to get started</li>
        </ul>
      </Typography>
      
    </Box>

      {/* Video Sections */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h5" gutterBottom>1. Intro to your business journey</Typography>
        <div className="video-container">
    <VideoSection />
  </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h5" gutterBottom>2. The best product I found so far</Typography>
        <div className="video-container">
    <VideoSection />
  </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h5" gutterBottom>3. The perfect business model</Typography>
        <div className="video-container">
    <VideoSection />
  </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h5" gutterBottom>4. My best strategy to get started</Typography>
        <div className="video-container">
    <VideoSection />
  </div>
      </div>
    </div>
  );
};

export default Step33;
