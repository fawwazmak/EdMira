import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const AboutSection = () => {
  // ✅ Moved here — easier to manage and edit later
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
    <section className="w-full bg-[#FDFDFD] py-20 px-6 md:px-16">
      {/* About Section */}
      <div className="flex flex-col-reverse md:text-start text-center md:flex-row items-center justify-between gap-12 mb-24">
        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#082E39]">
            About <span className="text-[#CBA244]">EdMira</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            EdMira is revolutionizing medical education across Africa by providing
            accessible, localized, and tech-driven learning solutions for medical and
            health science students. We bridge the gap between classroom theory and
            clinical practice through digital innovation.
          </p>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#082E39",
              borderRadius: "1rem",
              paddingX: "1.5rem",
              paddingY: "0.5rem",
              textTransform: "none",
              "&:hover": { backgroundColor: "#CBA244" },
            }}
          >
            Learn More
          </Button>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/illustration.png"
          alt="About EdMira"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Mission & Vision Section */}
      <div className="flex flex-col-reverse md:text-start text-center md:flex-row items-center justify-between gap-12 mb-24">
        {/* Image */}
        <motion.img
          src="/mission.jpg"
          alt="Our Mission"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
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
            <h2 className="text-3xl md:text-4xl font-semibold text-[#082E39] mb-4">
              Our <span className="text-[#D98021]">Mission</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To make high-quality medical education accessible to every African
              student by leveraging technology, data, and collaboration. EdMira equips
              learners with resources that enhance knowledge retention, exam success,
              and real-world clinical readiness.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#082E39] mb-4">
              Our <span className="text-[#CBA244]">Vision</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To become Africa’s most trusted and innovative platform for medical
              education—empowering over 100,000 learners with localized, digital, and
              community-driven learning experiences that shape the future of healthcare.
            </p>
          </div>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D98021",
              borderRadius: "1rem",
              paddingX: "1.5rem",
              paddingY: "0.5rem",
              textTransform: "none",
              "&:hover": { backgroundColor: "#CBA244" },
            }}
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* WHAT WE ARE SECTION */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl md:text-start text-center font-semibold text-[#082E39] mb-4">
          What <span className="text-[#CBA244]">We Are</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto md:text-start text-center">
          EdMira is a comprehensive digital ecosystem built to address the real
          challenges of medical education in Africa. From localized curriculum content
          to mentorship, we deliver inclusive, flexible, and impactful learning for the
          next generation of African healthcare professionals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10">
        {whatWeAre.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white md:text-start text-center md:p-8 p-2 border-b-6 border-[#d98021] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#082E39] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
