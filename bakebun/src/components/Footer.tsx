import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterRoot = styled('footer')(({ theme }) => ({
  marginTop: theme.spacing(8),
  background: 'linear-gradient(90deg, #fff3e0 0%, #fff8e1 100%)',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const Footer = () => {
  return (
    <FooterRoot>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>BakeBun</Typography>
            <Typography color="text.secondary">
              Freshly baked pizzas and sides delivered fast. Taste the difference.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Link href="/menu" underline="hover">Menu</Link>
              <Link href="/offers" underline="hover">Offers</Link>
              <Link href="/about" underline="hover">About</Link>
              <Link href="/cart" underline="hover">Cart</Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} BakeBun. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterRoot>
  );
};

export default Footer;


