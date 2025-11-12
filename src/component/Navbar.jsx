import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const colors = {
  primaryBlue: "#00084A",
  lightBlue: "#3DBEFF",
  accentGreen: "#3EE6A5",
  white: "#FDFDFD"
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Forum", id: "forum" },
    { name: "News Feed", id: "news" }
  ];

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleLoginClick = () => navigate("/login");
  const handleSignUpClick = () => navigate("/signup");

  const scrollWithOffset = (el) => {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="relative font-[Codec]">
      {/* Fixed Navbar */}
      <div
        className="fixed top-0 left-0 w-full shadow-md z-50 flex items-center justify-between px-6 md:px-12 h-20"
        style={{
          background: `linear-gradient(90deg, ${colors.white} 0%, #F8FCFF 100%)`,
        }}
      >
        {/* Logo */}
        <HashLink to="/#home">
          <motion.img
            src="/logo-dark-blue.png"
            alt="EdMira Logo"
            className="h-32 w-32 object-cover rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/")}
          />
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[#00084A] font-medium">
          {navItems.map((item) => (
            <HashLink
              key={item.id}
              to={`/#${item.id}`}
              scroll={scrollWithOffset}
              className="relative transition-all duration-300 cursor-pointer group"
            >
              <span className="text-[#00084A] group-hover:text-[#3DBEFF]">
                {item.name}
              </span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3EE6A5] group-hover:w-full transition-all duration-300"></span>
            </HashLink>
          ))}

          <div className="flex md:flex-row gap-2 flex-col">
            <Button
              variant="outlined"
              onClick={handleLoginClick}
              sx={{
                textTransform: "none",
                borderRadius: "1rem",
                borderColor: colors.lightBlue,
                color: colors.primaryBlue,
                fontWeight: 500,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: colors.lightBlue,
                  color: colors.white,
                  transform: "scale(1.05)"
                }
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              onClick={handleSignUpClick}
              sx={{
                textTransform: "none",
                borderRadius: "1rem",
                background: `linear-gradient(90deg, ${colors.lightBlue} 0%, ${colors.accentGreen} 100%)`,
                color: colors.white,
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: `linear-gradient(90deg, ${colors.primaryBlue} 0%, ${colors.lightBlue} 100%)`,
                  transform: "scale(1.05)"
                }
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
              className="cursor-pointer text-[#00084A] text-3xl"
              onClick={toggleMenu}
            />
          ) : (
            <MenuIcon
              className="cursor-pointer text-[#00084A] text-3xl"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-20 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-8 z-40 overflow-hidden"
            style={{ backgroundColor: colors.white }}
          >
            {navItems.map((item) => (
              <HashLink
                key={item.id}
                to={`/#${item.id}`}
                scroll={scrollWithOffset}
                className="text-xl font-medium text-[#00084A] hover:text-[#3DBEFF] transition-colors duration-300 cursor-pointer"
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
                  borderColor: colors.lightBlue,
                  color: colors.primaryBlue,
                  "&:hover": {
                    backgroundColor: colors.lightBlue,
                    color: colors.white
                  }
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
                  background: `linear-gradient(90deg, ${colors.lightBlue} 0%, ${colors.accentGreen} 100%)`,
                  color: colors.white,
                  "&:hover": {
                    background: `linear-gradient(90deg, ${colors.primaryBlue} 0%, ${colors.lightBlue} 100%)`
                  }
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
