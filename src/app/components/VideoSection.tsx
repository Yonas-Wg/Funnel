"use client"; 

import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledVideoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '80px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer', 
  '&:hover': {
    transform: 'scale(1.08)', 
  },
});

const StyledIframe = styled('iframe')({
  width: '100%',
  height: '650px',
  cursor:'pointor',
});

const VideoSection = () => (
  <StyledVideoContainer>
  
    <div style={{ width: '87%', overflow: 'hidden', position: 'relative' }}>
      <StyledIframe
        src="https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </StyledVideoContainer>
);

export default VideoSection;
