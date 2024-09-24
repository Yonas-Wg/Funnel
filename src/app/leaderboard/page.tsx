"use client";

import React from 'react';
import { Typography, Button, Grid, Container, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Leaderboard = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const navItems = ["Step 1", "Step 2", "Step 3", "Trainings", "Funnels", "Members", "Leaderboard", "Account"];


  // Sample static data for leaderboard tables
  const leaderboardData = {
    today: [
      { id: 1, name: "Yonas", score: 100 },
    ],
    last7Days: [
      { id: 1, name: "Joseph", score: 200 },
      { id: 2, name: "Yonas", score: 180 },
      { id: 3, name: "Jonah", score: 175 },
    ],
    last30Days: [
      { id: 1, name: "Yonas", score: 300 },
      { id: 2, name: "Smith", score: 290 },
      { id: 3, name: "Doe", score: 280 },
    ],
    allTime: [
      { id: 1, name: "Yonas", score: 500 },
      { id: 2, name: "Jonah", score: 480 },
      { id: 3, name: "Smith", score: 470 },
      { id: 4, name: "Joseph", score: 470 },
      { id: 5, name: "John", score: 470 },
      { id: 6, name: "Doe", score: 470 },
    ],
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
        <Typography variant="h4" align="left" gutterBottom style={{ color: 'white', marginTop: '100px' }}>
          Leaderboard
        </Typography>
        <Typography variant="h6" align="left" gutterBottom style={{ color: 'lightgrey', marginBottom: '0px' }}>
          Compare your progress with our top users
        </Typography>

        {/* Grid Layout for Tables */}
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {Object.entries(leaderboardData).map(([period, data]) => (
            <Grid item xs={12} sm={6} md={3} key={period}>
              <Paper elevation={3} style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  style={{ color: '#333', fontWeight: '600' }}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1).replace(/([A-Z])/g, ' $1')}
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold', color: '#1E88E5' }}>ID</TableCell>
                      <TableCell style={{ fontWeight: 'bold', color: '#1E88E5' }}>Name</TableCell>
                      <TableCell style={{ fontWeight: 'bold', color: '#1E88E5' }}>Score</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id} hover style={{ cursor: 'pointer' }}>
                        <TableCell style={{ color: '#555' }}>{row.id}</TableCell>
                        <TableCell style={{ color: '#555' }}>{row.name}</TableCell>
                        <TableCell style={{ color: '#555' }}>{row.score}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <ToastContainer />
      <Box display="flex" justifyContent="center" marginTop={10} gap={2}>
        <Button 
          variant="contained" 
          color="primary"  
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px' }} 
          onClick={() => router.push('/members')} 
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          color="success" 
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px' }} 
          onClick={() => router.push('/account')}  
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Leaderboard;
