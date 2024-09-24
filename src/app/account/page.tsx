'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Box,
  TextField,
  Avatar,
} from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkIcon from '@mui/icons-material/Link';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';

const Account = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const navItems = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Trainings",
    "Funnels",
    "Members",
    "Leaderboard",
    "Account",
  ];

  // State to manage user information
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    username: "johndoe",
    website: "www.johndoe.com",
    affiliateId: "AFF123456",
    schedulerUrl: "www.scheduler.com/johndoe",
    leader: "Team Leader",
    bio: "This is a brief bio about John Doe.",
  });

  const [isEditing, setIsEditing] = useState(false); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    if (isEditing) {
      toast.success('Account details saved!', { position: "top-right", autoClose: 2000 });
    }
    setIsEditing((prev) => !prev); 
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, rgba(10, 10, 30, 1), rgb(34, 62, 104), rgb(41, 82, 41), rgba(97, 81, 69))',
        minHeight: '100vh',
        padding: '100px 0',
        color: 'white',
      }}
    >
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
                fontWeight: isActive ? 'bold' : 'normal',
              }}
              onClick={() => router.push(itemPath)}
            >
              {item}
            </Button>
          );
        })}
      </Box>

      <Container>
        <Typography variant="h4" align="left" gutterBottom style={{ color: 'white', marginTop: '20px' }}>
          Account
        </Typography>
        <Typography variant="h6" align="left" gutterBottom style={{ color: 'lightgrey', marginBottom: '40px' }}>
          Setup your account details and your public profile
        </Typography>

        {/* User Information Card */}
        <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', marginTop: '20px' }}>
          <CardContent>
            {/* Enlarged Avatar */}
            <Avatar
              alt="User Avatar"
              src="/images/profile pic.jpg" 
              sx={{ width: 100, height: 100, marginBottom: 2, border: '2px solid white' }}
            />
            <Box display="flex" justifyContent="flex-end" marginBottom={2}>
              <Button variant="contained" color="primary" onClick={handleEdit} startIcon={<EditIcon />}>
                {isEditing ? 'Save' : 'Edit'}
              </Button>
            </Box>
            <Grid container spacing={3}>
              {[
                { label: "Name", name: "name", icon: <AccountCircleIcon sx={{ fontSize: 50 }} />, value: userInfo.name },
                { label: "Username", name: "username", icon: <PersonIcon sx={{ fontSize: 50 }} />, value: userInfo.username },
                { label: "Website", name: "website", icon: <LinkIcon sx={{ fontSize: 50 }} />, value: userInfo.website },
                { label: "Affiliate ID", name: "affiliateId", icon: <PeopleIcon sx={{ fontSize: 50 }} />, value: userInfo.affiliateId },
                { label: "Scheduler URL", name: "schedulerUrl", icon: <ScheduleIcon sx={{ fontSize: 50 }} />, value: userInfo.schedulerUrl },
                { label: "Bio", name: "bio", icon: <DescriptionIcon sx={{ fontSize: 50 }} />, value: userInfo.bio },
              ].map(({ label, name, icon, value }) => (
                <Grid item xs={12} md={6} key={name}>
                  <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Box display="flex" alignItems="center" marginBottom={1} color={'white'}>
                      {icon}
                      <Typography variant="body1" style={{ marginLeft: '8px' }}>{label}</Typography>
                    </Box>
                    <TextField
                      fullWidth
                      name={name}
                      value={value}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      sx={{
                        backgroundColor: isEditing ? 'white' : 'rgba(255, 255, 255, 0.2)',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: isEditing ? 'black' : 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputBase-root': {
                          height: '70px',
                          color: isEditing ? 'black' : 'rgba(255, 255, 255, 0.7)', 
                          '& input': {
                            color: isEditing ? 'black' : 'rgba(255, 255, 255, 0.7)', 
                          },
                        },
                      }}
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                      InputLabelProps={{
                        style: { color: isEditing ? 'blue' : 'darkblue' }, 
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        <ToastContainer />
      </Container>
    </div>
  );
};

export default Account;
