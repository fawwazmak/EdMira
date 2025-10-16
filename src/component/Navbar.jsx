import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Forum", id: "forum" },
    { name: "News Feed", id: "news" }
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const scrollWithOffset = (el) => {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-[#FDFDFD] shadow-md z-50 flex items-center justify-between px-6 md:px-12 h-20">
        {/* Logo */}
        <HashLink to="/#home" >
          <motion.img
            src="/Logo1.jpg"
            alt="EdMira Logo"
            className="h-14 w-14 object-cover rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate('/')}
          />
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[#082E39] font-medium">
          {navItems.map((item) => (
            <HashLink
              key={item.id}
              to={`/#${item.id}`}
              scroll={scrollWithOffset}
              className="hover:text-[#CBA244] transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </HashLink>
          ))}

          <div className="flex md:flex-row gap-2 flex-col">
            <Button
              variant="outlined"
              onClick={handleLoginClick}
              sx={{
                textTransform: "none",
                borderRadius: "1rem",
                borderColor: "#CBA244",
                color: "#082E39",
                "&:hover": {
                  backgroundColor: "#CBA244",
                  color: "#FDFDFD",
                },
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              onClick={handleSignUpClick} // Fixed: was calling handleLoginClick
              sx={{
                textTransform: "none",
                borderRadius: "1rem",
                backgroundColor: "#D98021",
                color: "#FDFDFD",
                "&:hover": { backgroundColor: "#CBA244" },
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <CloseIcon
              className="cursor-pointer text-[#082E39] text-3xl"
              onClick={toggleMenu}
            />
          ) : (
            <MenuIcon
              className="cursor-pointer text-[#082E39] text-3xl"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Spacer to prevent content from going behind navbar */}
      <div className="h-20"></div>

      {/* Mobile Menu Overlay - Fixed positioning with proper constraints */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-20 left-0 right-0 bottom-0 bg-[#FDFDFD] flex flex-col items-center justify-center space-y-8 z-40 overflow-hidden"
          >
            {navItems.map((item) => (
              <HashLink
                key={item.id}
                to={`/#${item.id}`}
                scroll={scrollWithOffset}
                className="text-xl font-medium text-[#082E39] hover:text-[#CBA244] transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                {item.name}
              </HashLink>
            ))}

            <div className="flex flex-col gap-4 mt-6">
              <Button
                variant="outlined"
                onClick={() => {
                  toggleMenu();
                  handleLoginClick();
                }}
                sx={{
                  textTransform: "none",
                  borderRadius: "1rem",
                  borderColor: "#CBA244",
                  color: "#082E39",
                  "&:hover": {
                    backgroundColor: "#CBA244",
                    color: "#FDFDFD",
                  },
                }}
              >
                Login
              </Button>

              <Button
                variant="contained"
                onClick={() => {
                  toggleMenu();
                  handleSignUpClick();
                }}
                sx={{
                  textTransform: "none",
                  borderRadius: "1rem",
                  backgroundColor: "#D98021",
                  color: "#FDFDFD",
                  "&:hover": { backgroundColor: "#CBA244" },
                }}
              >
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;