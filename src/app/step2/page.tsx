"use client"; 

import React from 'react';
import TypographySection from '../components/TypographySection';
import VideoSection from '../components/VideoSection';
import RegistrationForm from '../components/RegistrationForm';
import CallToActionButton from '../components/CallToActionButton';
import { Typography, Button, Box } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation'; 

const Step2 = () => {
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

      <div style={{ textAlign: 'center', margin: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Step 2
        </Typography> 
      </div>
      <VideoSection />
      <Typography variant="h6" gutterBottom sx={{textAlign:'center'}}>
         Once you have watched the video above, click the button below to book your call
        </Typography> 
      <Box display="flex" justifyContent="center" marginTop={4} gap={2}>
        <Button 
          variant="contained" 
          color="primary"  
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px' }} 
          onClick={() => router.push('/step1')} 
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px'  }} 
          onClick={() => window.open('/Book', '_blank')} 
        >
          Book your call
        </Button>
        <Button 
          variant="contained" 
          color="success" 
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px'  }} 
        //  onClick={() => router.push('/nextStep')}  
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Step2;
