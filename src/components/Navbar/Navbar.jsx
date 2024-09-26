import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    // { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Career', path: '/career' },
    { text: 'CV Upload', path: '/cvupload' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="static" classes={{root: 'bg-color-hdr'}} style={{ background: 'linear-gradient(45deg, white 15%, #008080)'}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link to={'/'}><img width="12%" src={Logo} /></Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menuItems.map((item) => (
            <Button color="inherit" component={Link} to={item.path} key={item.text}>
              {item.text}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleMenuClick}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {menuItems.map((item) => (
              <MenuItem onClick={handleMenuClose} component={Link} to={item.path} key={item.text}>
                {item.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
