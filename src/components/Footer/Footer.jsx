import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, mt: 'auto', backgroundColor: '#3f51b5', color: 'white' }}>
      <Typography variant="body1" align="center">
        © 2024 MyApp. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
