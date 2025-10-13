import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    // const teamMembers = [
    //     {
    //     name: "Jamiu Sanni",
    //     title: "Founder, EdMira",
    //     color: "#CBA244",
    //     bgGradient:
    //         "linear-gradient(145deg, rgba(203, 162, 68, 0.15) 0%, rgba(217, 128, 33, 0.1) 100%)",
    //     border: "2px solid rgba(203, 162, 68, 0.3)",
    //     avatarBg: "linear-gradient(135deg, #CBA244 0%, #D98021 100%)",
    //     boxShadow: "0 8px 30px rgba(203, 162, 68, 0.5)",
    //     },
    //     {
    //     name: "Rasheedah Dada",
    //     title: "Co-Founder, EdMira",
    //     color: "#D98021",
    //     bgGradient:
    //         "linear-gradient(145deg, rgba(217, 128, 33, 0.15) 0%, rgba(203, 162, 68, 0.1) 100%)",
    //     border: "2px solid rgba(217, 128, 33, 0.3)",
    //     avatarBg: "linear-gradient(135deg, #D98021 0%, #CBA244 100%)",
    //     boxShadow: "0 8px 30px rgba(217, 128, 33, 0.5)",
    //     },
    // ];


  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8032877945", "_blank");
  };
  return (
    <div>
        <div className="fixed top-0 left-0 w-full bg-[#FDFDFD] shadow-md z-50 flex items-center justify-between px-6 md:px-12 h-20">
            {/* Logo */}
          <motion.img
            src="/Logo1.jpg"
            alt="EdMira Logo"
            className="h-14 w-14 object-cover rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-[#082E39] font-medium">
            {["Home", "About", "Forum", "News Feed"].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-[#CBA244] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}

            <div className="flex md:flex-row gap-2 flex-col">
              {/* Login Button */}
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

              {/* Sign Up Button */}
              <Button
                variant="contained"
                onClick={handleLoginClick}
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

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
        {menuOpen && (
            <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-20 inset-0 bg-[#FDFDFD] flex flex-col items-center justify-center space-y-8 z-40"
            >
            {["Home", "About", "Forum", "News Feed"].map((item) => (
                <Link
                key={item}
                href="#"
                className="text-xl font-medium text-[#082E39] hover:text-[#CBA244] transition-colors duration-300"
                onClick={toggleMenu}
                >
                {item}
                </Link>
            ))}

            <div className="flex flex-col gap-4 mt-6">
                <Button
                variant="outlined"
                onClick={handleLoginClick}
                sx={{
                width: "60%",
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
                onClick={handleLoginClick}
                sx={{
                    width: "60%",
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
  )
}

export default Navbar
