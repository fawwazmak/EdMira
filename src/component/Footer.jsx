import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { RiWhatsappLine, RiLinkedinFill, RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import { FaFacebookF, FaArrowRight, FaSpinner, FaCheckCircle } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const [state, handleSubmit] = useForm("xnnglgvv");
  const [email, setEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const existingEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
    if (existingEmails.includes(email)) {
      alert("This email is already subscribed!");
      return;
    }

    try {
      await handleSubmit(e);
      if (state.succeeded) {
        existingEmails.push(email);
        localStorage.setItem("subscribedEmails", JSON.stringify(existingEmails));
        setEmail('');
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  React.useEffect(() => {
    if (state.succeeded) {
      setEmail('');
    }
  }, [state.succeeded]);

  const closeSuccessModal = () => setShowSuccessModal(false);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) closeSuccessModal();
  };

  const scrollWithOffset = (el) => {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const colors = {
    primaryBlue: '#00084A',
    lightBlue: '#3DBEFF',
    accentGreen: '#3EE6A5',
  };

  return (
    <footer className={`bg-[#00084A] text-white py-12 px-6 md:px-16`}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-10">
        {/* Logo & Tagline */}
        <section className="flex flex-col md:w-fit w-full md:items-start items-center space-y-4">
          <img
            src="/logo-white.png"
            alt="Logo"
            className={`h-32 w-32 `}
          />
          <p className="text-sm text-gray-300 sm:text-start text-center font-medium">
            Empowering Africa's Medical Practitioners
          </p>
        </section>

        {/* Navigation Links */}
        <section className="flex flex-col space-y-3 md:w-fit w-full md:items-start items-center">
          <h3 className={`text-lg font-semibold text-[${colors.accentGreen}]`}>Quick Links</h3>
          {['home', 'about', 'forum'].map((link) => (
            <HashLink
              key={link}
              to={`/#${link}`}
              scroll={scrollWithOffset}
              className={`hover:text-[${colors.lightBlue}] transition-colors`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </HashLink>
          ))}
          <HashLink to="/#" scroll={scrollWithOffset} className={`hover:text-[${colors.lightBlue}] transition-colors`}>News Feed</HashLink>
          <HashLink to="/#" scroll={scrollWithOffset} className={`hover:text-[${colors.lightBlue}] transition-colors`}>Privacy</HashLink>
        </section>

        {/* Contact & Subscribe */}
        <section className="space-y-5 flex flex-col md:w-fit w-full md:items-start items-center">
          <h3 className={`text-lg font-semibold text-[${colors.accentGreen}]`}>Get In Touch</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={() => window.open("https://wa.me/+2348032877945", "_blank")}
              className={`border border-[${colors.accentGreen}] text-[${colors.accentGreen}] font-semibold px-5 py-3 rounded-full hover:bg-[${colors.accentGreen}] hover:text-[${colors.primaryBlue}] transition-all`}>
              Chat on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "mailto:edmiraltd@gmail.com")}
              className={`border border-[${colors.accentGreen}] text-[${colors.accentGreen}] font-semibold px-5 py-3 rounded-full hover:bg-[${colors.accentGreen}] hover:text-[${colors.primaryBlue}] transition-all`}
            >
              Chat via Email
            </button>
          </div>

          {/* Subscribe */}
          <div className="mt-4">
            <h4 className={`text-lg font-semibold text-[${colors.accentGreen}] mb-3 md:text-start text-center`}>
              Subscribe
            </h4>
            <form onSubmit={handleSubscribe} className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <button
                type="submit"
                disabled={state.submitting}
                className={`bg-[${colors.lightBlue}] cursor-pointer flex items-center justify-center text-white px-5 py-2 hover:bg-[${colors.accentGreen}] transition-colors min-w-[100px] rounded-r-full disabled:opacity-50`}
              >
                {state.submitting ? <FaSpinner className="animate-spin" /> : "Subscribe"}
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className={`text-lg font-semibold text-[${colors.accentGreen}] md:text-start text-center`}>
              Follow Us
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl mt-4">
              <RiWhatsappLine className="hover:text-[#25D366] transition-transform transform hover:scale-110 cursor-pointer p-3 text-5xl rounded-full bg-[#3DBEFF] hover:-translate-y-2 duration-700 border-2" onClick={() => window.open("https://wa.me/+2348032877945", "_blank")} />
              <RiLinkedinFill className="hover:text-[#0077B5] transition-transform transform hover:scale-110 cursor-pointer p-3 text-5xl rounded-full bg-[#3DBEFF] hover:-translate-y-2 duration-700 border-2" onClick={() => window.open("https://www.linkedin.com/in/edmiragroup", "_blank")} />
              <RiTwitterXLine className="hover:text-gray-900 transition-transform transform hover:scale-110 cursor-pointer p-3 text-5xl rounded-full bg-[#3DBEFF] hover:-translate-y-2 duration-700 border-2" onClick={() => window.open("https://x.com/edmira_group", "_blank")} />
              <RiInstagramLine className="hover:text-[#E4405F] transition-transform transform hover:scale-110 cursor-pointer p-3 text-5xl rounded-full bg-[#3DBEFF] hover:-translate-y-2 duration-700 border-2" onClick={() => window.open("https://www.instagram.com/edmira_group", "_blank")} />
              <FaFacebookF className="hover:text-[#1877F2] transition-transform transform hover:scale-110 cursor-pointer p-3 text-5xl rounded-full bg-[#3DBEFF] hover:-translate-y-2 duration-700 border-2" onClick={() => window.open("https://web.facebook.com/profile.php?id=61581985767152", "_blank")} />
            </div>
          </div>
        </section>
      </div>

      {/* Footer bottom */}
      <div className={`mt-10 border-t border-[${colors.accentGreen}]/30 pt-6 text-center text-sm text-gray-300`}>
        &copy; {new Date().getFullYear()}{" "}
        <span className={`text-[${colors.accentGreen}] font-semibold`}>EdMira</span>. All rights reserved.
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto">
            <div className={`bg-gradient-to-r from-[${colors.primaryBlue}] to-[${colors.lightBlue}] rounded-t-2xl p-6 text-white`}>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Subscription Successful!</h2>
                <button onClick={closeSuccessModal} className="text-white hover:text-gray-200 text-2xl font-bold">
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 rounded-full p-4">
                  <FaCheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <p className="text-gray-700 text-lg font-medium mb-2">
                Welcome to the EdMira Community! 🎉
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thank you for subscribing! You’ll now receive curated updates from EdMira’s mission to empower Africa’s future medical practitioners.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4 text-left">
                <p className="text-green-800 text-sm font-medium mb-2">What to expect:</p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Latest medical insights and updates</li>
                  <li>• Platform development progress</li>
                  <li>• Early access opportunities</li>
                  <li>• Community announcements</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 p-6 flex flex-col gap-3">
              <button
                onClick={closeSuccessModal}
                className={`bg-gradient-to-r from-[${colors.lightBlue}] to-[${colors.accentGreen}] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-transform`}
              >
                Continue Exploring
              </button>
              <button
                onClick={() => {
                  closeSuccessModal();
                  setTimeout(() => {
                    document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`border border-[${colors.accentGreen}] text-[${colors.accentGreen}] font-semibold py-3 px-6 rounded-full hover:bg-[${colors.accentGreen}] hover:text-[${colors.primaryBlue}] transition-all`}
              >
                Follow Us on Social Media
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
