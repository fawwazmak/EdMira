import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Auth from './component/Auth';
import './App.css'
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function AppContent() {
  const location = useLocation();
  
  // Define routes where Navbar and Footer should NOT show
  const hideNavbarFooterRoutes = ['/login', '/signup'];
  const shouldShowNavbarFooter = !hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbarFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Auth key="login" />} />
        <Route path="/signup" element={<Auth key="signup" />} />
      </Routes>
      
      {shouldShowNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;