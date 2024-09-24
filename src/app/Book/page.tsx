"use client";

import React, { useState } from 'react';
import { Typography, Button, Box, TextField, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useRouter } from 'next/navigation';
import dayjs, { Dayjs } from 'dayjs'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';

const BookCall = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null); 
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [agree, setAgree] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
    }),
    onSubmit: () => {
      if (selectedDate && selectedTime && agree) {
        console.log('Form values:', formik.values);
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
        router.push('/Confirmation'); 
      } else {
        alert('Please select a date, time, and agree to the terms.');
      }
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: 'linear-gradient(to bottom right, rgba(10, 10, 30, 1), rgb(34, 62, 104), rgb(41, 82, 41), rgba(97, 81, 69))',
          minHeight: '100vh',
          padding: '50px',
          color: 'white',
          textAlign: 'center'
        }}
      >
       
       <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
  Secure Your Appointment
</Typography>

<Typography 
  variant="h6" 
  gutterBottom 
  sx={{ 
    maxWidth: '600px', 
    marginBottom: '40px', 
    textAlign: 'center', 
    lineHeight: '1.5',
    color: 'rgba(255, 255, 255, 0.8)', 
  }}
>
  One-on-one strategic session to plan your next steps. Choose your preferred date and time below to secure your appointment.
</Typography>


        {/* Availability Section with Icons */}
        <Box
  sx={{
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '40px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    marginBottom: '40px',
  }}
>
  {/* Availability Section with Icons */}
  <Typography variant="h6" gutterBottom textAlign="center">
    Business Plan Call: Available Time Slots
  </Typography>
  
  <Box display="flex" flexDirection="column" alignItems="center" marginBottom="20px">
    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
      <EventIcon sx={{ marginRight: '8px', color: 'success.main' }} /> 
      Monday - Friday: 9:00 AM - 5:00 PM
    </Typography>
    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
      <AccessTimeIcon sx={{ marginRight: '8px', color: 'warning.main' }} /> 
      Saturday: 10:00 AM - 2:00 PM
    </Typography>
  </Box>

  {/* Date and Time Pickers with Icons */}
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    gap={4}
  >
    <Box display="flex" flexDirection="column" alignItems="center">
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)} 
        renderInput={(params) => (
          <TextField 
            {...params} 
            variant="outlined" 
            sx={{ 
              backgroundColor: 'white', 
              borderRadius: '5px', 
              width: '300px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }} 
          />
        )}
      />
    </Box>
    <Box display="flex" flexDirection="column" alignItems="center">
      <TimePicker
        label="Select Time"
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)} 
        renderInput={(params) => (
          <TextField 
            {...params} 
            variant="outlined" 
            sx={{ 
              backgroundColor: 'white', 
              borderRadius: '5px', 
              width: '300px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }} 
          />
        )}
      />
    </Box>
  </Box>
</Box>



        <form onSubmit={formik.handleSubmit}>

          {/* Form Fields (Two in a Row) */}
          <Grid container spacing={2} style={{ marginBottom: '20px' }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                variant="outlined"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                sx={{ backgroundColor: 'white', borderRadius: '5px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
                sx={{ backgroundColor: 'white', borderRadius: '5px' }}
              />
            </Grid>
          </Grid>

          {/* Email and Phone */}
          <Grid container spacing={2} style={{ marginBottom: '20px' }}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ backgroundColor: 'white', borderRadius: '5px' }}
              />
            </Grid>
            <Grid item xs={6    }>
              <TextField
                fullWidth
                id="phone"
                label="Phone"
                variant="outlined"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                sx={{ backgroundColor: 'white', borderRadius: '5px' }}
              />
            </Grid>
          </Grid>

          {/* Agree Checkbox */}
          <FormControlLabel
            control={
              <Checkbox 
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                sx={{ color: 'white' }}
              />
            }
            label={<Typography color="white">I agree to the terms and conditions</Typography>}
          />

          {/* Submit Button */}
          <Button 
            variant="contained" 
            color="success" 
            size="large" 
            type="submit"
            style={{ padding: '10px 40px', marginTop: '20px' }}
          >
          Schedule meeting
          </Button>
        </form>
      </Box>
    </LocalizationProvider>
  );
};

export default BookCall;
