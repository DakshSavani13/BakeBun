import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const offers = [
  {
    id: 1,
    title: 'Weekend Special',
    description: 'Get 20% off on all pastries this weekend!',
    image: '/images/weekend-special.jpg',
    validUntil: '2024-03-10',
  },
  {
    id: 2,
    title: 'Birthday Treat',
    description: 'Free cupcake on your birthday!',
    image: '/images/birthday-cake.jpg',
    validUntil: '2024-12-31',
  },
  {
    id: 3,
    title: 'Bulk Order Discount',
    description: 'Order 12 or more items and get 15% off!',
    image: '/images/bulk-order.jpg',
    validUntil: '2024-12-31',
  },
  {
    id: 4,
    title: 'Morning Special',
    description: 'Buy any coffee and get a free croissant!',
    image: '/images/morning-special.jpg',
    validUntil: '2024-12-31',
  },
];

const Offers = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Special Offers
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Check out our current promotions and special deals
      </Typography>

      <Grid container spacing={3}>
        {offers.map((offer) => (
          <Grid item xs={12} sm={6} md={4} key={offer.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={offer.image}
                alt={offer.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {offer.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {offer.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Valid until: {new Date(offer.validUntil).toLocaleDateString()}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Offers; 