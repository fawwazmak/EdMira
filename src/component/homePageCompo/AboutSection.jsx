import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#FDFDFD] py-20 px-6 md:px-16">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
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
            EdMira is dedicated to transforming medical education across Africa by
            providing accessible digital resources that strengthen understanding,
            improve exam performance, and bridge the gap between theory and clinical
            practice.
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
            src="/illustration.jpg"
            alt="About EdMira"
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        />
        </div>

        {/* Mission & Vision Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
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
                To become the leading edtech platform for medical education in Africa,
                empowering students with digital learning resources that improve
                knowledge retention, exam performance, and real-world medical practice.
            </p>
            </div>

            <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#082E39] mb-4">
                Our <span className="text-[#CBA244]">Vision</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
                To become the leading edtech platform for medical education in Africa,
                empowering students with digital learning resources that improve
                knowledge retention, exam performance, and real-world medical practice.
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
    </section>
  )
}

export default AboutSection
