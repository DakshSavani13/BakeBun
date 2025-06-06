import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const MenuItem = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const Menu = () => {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
      image: '/placeholder.svg',
      price: 12.99,
      sizes: ['Small', 'Medium', 'Large'],
      toppings: ['Extra Cheese', 'Mushrooms', 'Peppers', 'Onions'],
    },
    {
      id: 2,
      name: 'Pepperoni',
      description: 'Classic pepperoni with mozzarella and tomato sauce',
      image: '/placeholder.svg',
      price: 14.99,
      sizes: ['Small', 'Medium', 'Large'],
      toppings: ['Extra Cheese', 'Mushrooms', 'Peppers', 'Onions'],
    },
    {
      id: 3,
      name: 'Vegetarian',
      description: 'Bell peppers, mushrooms, onions, olives, and tomatoes',
      image: '/placeholder.svg',
      price: 13.99,
      sizes: ['Small', 'Medium', 'Large'],
      toppings: ['Extra Cheese', 'Mushrooms', 'Peppers', 'Onions'],
    },
    // Add more pizzas as needed
  ];

  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPizza(null);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    handleCloseDialog();
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Our Menu
      </Typography>
      <Grid container spacing={4}>
        {pizzas.map((pizza) => (
          <Grid item key={pizza.id} xs={12} sm={6} md={4}>
            <MenuItem onClick={() => handlePizzaClick(pizza)}>
              <CardMedia
                component="img"
                height="200"
                image={pizza.image}
                alt={pizza.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pizza.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {pizza.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${pizza.price}
                </Typography>
              </CardContent>
            </MenuItem>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        {selectedPizza && (
          <>
            <DialogTitle>{selectedPizza.name}</DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <FormControl component="fieldset">
                  <FormLabel>Size</FormLabel>
                  <RadioGroup row>
                    {selectedPizza.sizes.map((size) => (
                      <FormControlLabel
                        key={size}
                        value={size}
                        control={<Radio />}
                        label={size}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Extra Toppings
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedPizza.toppings.map((topping) => (
                    <Chip
                      key={topping}
                      label={topping}
                      onClick={() => {}}
                      sx={{ m: 0.5 }}
                    />
                  ))}
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleAddToCart} variant="contained" color="primary">
                Add to Cart
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Menu; 