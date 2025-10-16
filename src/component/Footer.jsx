import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { RiWhatsappLine, RiLinkedinFill, RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import { FaFacebookF, FaArrowRight, FaSpinner, FaCheckCircle } from "react-icons/fa";

const Footer = () => {
  const [state, handleSubmit] = useForm("xnnglgvv");
  const [email, setEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Check local storage for existing email
    const existingEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
    if (existingEmails.includes(email)) {
      alert("This email is already subscribed!");
      return;
    }

    try {
      // Submit to Formspree
      await handleSubmit(e);
      
      // If submission was successful, clear the input and update local storage
      if (state.succeeded) {
        existingEmails.push(email);
        localStorage.setItem("subscribedEmails", JSON.stringify(existingEmails));
        setEmail(''); // Clear the input field
        setShowSuccessModal(true); // Show success modal
      }
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  // Reset email when submission succeeds
  React.useEffect(() => {
    if (state.succeeded) {
      setEmail('');
    }
  }, [state.succeeded]);

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSuccessModal();
    }
  };

  return (
    <footer className="bg-[#082E39] text-[#FDFDFD] py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center md:gap-0 gap-10">
        {/* Logo & Tagline */}
        <section className="flex flex-col md:w-fit w-full md:items-start items-center space-y-4">
          <img
            src="/Logo1.jpg"
            alt="Logo"
            className="rounded-full h-20 w-20 border-2 border-[#CBA244]"
          />
          <p className="text-sm text-[#C7BC9A] sm:text-start text-center font-medium">
            Empowering Africa's Medical practicioners
          </p>
        </section>

        {/* Navigation Links */}
        <section className="flex flex-col space-y-3 md:w-fit w-full md:items-start items-center">
          <h3 className="text-lg font-semibold text-[#CBA244]">Quick Links</h3>
          <Link to="/" className="hover:text-[#D98021] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#D98021] transition-colors">About</Link>
          <Link to="/forum" className="hover:text-[#D98021] transition-colors">Forum</Link>
          <Link to="/news" className="hover:text-[#D98021] transition-colors">News Feed</Link>
          <Link to="/privacy" className="hover:text-[#D98021] transition-colors">Privacy</Link>
        </section>

        {/* Contact & Subscribe */}
        <section className="space-y-5 flex flex-col md:w-fit w-full md:items-start items-center">
          <h3 className="text-lg font-semibold text-[#CBA244]">Get In Touch</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={() => window.open("https://wa.me/+2348032877945", "_blank")}
              className="bg-gradient-to-r from-[#D98021] to-[#CBA244] text-[#082E39] font-semibold px-5 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Chat on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "mailto:edmiraltd@gmail.com")}
              className="border border-[#CBA244] text-[#CBA244] font-semibold px-5 py-3 rounded-full hover:bg-[#CBA244] hover:text-[#082E39] transition-all"
            >
              Chat via Email
            </button>
          </div>

          {/* Subscribe Section */}
          <div className="mt-4">
            <h4 className="text-lg md:text-start text-center font-semibold text-[#CBA244] mb-3">
              Subscribe
            </h4>
            <form onSubmit={handleSubscribe} className="flex flex-row items-center bg-[#F0F0EF] rounded-full mx-w-full">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-2 text-[#082E39] focus:outline-none rounded-l-full"
              />
              <ValidationError 
                prefix="Email" 
                field="email" 
                errors={state.errors} 
              />

              {/* Desktop Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-[#D98021] cursor-pointer md:flex hidden items-center justify-center text-[#FDFDFD] px-5 py-2 rounded-r-full hover:bg-[#CBA244] transition-colors min-w-[100px] disabled:opacity-50"
              >
                {state.submitting ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </button>

              {/* Mobile Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-[#D98021] cursor-pointer md:hidden flex items-center justify-center text-[#FDFDFD] px-5 py-3 rounded-r-full hover:bg-[#CBA244] transition-colors min-w-[50px] disabled:opacity-50"
              >
                {state.submitting ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  <FaArrowRight />
                )}
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold text-[#CBA244] md:text-start text-center">
              Follow Us
            </h3>
            <div className="flex md:space-x-5 space-x-2 md:justify-start justify-center flex-wrap text-2xl mt-4">
              <RiWhatsappLine
                className="hover:text-[#25D366] transition-transform transform hover:scale-110 cursor-pointer bg-[#25D366]/10 p-3 text-5xl hover:translate-y-[-2px] duration-700 rounded-full"
                onClick={() => window.open("https://wa.me/+2348032877945", "_blank")}
              />
              <RiLinkedinFill
                className="hover:text-[#0077B5] transition-transform transform hover:scale-110 cursor-pointer bg-[#0077B5]/10 p-3 text-5xl hover:translate-y-[-2px] duration-700 rounded-full"
                onClick={() => window.open("https://www.linkedin.com/in/edmiragroup", "_blank")}
              />
              <RiTwitterXLine
                className="hover:text-gray-300 transition-transform transform hover:scale-110 cursor-pointer bg-gray-300/10 p-3 text-5xl hover:translate-y-[-2px] duration-700 rounded-full"
                onClick={() => window.open("https://x.com/edmira_group", "_blank")}
              />
              <RiInstagramLine
                className="hover:text-[#E4405F] transition-transform transform hover:scale-110 cursor-pointer bg-[#E4405F]/10 p-3 text-5xl hover:translate-y-[-2px] duration-700 rounded-full"
                onClick={() => window.open("https://www.instagram.com/edmira_group", "_blank")}
              />
              <FaFacebookF
                className="hover:text-[#1877F2] transition-transform transform hover:scale-110 cursor-pointer bg-[#1877F2]/10 p-3 text-5xl hover:translate-y-[-2px] duration-700 rounded-full"
                onClick={() => window.open("https://web.facebook.com/profile.php?id=61581985767152", "_blank")}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer bottom text */}
      <div className="mt-10 border-t border-[#CBA244]/30 pt-6 text-center text-sm text-[#C7BC9A]">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#CBA244] font-semibold">EdMira</span>. All rights reserved.
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#082E39] to-[#CBA244] rounded-t-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Subscription Successful!</h2>
                <button
                  onClick={closeSuccessModal}
                  className="text-white hover:text-gray-200 transition-colors text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 rounded-full p-4">
                  <FaCheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              
              <div className="space-y-4 text-center">
                <p className="text-gray-700 text-lg font-medium">
                  Welcome to the EdMira Community! 🎉
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thank you for subscribing! You'll now receive curated updates from EdMira's mission to empower Africa's Future Medical Practitioners.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                  <p className="text-green-800 text-sm font-medium">
                    What to expect:
                  </p>
                  <ul className="text-green-700 text-sm mt-2 space-y-1 text-left">
                    <li>• Latest medical insights and updates</li>
                    <li>• Platform development progress</li>
                    <li>• Exclusive early access opportunities</li>
                    <li>• Community announcements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={closeSuccessModal}
                  className="bg-gradient-to-r from-[#D98021] to-[#CBA244] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Continue Exploring
                </button>
                
                <button
                  onClick={() => {
                    closeSuccessModal();
                    // Scroll to social media section
                    setTimeout(() => {
                      const socialSection = document.querySelector('footer');
                      if (socialSection) {
                        socialSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="border border-[#CBA244] text-[#CBA244] font-semibold py-3 px-6 rounded-full hover:bg-[#CBA244] hover:text-white transition-all"
                >
                  Follow Us on Social Media
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;