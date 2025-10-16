import React from 'react';
import { 
  TextField, 
  Button, 
  CircularProgress, 
  Box,
  Typography,
  Container,
  Paper,
  Alert,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';

const LogIn = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(window.location.pathname === '/login');
  const [form, setForm] = React.useState({ 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [alert, setAlert] = React.useState({ show: false, message: '', severity: 'error' });

  // EdMira Brand Colors
  const colors = {
    darkTeal: '#082E39',
    gold: '#CBA244',
    orange: '#D98021',
    warmBeige: '#C7BC9A',
    lightGray: '#F0F0EF',
    white: '#FDFDFD'
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation for signup
    if (!isLogin) {
      if (!form.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setAlert({ show: false, message: '', severity: 'error' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (isLogin) {
        handleLogin();
      } else {
        handleSignUp();
      }
    } catch (error) {
      setAlert({
        show: true,
        message: 'An error occurred. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    // For demo purposes - in real app, this would be an API call
    setAlert({
      show: true,
      message: 'Successfully logged in! Redirecting...',
      severity: 'success'
    });
    
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleSignUp = () => {
    // For demo purposes - in real app, this would be an API call
    setAlert({
      show: true,
      message: 'Account created successfully! Please check your email for verification.',
      severity: 'success'
    });
    
    // Reset form after successful signup
    setForm({ email: '', password: '', confirmPassword: '' });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Container 
      component="main" 
      maxWidth="sm" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        background: `linear-gradient(135deg, ${colors.darkTeal} 0%, ${colors.darkTeal}E6 100%)`
      }}
    >
      <Paper
        elevation={16}
        sx={{
          padding: { xs: 4, md: 6 },
          borderRadius: 4,
          width: '100%',
          background: colors.white,
          border: `2px solid ${colors.gold}20`,
          boxShadow: `0 20px 40px ${colors.darkTeal}40`
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography 
            variant="h4" 
            component="h1" 
            fontWeight="bold" 
            color={colors.darkTeal}
            gutterBottom
            sx={{ 
              fontSize: { xs: '1.75rem', md: '2.125rem' },
              background: `linear-gradient(135deg, ${colors.darkTeal} 0%, ${colors.orange} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {isLogin ? "Welcome Back to EdMira" : "Join EdMira"}
          </Typography>
          <Typography variant="body1" color={colors.darkTeal} sx={{ opacity: 0.8 }}>
            {isLogin 
              ? "Sign in to continue your medical journey" 
              : "Create your account to empower Africa's medical practitioners"
            }
          </Typography>
        </Box>

        {/* Alert */}
        {alert.show && (
          <Alert 
            severity={alert.severity} 
            sx={{ 
              mb: 3,
              borderRadius: 2,
              backgroundColor: alert.severity === 'success' ? `${colors.gold}15` : undefined,
              color: colors.darkTeal
            }}
          >
            {alert.message}
          </Alert>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Email Field */}
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              value={form.email}
              onChange={(e) => handleFormChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: colors.gold }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover fieldset': {
                    borderColor: colors.gold,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.orange,
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.orange,
                }
              }}
            />

            {/* Password Field */}
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              required
              value={form.password}
              onChange={(e) => handleFormChange('password', e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: colors.gold }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                      sx={{ color: colors.darkTeal }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover fieldset': {
                    borderColor: colors.gold,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.orange,
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.orange,
                }
              }}
            />

            {/* Confirm Password Field (Signup only) */}
            {!isLogin && (
              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                required
                value={form.confirmPassword}
                onChange={(e) => handleFormChange('confirmPassword', e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: colors.gold }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleToggleConfirmPassword}
                        edge="end"
                        sx={{ color: colors.darkTeal }}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': {
                      borderColor: colors.gold,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.orange,
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: colors.orange,
                  }
                }}
              />
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textTransform: 'none',
                mt: 2,
                background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.gold} 100%)`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${colors.darkTeal} 0%, ${colors.orange} 100%)`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 25px ${colors.orange}40`
                },
                '&:disabled': {
                  background: colors.warmBeige,
                },
                transition: 'all 0.3s ease'
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: colors.white }} />
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </Button>
          </Box>
        </form>

        {/* Footer Links */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" sx={{ color: colors.darkTeal, opacity: 0.8 }}>
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <Link 
                  component="button" 
                  type="button"
                  variant="body2" 
                  onClick={() => navigate('/signup')}
                  sx={{ 
                    fontWeight: 'bold', 
                    textDecoration: 'none',
                    color: colors.orange,
                    '&:hover': {
                      color: colors.darkTeal,
                    }
                  }}
                >
                  Sign up here
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link 
                  component="button" 
                  type="button"
                  variant="body2" 
                  onClick={() => navigate('/login')}
                  sx={{ 
                    fontWeight: 'bold', 
                    textDecoration: 'none',
                    color: colors.orange,
                    '&:hover': {
                      color: colors.darkTeal,
                    }
                  }}
                >
                  Sign in here
                </Link>
              </>
            )}
          </Typography>
          
          {/* Forgot Password Link */}
          {isLogin && (
            <Typography variant="body2" mt={1}>
              <Link 
                component="button" 
                type="button"
                variant="body2"
                sx={{ 
                  textDecoration: 'none',
                  color: colors.gold,
                  '&:hover': {
                    color: colors.orange,
                  }
                }}
              >
                Forgot your password?
              </Link>
            </Typography>
          )}
        </Box>

        {/* Brand Footer */}
        <Box textAlign="center" mt={4} pt={3} borderTop={`1px solid ${colors.lightGray}`}>
          <Typography variant="caption" sx={{ color: colors.warmBeige, opacity: 0.7 }}>
            Empowering Africa's Medical Practitioners
          </Typography>
        </Box>
      </Paper>

      <Outlet />
    </Container>
  );
};

export default LogIn;