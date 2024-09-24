"use client"; 

import React, { useState } from 'react';
import VideoSection from '../components/VideoSection';
import { Typography, Button, Box, CircularProgress, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

const Confirmation = () => {
  const router = useRouter(); 
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    setLoading(true);

    await router.push('/step3'); 
    setLoading(false);
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom right, rgba(10, 10, 30, 1), rgb(34, 62, 104), rgb(41, 82, 41), rgba(97, 81, 69))',
      minHeight: 'auto', 
      padding: '100px',
      color: 'white' 
    }}>
       <Box
      sx={{
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '880px',
        padding: '20px',
        backgroundColor: 'lightgrey',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 1)',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        To validate your call, we need to ask a few questions
      </Typography>
      <Typography variant="h6" sx={{ lineHeight: '1.6', color: '#555' }}>
        This will help us get to know you better and tailor this conversation<br/> based on your needs
      </Typography>
    </Box>
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: '1400px', 
          margin: '0 auto', 
          overflow: 'hidden' 
        }}
      >
        <VideoSection />
      </Box>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', marginTop: '0px' }}>
      What are your main takeaways from the video?
      </Typography> 
      <Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Your response..."
          sx={{ backgroundColor: 'white', borderRadius: '5px', width: '400px' }}
        />
      </Box>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          disabled={loading}
          sx={{borderRadius:'50px'}}
          onClick={handleSubmit} 
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
        </Button>
      </Box>
    </div>
  );
};

export default Confirmation;
