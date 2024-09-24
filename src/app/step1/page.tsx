"use client"; 

import React from 'react';
import VideoSection from '../components/VideoSection';
import { Typography, Button, Box, CircularProgress } from '@mui/material';
import { useRouter, usePathname  } from 'next/navigation';
import { useState } from 'react';

const Step1 = () => {
  const router = useRouter(); 
  const [loading, setLoading] = useState(false);
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
          Step 1
        </Typography> 
      </div>
      <Typography variant="h6" style={{ marginBottom: '20px' , textAlign:'center'}}>
      Watch Our Introduction Video
    </Typography>
      <VideoSection />
      <Typography variant="h6" gutterBottom sx={{textAlign:'center'}}>
         Once you have watched the video above, click the button below to continue to step 2
        </Typography> 
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          size="large" 
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            await router.push('/step2'); 
            setLoading(false);
          }} 
          sx={{ borderRadius:'50px'}}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Next'}
        </Button>
      </Box>
    </div>
  );
};

export default Step1;
