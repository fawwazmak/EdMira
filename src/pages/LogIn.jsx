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
  const [form, setForm] = React.useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [alert, setAlert] = React.useState({ show: false, message: '', severity: 'error' });

  // Updated glossy brand colors
  const colors = {
    darkTeal: '#043E4E',
    gold: '#F5C542',
    orange: '#F59E0B',
    warmBeige: '#E9DFBF',
    lightGray: '#F7F7F7',
    white: '#FFFFFF'
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(form.email)) newErrors.email = 'Enter a valid email';

    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'At least 6 characters';

    if (!isLogin) {
      if (!form.confirmPassword) newErrors.confirmPassword = 'Confirm your password';
      else if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setAlert({ show: false, message: '', severity: 'error' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (isLogin) handleLogin();
      else handleSignUp();
    } catch {
      setAlert({ show: true, message: 'An error occurred. Try again.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    setAlert({ show: true, message: 'Successfully logged in! Redirecting...', severity: 'success' });
    setTimeout(() => navigate('/'), 1000);
  };

  const handleSignUp = () => {
    setAlert({ show: true, message: 'Account created successfully! Check your email.', severity: 'success' });
    setForm({ email: '', password: '', confirmPassword: '' });
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
        background: `linear-gradient(135deg, ${colors.darkTeal} 0%, ${colors.gold}40 100%)`,
      }}
    >
      <Paper
        elevation={18}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 5,
          width: '100%',
          background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.lightGray} 100%)`,
          border: `1px solid ${colors.gold}40`,
          boxShadow: `0 20px 50px ${colors.darkTeal}30`,
          backdropFilter: 'blur(10px)'
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.gold} 50%, ${colors.darkTeal} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {isLogin ? 'Welcome Back to EdMira' : 'Join EdMira'}
          </Typography>
          <Typography color={colors.darkTeal} sx={{ opacity: 0.8 }}>
            {isLogin ? 'Sign in to continue your medical journey' : "Create your account to empower Africa's medical practitioners"}
          </Typography>
        </Box>

        {alert.show && (
          <Alert
            severity={alert.severity}
            sx={{
              mb: 3,
              borderRadius: 2,
              bgcolor: alert.severity === 'success' ? `${colors.gold}15` : undefined,
              color: colors.darkTeal
            }}
          >
            {alert.message}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={3}>
            {/* Email */}
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              value={form.email}
              onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
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
                  '&:hover fieldset': { borderColor: colors.gold },
                  '&.Mui-focused fieldset': { borderColor: colors.orange },
                },
                '& .MuiInputLabel-root.Mui-focused': { color: colors.orange },
              }}
            />

            {/* Password */}
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              required
              value={form.password}
              onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
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
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            {/* Confirm Password */}
            {!isLogin && (
              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                required
                value={form.confirmPassword}
                onChange={(e) => setForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
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
                      <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.5,
                mt: 2,
                borderRadius: 3,
                fontWeight: 'bold',
                background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.gold} 100%)`,
                boxShadow: `0 8px 25px ${colors.orange}50`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: `linear-gradient(135deg, ${colors.darkTeal} 0%, ${colors.gold} 100%)`,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: colors.white }} /> : isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </Box>
        </form>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color={colors.darkTeal} sx={{ opacity: 0.8 }}>
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <Link
                  component="button"
                  onClick={() => navigate('/signup')}
                  sx={{ color: colors.orange, fontWeight: 'bold', '&:hover': { color: colors.darkTeal } }}
                >
                  Sign up here
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link
                  component="button"
                  onClick={() => navigate('/login')}
                  sx={{ color: colors.orange, fontWeight: 'bold', '&:hover': { color: colors.darkTeal } }}
                >
                  Sign in here
                </Link>
              </>
            )}
          </Typography>

          {isLogin && (
            <Typography variant="body2" mt={1}>
              <Link sx={{ color: colors.gold, '&:hover': { color: colors.orange } }}>
                Forgot your password?
              </Link>
            </Typography>
          )}
        </Box>

        <Box textAlign="center" mt={4} pt={3} borderTop={`1px solid ${colors.lightGray}`}>
          <Typography variant="caption" sx={{ color: colors.warmBeige, opacity: 0.8 }}>
            Empowering Africa's Medical Practitioners
          </Typography>
        </Box>
      </Paper>

      <Outlet />
    </Container>
  );
};

export default LogIn;
