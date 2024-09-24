"use client"; // Add this at the top

import React from 'react';
import { Typography } from '@mui/material';

const TypographySection = () => (
  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    <Typography variant="h4" gutterBottom>
      Create your FREE account NOW!!
    </Typography>
    <Typography
      variant="h6"
      style={{
        marginTop: '10px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color:'lightgrey'
      }}
    >
      Create Your Account Below and Get Free Access to my Sales System that allows you to attract, capture, and generate leads on autopilot.
    </Typography>
  </div>
);

export default TypographySection;
