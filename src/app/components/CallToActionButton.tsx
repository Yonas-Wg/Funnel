"use client"; // Add this at the top

import React from 'react';
import { Button, Box, Typography, Avatar } from '@mui/material';

// Sample avatar data
const avatars = [
  { src: 'https://i.pravatar.cc/40?img=1', alt: 'User 1' },
  { src: 'https://i.pravatar.cc/40?img=2', alt: 'A 2' },
  { src: 'https://i.pravatar.cc/40?img=3', alt: 'B 3' },
  { src: 'https://i.pravatar.cc/40?img=4', alt: 'C 4' },
  { src: 'https://i.pravatar.cc/40?img=5', alt: 'D 5' },
];

const CallToActionButton = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    style={{ marginTop: '10px', textAlign: 'center' }}
  >
    <Box display="flex" justifyContent="center" mb={2}>
      {avatars.map((avatar, index) => (
        <Avatar key={index} src={avatar.src} alt={avatar.alt} style={{ margin: '0 5px' }} />
      ))}
    </Box>
    <Typography variant="h6" style={{ color: 'white', marginBottom: '0px' }}>
      Join our 20,000+ students worldwide
    </Typography>
  </Box>
);

export default CallToActionButton;
