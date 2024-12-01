// src/components/Layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Box from '@mui/material/Box';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1, p: 2 }}>
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};
    
export default Layout;
