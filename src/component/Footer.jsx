import React from 'react';
import { Link } from 'react-router-dom';
import { RiWhatsappLine, RiLinkedinFill, RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import { FaFacebookF, FaArrowRight } from "react-icons/fa";



const Footer = () => {
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
            Empowering Africa’s Medical practicioners
          </p>
        </section>

        {/* Navigation Links */}
        <section className="flex flex-col space-y-3 md:w-fit w-full md:items-start items-center">
          <h3 className="text-lg font-semibold text-[#CBA244]">Quick Links</h3>
          <Link href="#" className="hover:text-[#D98021] transition-colors">Home</Link>
          <Link href="#" className="hover:text-[#D98021] transition-colors">About</Link>
          <Link href="#" className="hover:text-[#D98021] transition-colors">Forum</Link>
          <Link href="#" className="hover:text-[#D98021] transition-colors">News Feed</Link>
          <Link href="#" className="hover:text-[#D98021] transition-colors">Privacy</Link>
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

          <div className="mt-4">
            <h4 className="text-lg md:text-start text-center font-semibold text-[#CBA244] mb-3">Subscribe</h4>
            <div className="flex flex-row items-center bg-[#F0F0EF] rounded-full mx-w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 min-w-[328px]:px-4 px-1 py-2 text-[#082E39] focus:outline-none"
              />
              <button className="bg-[#D98021] md:block hidden text-[#FDFDFD] px-5 py-2 rounded-r-full rounded-l-none rounded-br-full w-fit hover:bg-[#CBA244] transition-colors">
                Subscribe
              </button>

              <button className="bg-[#D98021] md:hidden text-[#FDFDFD] min-w-[328px]:px-5 px-1 py-3 rounded-r-full rounded-l-none rounded-br-full w-fit h-full hover:bg-[#CBA244] transition-colors">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#CBA244] md:text-start text-center">Follow Us</h3>

            <div className="flex md:space-x-5 space-x-2 md:justify-start justify-center md:flex-no-wrap flex-wrap text-2xl mt-4">
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

      <div className="mt-10 border-t border-[#CBA244]/30 pt-6 text-center text-sm text-[#C7BC9A]">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#CBA244] font-semibold">EdMira</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
