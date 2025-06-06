import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hero-pizza.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
}));

const FeaturedSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f5f5f5',
}));

const Home = () => {
  const navigate = useNavigate();

  const featuredPizzas = [
    {
      id: 1,
      name: 'Margherita',
      image: '/placeholder.svg',
      price: '$12.99',
    },
    {
      id: 2,
      name: 'Pepperoni',
      image: '/placeholder.svg',
      price: '$14.99',
    },
    {
      id: 3,
      name: 'Vegetarian',
      image: '/placeholder.svg',
      price: '$13.99',
    },
  ];

  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to BakeBun
          </Typography>
          <Typography variant="h5" gutterBottom>
            Delicious pizzas delivered to your doorstep
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/menu')}
            sx={{ mt: 4 }}
          >
            Order Now
          </Button>
        </Container>
      </HeroSection>

      <FeaturedSection>
        <Container>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Featured Pizzas
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {featuredPizzas.map((pizza) => (
              <Grid item xs={12} sm={6} md={4} key={pizza.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pizza.image}
                    alt={pizza.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {pizza.name}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {pizza.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeaturedSection>
    </Box>
  );
};

export default Home; 