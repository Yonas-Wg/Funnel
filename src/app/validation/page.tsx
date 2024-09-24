"use client";

import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const Step3 = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const countries = [
    { code: 'US', flag: '🇺🇸' },
    { code: 'CA', flag: '🇨🇦' },
    { code: 'GB', flag: '🇬🇧' },
    { code: 'AU', flag: '🇦🇺' },
    { code: 'DE', flag: '🇩🇪' },
    { code: 'FR', flag: '🇫🇷' },
  ];

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
              color={isActive ? "inherit" : "inherit"}
              style={{
                marginLeft: '10px',
                textDecoration: isActive ? 'none' : 'none',
                fontWeight: isActive ? 'normal' : 'normal'
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
          Thanks for booking your 1-on-1 <br />
          Business plan call with us!
        </Typography>
      </div>

      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
        Please select your country to proceed:
      </Typography>

      {/* Country Selection Section */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
          {countries.map(({ code, flag }) => (
            <Button
              key={code}
              variant="outlined"
              sx={{
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px solid white',
                color: 'white',
                fontSize: '24px' 
              }}
              onClick={() => router.push('/step333')}
            >
              {flag}
            </Button>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Step3;
