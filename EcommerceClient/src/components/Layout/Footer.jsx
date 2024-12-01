// src/components/Layout/Footer.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2024 My App
      </Typography>
    </Box>
  );
};

export default Footer;
