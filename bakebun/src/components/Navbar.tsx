import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box, Container, Tooltip, Avatar, Menu, MenuItem, Divider } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
});

const NavLinks = styled('div')({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
});

const Logo = styled(Typography)({
  fontWeight: 700,
  fontSize: '1.5rem',
  color: 'white',
  textDecoration: 'none',
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const userJson = localStorage.getItem('user') || sessionStorage.getItem('user');
  const user = userJson ? JSON.parse(userJson) : null;

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <StyledToolbar>
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Logo>BakeBun</Logo>
          </RouterLink>
          <NavLinks>
            <Button color="inherit" component={RouterLink} to="/menu">Menu</Button>
            <Button color="inherit" component={RouterLink} to="/offers">Offers</Button>
            <Button color="inherit" component={RouterLink} to="/about">About</Button>
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Button color="inherit" component={RouterLink} to="/admin">Admin</Button>
                )}
                <Tooltip title={user.name || user.email}>
                  <IconButton onClick={handleOpen} size="small" sx={{ ml: 1 }}>
                    <Avatar sx={{ width: 32, height: 32 }} src={user.avatarUrl}>
                      {(user.name?.[0] || user.email?.[0] || 'B').toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                  <MenuItem component={RouterLink} to="/">Home</MenuItem>
                  <MenuItem component={RouterLink} to="/cart">My Cart</MenuItem>
                  <Divider />
                  <MenuItem onClick={() => { localStorage.removeItem('user'); sessionStorage.removeItem('user'); localStorage.removeItem('token'); sessionStorage.removeItem('token'); window.location.href = '/'; }}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button color="inherit" component={RouterLink} to="/login">Login</Button>
            )}
            <IconButton color="inherit" component={RouterLink} to="/cart">
              <Badge badgeContent={0} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </NavLinks>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 