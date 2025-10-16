import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import DevelopmentPopup from '../DevelopmentModal'; 

const HeroSection = () => {
    const navigate = useNavigate();
    const [showDevPopup, setShowDevPopup] = useState(false);

    const handleGetStartedClick = () => {
        setShowDevPopup(true);
    };

    const handleClosePopup = () => {
        setShowDevPopup(false);
    };
    
  return (
    <>
      <section id="home" className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-gradient-to-r from-[#F0F0EF] via-[#FDFDFD] to-[#C7BC9A] overflow-hidden">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left space-y-6 z-10">
          <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="sm:text-3xl text-xl md:text-6xl font-bold leading-tight text-[#082E39]"
          >
              Empowering <span className="text-[#CBA244]">Africa's Future Medical Practitioners</span>
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[#082E39]/80 text-lg md:text-xl max-w-xl mx-auto md:mx-0"
          >
              Learn, discuss, and excel with interactive lessons, peer forums, and curated medical updates.
          </motion.p>

          {/* Call to Action Buttons */}
          <aside className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
              {/* Get Started */}
              <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              >
              <Button
                  variant="contained"
                  onClick={handleGetStartedClick}
                  sx={{
                  px: 4,
                  py: 1.2,
                  fontSize: "1rem",
                  textTransform: "none",
                  borderRadius: "2rem",
                  backgroundColor: "#D98021",
                  color: "#FDFDFD",
                  "&:hover": { backgroundColor: "#CBA244" },
                  boxShadow: "0 6px 16px rgba(8, 46, 57, 0.25)",
                  }}
              >
                  Get Started
              </Button>
              </motion.div>

              {/* Download App */}
              <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              >
              <Button
                  variant="outlined"
                  onClick={() => setShowDevPopup(true)}
                  sx={{
                  px: 4,
                  py: 1.2,
                  fontSize: "1rem",
                  textTransform: "none",
                  borderRadius: "2rem",
                  color: "#082E39",
                  borderColor: "#CBA244",
                  "&:hover": {
                      backgroundColor: "#CBA244",
                      color: "#FDFDFD",
                  },
                  }}
                  startIcon={<i className="fa-brands fa-apple text-xl"></i>}
                  endIcon={<i className="fa-brands fa-android text-xl"></i>}
              >
                  Download App
              </Button>
              </motion.div>
          </aside>
          </div>

          {/* Right Side Image */}
          <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          className="flex-1 mt-10 md:mt-0 flex justify-center"
          >
          <img
              src="/heroImage.webp"
              alt="Medical Education Illustration"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl object-cover border-4 border-[#F0F0EF]"
          />
          </motion.div>

          {/* Decorative Glow Elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#CBA244] opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#082E39] opacity-25 blur-3xl rounded-full"></div>
      </section>

      {/* Development Popup */}
      <DevelopmentPopup 
        open={showDevPopup} 
        onClose={handleClosePopup} 
      />
    </>
  )
}

export default HeroSection