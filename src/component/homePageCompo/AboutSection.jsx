import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import DevelopmentPopup from "../DevelopmentModal";

const AboutSection = () => {
  const [showDevPopup, setShowDevPopup] = useState(false);

  const handleGetStartedClick = () => setShowDevPopup(true);
  const handleClosePopup = () => setShowDevPopup(false);

  const colors = {
    primaryBlue: "#00084A",
    lightBlue: "#3DBEFF",
    accentGreen: "#3EE6A5",
  };

  const whatWeAre = [
    {
      title: "Localized Curriculum Content",
      desc: "EdMira tailors educational materials to fit the African context—bridging the gap between global medical standards and local healthcare realities.",
    },
    {
      title: "AI-Personalized Learning",
      desc: "Our adaptive system creates customized study paths for each learner, ensuring better understanding and improved performance.",
    },
    {
      title: "Community & Mentorship",
      desc: "We connect students with mentors, peers, and industry professionals to foster collaboration and continuous learning.",
    },
    {
      title: "Offline Access & Mobile Learning",
      desc: "Students can learn anytime, anywhere—even without internet connectivity—making education more accessible and inclusive.",
    },
    {
      title: "Analytics & Progress Tracking",
      desc: "Built-in analytics tools help students monitor performance and institutions measure learning outcomes efficiently.",
    },
    {
      title: "Partnerships & Growth Strategy",
      desc: "Through institutional collaborations, ambassador programs, and healthcare partnerships, EdMira scales sustainably across Africa.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 md:px-16 overflow-hidden"
      style={{
        background: `radial-gradient(circle at top left, ${colors.primaryBlue} 20%, ${colors.lightBlue} 90%)`,
      }}
    >
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none"></div>

      {/* About Section */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-24 text-center md:text-start">
        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            About{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${colors.lightBlue}, ${colors.accentGreen})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EdMira
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-white/90">
            EdMira is revolutionizing medical education across Africa by providing
            accessible, localized, and tech-driven learning solutions for medical and
            health science students. We bridge the gap between classroom theory and
            clinical practice through digital innovation.
          </p>

          <Button
            variant="contained"
            onClick={handleGetStartedClick}
            sx={{
              background: `linear-gradient(135deg, ${colors.lightBlue}, ${colors.accentGreen})`,
              borderRadius: "1rem",
              px: "1.5rem",
              py: "0.6rem",
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: `0 8px 25px ${colors.lightBlue}50`,
              "&:hover": {
                background: `linear-gradient(135deg, ${colors.accentGreen}, ${colors.lightBlue})`,
                boxShadow: `0 10px 30px ${colors.accentGreen}70`,
                transform: "translateY(-3px)",
              },
            }}
          >
            Learn More
          </Button>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/illustration.png"
          alt="About EdMira"
          className="w-full md:w-1/2 rounded-3xl shadow-2xl border border-white/10 object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Mission & Vision Section */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-24 text-center md:text-start">
        {/* Image */}
        <motion.img
          src="/mission.jpg"
          alt="Our Mission"
          className="w-full md:w-1/2 rounded-3xl shadow-2xl border border-white/10 object-cover"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.accentGreen}, ${colors.lightBlue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mission
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              To make high-quality medical education accessible to every African
              student by leveraging technology, data, and collaboration. EdMira equips
              learners with resources that enhance knowledge retention, exam success,
              and real-world clinical readiness.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.lightBlue}, ${colors.accentGreen})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Vision
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              To become Africa’s most trusted and innovative platform for medical
              education—empowering over 100,000 learners with localized, digital, and
              community-driven learning experiences that shape the future of healthcare.
            </p>
          </div>

          <Button
            variant="contained"
            onClick={handleGetStartedClick}
            sx={{
              background: `linear-gradient(135deg, ${colors.accentGreen}, ${colors.lightBlue})`,
              borderRadius: "1rem",
              px: "1.5rem",
              py: "0.6rem",
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: `0 8px 25px ${colors.accentGreen}40`,
              "&:hover": {
                background: `linear-gradient(135deg, ${colors.lightBlue}, ${colors.accentGreen})`,
                boxShadow: `0 10px 30px ${colors.lightBlue}70`,
                transform: "translateY(-3px)",
              },
            }}
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* WHAT WE ARE SECTION */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          What{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${colors.lightBlue}, ${colors.accentGreen})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We Are
          </span>
        </h2>
        <p className="text-lg text-white/90 max-w-3xl mx-auto">
          EdMira is a comprehensive digital ecosystem built to address the real
          challenges of medical education in Africa. From localized curriculum content
          to mentorship, we deliver inclusive, flexible, and impactful learning for the
          next generation of African healthcare professionals.
        </p>
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-3 gap-10">
        {whatWeAre.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-xl border-b-6 border-[#3EE6A5] rounded-2xl shadow-lg p-8 text-center md:text-start hover:shadow-[0_0_25px_#3DBEFF50] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-white/80 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <DevelopmentPopup open={showDevPopup} onClose={handleClosePopup} />
    </section>
  );
};

export default AboutSection;
