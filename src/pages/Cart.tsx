import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  IconButton,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const CartItem = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

interface CartItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  toppings: string[];
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Margherita',
      size: 'Medium',
      quantity: 2,
      price: 12.99,
      toppings: ['Extra Cheese', 'Mushrooms'],
    },
    {
      id: 2,
      name: 'Pepperoni',
      size: 'Large',
      quantity: 1,
      price: 14.99,
      toppings: ['Extra Cheese'],
    },
  ]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    setAlertMessage('Item removed from cart');
    setShowAlert(true);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1; // 10% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleCheckout = () => {
    const orderDetails = {
      items: cartItems,
      total: calculateTotal(),
      orderNumber: Math.floor(Math.random() * 1000000).toString(),
      date: new Date().toLocaleDateString(),
    };
    
    navigate('/receipt', { state: { orderDetails } });
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" color="text.secondary">
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => navigate('/menu')}
          >
            Browse Menu
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Size: {item.size}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Toppings: {item.toppings.join(', ')}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box display="flex" alignItems="center" justifyContent="flex-end">
                        <IconButton 
                          size="small"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Remove />
                        </IconButton>
                        <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                        <IconButton 
                          size="small"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Add />
                        </IconButton>
                        <Typography sx={{ mx: 2 }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                        <IconButton 
                          color="error"
                          onClick={() => removeItem(item.id)}
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </CartItem>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                <Box sx={{ my: 2 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography>Subtotal</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>${calculateSubtotal().toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography>Tax (10%)</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>${calculateTax().toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 2 }} />
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Total</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">${calculateTotal().toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{ mt: 2 }}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowAlert(false)} severity="success">
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Cart; 