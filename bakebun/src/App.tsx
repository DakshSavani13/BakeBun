import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { CartProvider } from './CartContext';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import Receipt from './pages/Receipt';
import Offers from './pages/Offers';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminOrders from './pages/AdminOrders';
import AdminLayout from './components/AdminLayout';
import AdminGuard from './components/AdminGuard';
import Footer from './components/Footer';

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#FF4B2B' },
    secondary: { main: '#FFB800' },
    background: { default: '#fffdf8', paper: '#ffffff' },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, rgba(255,75,43,0.9) 0%, rgba(255,184,0,0.9) 100%)',
          backdropFilter: 'saturate(180%) blur(10px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation3: {
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
        },
        containedPrimary: {
          boxShadow: '0 8px 24px rgba(255,75,43,0.3)'
        }
      }
    }
  }
});

const theme = deepmerge(baseTheme, {});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <AdminGuard>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </AdminGuard>
            } />
            <Route path="/admin/users" element={
              <AdminGuard>
                <AdminLayout>
                  <AdminUsers />
                </AdminLayout>
              </AdminGuard>
            } />
            <Route path="/admin/orders" element={
              <AdminGuard>
                <AdminLayout>
                  <AdminOrders />
                </AdminLayout>
              </AdminGuard>
            } />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App; 