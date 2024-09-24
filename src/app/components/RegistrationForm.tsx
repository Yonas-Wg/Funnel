"use client"; 

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid,CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required('Please fill out this field.'),
  firstName: Yup.string().required('Please fill out this field.'),
  lastName: Yup.string().required('Please fill out this field.'),
  email: Yup.string().email('Invalid email address').required('Please fill out this field.'),
  password: Yup.string().required('Please fill out this field.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Please fill out this field.'),
});

const RegistrationForm = () => {
    const router = useRouter(); 
    const formik = useFormik({
      initialValues: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },    
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
        setLoading(true);
        router.push('/step1 '); 
      },
    });
   const [loading, setLoading] = useState(false);

  return (
    <div style={{ textAlign: 'center', color: 'white', margin: '100px' }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={Boolean(formik.errors.firstName)}
              helperText={formik.errors.firstName}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'grey' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'lightgrey',
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
          </Grid>
           
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={Boolean(formik.errors.lastName)}
              helperText={formik.errors.lastName}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'grey' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'lightgrey',
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
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              error={Boolean(formik.errors.username)}
              helperText={formik.errors.username}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'grey' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'lightgrey', 
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
          </Grid>
        
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'grey' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'lightgrey',
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
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={Boolean(formik.errors.password)}
              helperText={formik.errors.password}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'grey' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'lightgrey',
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
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              error={Boolean(formik.errors.confirmPassword)}
              helperText={formik.errors.confirmPassword}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'grey' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'lightgrey',
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
          </Grid>
        </Grid>
        <div style={{ marginTop: '20px' }}>
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        disabled={loading}
        sx={{borderRadius:'50px'}}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
      </Button>
    </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
