
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
  Avatar,
  Chip,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  color: 'white',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.3,
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
    '& .icon-container': {
      transform: 'scale(1.1)',
      backgroundColor: theme.palette.primary.main,
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #ff6b35, #f7931e)',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease-in-out',
  fontSize: '2rem',
}));

const StatsSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)',
  padding: theme.spacing(8, 0),
  borderRadius: theme.spacing(2),
  margin: theme.spacing(4, 0),
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  textAlign: 'center',
  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
}));

const About = () => {
  const features = [
    {
      title: 'Fresh Ingredients',
      description: 'We use only the freshest ingredients sourced from local suppliers to ensure the best quality in every pizza.',
      icon: <RestaurantIcon sx={{ fontSize: '2rem' }} />,
      color: '#4caf50',
    },
    {
      title: 'Fast Delivery',
      description: 'Our delivery team ensures your pizza arrives hot and fresh within 30 minutes of ordering.',
      icon: <DeliveryDiningIcon sx={{ fontSize: '2rem' }} />,
      color: '#2196f3',
    },
    {
      title: 'Customization',
      description: 'Create your perfect pizza with our wide range of toppings and customization options.',
      icon: <LocalPizzaIcon sx={{ fontSize: '2rem' }} />,
      color: '#ff9800',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '30min', label: 'Average Delivery' },
    { number: '50+', label: 'Pizza Varieties' },
    { number: '24/7', label: 'Customer Support' },
  ];



  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, mb: 3 }}>
            🍕 About BakeBun
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto', mb: 4, opacity: 0.9 }}>
            Welcome to BakeBun, your favorite pizza delivery service. We are passionate about serving
            delicious, high-quality pizzas made with fresh ingredients and delivered right to your doorstep.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip label="Fresh Ingredients" color="primary" variant="filled" />
            <Chip label="Fast Delivery" color="primary" variant="filled" />
            <Chip label="Best Quality" color="primary" variant="filled" />
          </Box>
        </Container>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <StatsSection>
          <Container>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Our Numbers Speak
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box textAlign="center">
                    <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </StatsSection>

        <Box sx={{ my: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            Why Choose BakeBun?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} md={4}>
                <FeatureCard>
                  <IconContainer className="icon-container" sx={{ backgroundColor: `${feature.color}20`, color: feature.color }}>
                    {feature.icon}
                  </IconContainer>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ my: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            Our Story
          </Typography>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, background: 'linear-gradient(135deg, #fff5f5 0%, #fff 100%)' }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              BakeBun started with a simple mission: to serve the most delicious pizzas in town.
              Founded in 2025, we've grown from a small local pizzeria to a beloved delivery service
              known for our quality ingredients and exceptional customer service.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our team of experienced chefs takes pride in crafting each pizza with care,
              using traditional recipes and modern techniques to create the perfect balance
              of flavors in every bite.
            </Typography>
            
          </Paper>
        </Box>



        <Box sx={{ my: 8 }}>
          <ContactCard>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Get In Touch
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Have questions or feedback? We'd love to hear from you!
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">savanidaksh606@gmail.com</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">7862808466</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">Charusat, Changa, Anand, Gujarat</Typography>
                </Box>
              </Grid>
            </Grid>
          </ContactCard>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 