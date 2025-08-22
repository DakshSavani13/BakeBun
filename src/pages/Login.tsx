import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Mock user
  const mockUser = {
    email: 'user@example.com',
    password: 'password123'
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    try {
      const res = await axios.post('http://localhost:4000/api/login', { email, password });
      localStorage.setItem('mockUser', JSON.stringify(res.data.user));
      setTimeout(() => {
        navigate('/');
      }, 1000);
      alert('Login successful!');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(s => !s)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mb: 2 }}>
            <Button color="primary" size="small" sx={{ textTransform: 'none', fontWeight: 500, p: 0, minWidth: 0 }}>
              Forgot Password?
            </Button>
          </Box>
          {error && (
            <Typography color="error" sx={{ mt: 1, mb: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, fontWeight: 700, borderRadius: 2, py: 1, fontSize: '1rem', boxShadow: 3 }}
          >
            Login
          </Button>
        </Box>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Don’t have an account?{' '}
            <Button component={RouterLink} to="/signup" color="primary" size="small" sx={{ textTransform: 'none', p: 0, minWidth: 0 }}>
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login; 