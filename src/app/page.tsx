"use client"; 

import React from 'react';
import TypographySection from './components/TypographySection';
import VideoSection from './components/VideoSection';
import RegistrationForm from './components/RegistrationForm';
import CallToActionButton from './components/CallToActionButton';

const LandingPage = () => (
  <div style={{
    background: 'linear-gradient(to bottom right, rgba(10, 10, 30, 1), rgb(34, 62, 104), rgb(41, 82, 41), rgba(97, 81, 69))',
    minHeight: 'auto', 
    padding: '100px',
    color: 'white' 
  }}>
    <TypographySection />
    <VideoSection />
    <RegistrationForm />
    <CallToActionButton />
  </div>
);

export default LandingPage;
