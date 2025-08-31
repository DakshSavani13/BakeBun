
import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StarIcon from '@mui/icons-material/Star';
import { useCart } from '../CartContext';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Chip from '@mui/material/Chip';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'radial-gradient(1200px 500px at 20% -10%, rgba(255,184,0,0.35) 0%, rgba(255,184,0,0) 60%), radial-gradient(1200px 500px at 80% 110%, rgba(255,75,43,0.25) 0%, rgba(255,75,43,0) 60%), linear-gradient(180deg, #fffdf8 0%, #fff 100%)',
  minHeight: '72vh',
  display: 'flex',
  alignItems: 'center',
  color: '#222',
  textAlign: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const HowItWorksSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#fffdf8',
}));

const WhyChooseSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#fafafa',
}));

const SpecialFeaturesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f8f9fa',
}));

const FeaturedSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#fff',
}));

const CtaBand = styled(Box)(({ theme }) => ({
  margin: theme.spacing(8, 0),
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  background: 'linear-gradient(90deg, rgba(255,184,0,0.2) 0%, rgba(255,75,43,0.2) 100%)',
  border: `1px solid ${theme.palette.divider}`,
  textAlign: 'center',
}));

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState('');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedPizza, setSelectedPizza] = React.useState<any>(null);
  const [selectedToppings, setSelectedToppings] = React.useState<string[]>([]);

  const allToppings = [
    'Extra Cheese', 'Extra Basil', 'Extra Tomatoes', 'Extra Olive Oil',
    'Extra Mozzarella', 'Extra Cheddar', 'Extra Parmesan',
    'Extra Onions', 'Extra Capsicum', 'Extra Mushrooms', 'Extra Jalapeno',
    'Extra Paneer', 'Extra Corn', 'Extra Red Pepper', 'Extra Spices',
    'Extra Olives', 'Extra Makhani Sauce', 'Extra Butter', 'Extra BBQ Chicken',
    'Extra Peri-Peri Chicken', 'Extra Chicken Rashers', 'Extra Chicken Tikka',
    'Extra Peppers', 'Extra Herbs', 'Extra Mint Mayo', 'Extra Tandoori Spices',
    'Extra BBQ Sauce', 'Extra Mexican Herbs', 'Extra Tomatoes'
  ];

  const specialFeatures = [
    {
      title: '30-Minute Delivery',
      description: 'Hot & fresh pizzas delivered to your doorstep in just 30 minutes or free!',
      icon: '⚡',
      color: '#ff6b35'
    },
    {
      title: '100% Fresh Ingredients',
      description: 'We use only the freshest vegetables, premium cheese, and quality meats.',
      icon: '🥬',
      color: '#4caf50'
    },
    {
      title: 'Customize Your Pizza',
      description: 'Choose from 20+ toppings and create your perfect pizza combination.',
      icon: '🎨',
      color: '#9c27b0'
    }
  ];

  const handlePizzaClick = (pizza: any) => {
    setSelectedPizza(pizza);
    setSelectedToppings([]);
    setDialogOpen(true);
  };

  const handleToppingToggle = (topping: string) => {
    setSelectedToppings(prev =>
      prev.includes(topping)
        ? prev.filter(t => t !== topping)
        : [...prev, topping]
    );
  };

  const handleDialogAddToCart = () => {
    if (selectedPizza) {
      addToCart({
        id: selectedPizza.id,
        name: selectedPizza.name,
        size: 'Medium',
        quantity: 1,
        price: selectedPizza.price,
        toppings: selectedToppings,
      });
      setSnackbarMsg(`${selectedPizza.name} added to cart!`);
      setSnackbarOpen(true);
    }
    setDialogOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, color: '#1f1f1f' }}>
            Welcome to BakeBun
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary' }}>
            Delicious pizzas, delivered hot & fresh to your doorstep
          </Typography>
                     <Button
             variant="contained"
             color="primary"
             size="large"
             onClick={() => navigate('/menu')}
             sx={{ mt: 4, px: 6, py: 2, fontSize: '1.1rem', borderRadius: 999 }}
           >
             Order Now
           </Button>
        </Container>
      </HeroSection>

      <FeaturedSection>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Featured Favorites
          </Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {[
              { name: 'Farm House', price: 720, img: '/Farm House.webp' },
              { name: 'Mexican Green Wave', price: 750, img: '/Mexican Green Wave.webp' },
              { name: 'Chicken Dominator', price: 750, img: '/Chicken Dominator.webp' },
              { name: 'Veg Extravaganza', price: 750, img: '/Veg Extravaganza.webp' },
              { name: 'Pepper Barbecue Chicken', price: 750, img: '/Pepper Barbecue Chicken.webp' },
              { name: 'Paneer Makhani', price: 750, img: '/Paneer Makhani.webp' },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ overflow: 'hidden', borderRadius: 3 }}>
                  <CardMedia image={item.img} title={item.name} sx={{ height: 200 }} />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">Starting at ₹{item.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeaturedSection>

      <HowItWorksSection>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            How It Works
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <LocalPizzaIcon sx={{ fontSize: 48, color: '#ff9800' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>Choose Your Pizza</Typography>
                <Typography color="text.secondary">Browse our menu and pick your favorite pizza and sides.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <DeliveryDiningIcon sx={{ fontSize: 48, color: '#43a047' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>Fast Delivery</Typography>
                <Typography color="text.secondary">We deliver your order hot and fresh, right to your door.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <StarIcon sx={{ fontSize: 48, color: '#fbc02d' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>Enjoy & Rate Us</Typography>
                <Typography color="text.secondary">Enjoy your meal and let us know how we did!</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HowItWorksSection>

      <WhyChooseSection>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            Why Choose BakeBun?
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <img src="/pizza-icon.svg" alt="Quality" width={60} />
                <Typography variant="h6" sx={{ mt: 2 }}>Premium Ingredients</Typography>
                <Typography color="text.secondary">We use only the freshest and highest quality ingredients for every pizza.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <img src="/vite.svg" alt="Fast" width={60} />
                <Typography variant="h6" sx={{ mt: 2 }}>Lightning Fast</Typography>
                <Typography color="text.secondary">Our delivery is super quick so you never have to wait long for your meal.</Typography>
              </Box>
            </Grid>
                         <Grid item xs={12} sm={4}>
               <Box textAlign="center">
                 <Box 
                   sx={{ 
                     width: 60, 
                     height: 60, 
                     mx: 'auto',
                     mb: 2,
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     fontSize: '2.5rem',
                     color: '#ff6b35'
                   }}
                 >
                   🍕
                 </Box>
                 <Typography variant="h6" sx={{ mt: 2 }}>Great Variety</Typography>
                 <Typography color="text.secondary">From classic Margherita to spicy specials, we have something for everyone.</Typography>
               </Box>
             </Grid>
          </Grid>
        </Container>
      </WhyChooseSection>

      <SpecialFeaturesSection>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
            Why Choose BakeBun?
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {specialFeatures.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 4,
                      border: `2px solid ${feature.color}`,
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      fontSize: '3rem', 
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: feature.color }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SpecialFeaturesSection>

      <Container>
        <CtaBand>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Craving pizza now?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore our full menu and customize your perfect order.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 2, borderRadius: 999 }} onClick={() => navigate('/menu')}>
            Browse Menu
          </Button>
        </CtaBand>
      </Container>
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>Select Toppings for {selectedPizza?.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {allToppings.map((topping) => (
              <Chip
                key={topping}
                label={topping}
                onClick={() => handleToppingToggle(topping)}
                color={selectedToppings.includes(topping) ? "primary" : "default"}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant="outlined">Cancel</Button>
          <Button onClick={handleDialogAddToCart} variant="contained" color="primary">Add to Cart</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMsg}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default Home; 