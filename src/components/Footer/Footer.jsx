import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, mt: 'auto',  background: 'linear-gradient(45deg, white 10%, #008080)', color: 'white' }}>
      <Typography variant="body1" align="center">
        © 2024 AP Service Provider. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
