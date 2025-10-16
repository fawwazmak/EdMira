import React, {useState} from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { motion,  } from 'framer-motion';
import { WhatsApp, Person } from "@mui/icons-material";



const ForumSection = () => {
    const teamMembers = [
        {
        name: "Jamiu Sanni",
        title: "Founder, EdMira",
        color: "#CBA244",
        bgGradient:
            "linear-gradient(145deg, rgba(203, 162, 68, 0.15) 0%, rgba(217, 128, 33, 0.1) 100%)",
        border: "2px solid rgba(203, 162, 68, 0.3)",
        avatarBg: "linear-gradient(135deg, #CBA244 0%, #D98021 100%)",
        boxShadow: "0 8px 30px rgba(203, 162, 68, 0.5)",
        },
        {
        name: "Rasheedah Dada",
        title: "Co-Founder, EdMira",
        color: "#D98021",
        bgGradient:
            "linear-gradient(145deg, rgba(217, 128, 33, 0.15) 0%, rgba(203, 162, 68, 0.1) 100%)",
        border: "2px solid rgba(217, 128, 33, 0.3)",
        avatarBg: "linear-gradient(135deg, #D98021 0%, #CBA244 100%)",
        boxShadow: "0 8px 30px rgba(217, 128, 33, 0.5)",
        },
    ];
    const joinCommunity = () => {
      window.open("https://chat.whatsapp.com/K0Kt4wnASEkEp41WQxFcOz?mode=ems_copy_t", "_blank");
    };

    const joinMedicalUpdates = () => {
      window.open("https://chat.whatsapp.com/FPhThBcZwmu0FSDsSldIYf?mode=ems_copy_t", "_blank");
    }

  return (
    <Box sx={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "linear-gradient(135deg, #082E39 0%, #0a3d4f 100%)",
      minHeight: "100vh", py: 8,}}>
      {/* Header Section */}
      <Container maxWidth="lg" className="text-center mb-20">
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(135deg, #CBA244 0%, #D98021 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: {
              xs: "1.75rem", // phones
              sm: "2.25rem", // small tablets
              md: "3rem",    // desktops
            },
          }}
        >
          Forum & News Feed
        </Typography>

        <Typography
          variant="h6"
          sx={{ 
            color: "#C7BC9A", maxWidth: "720px", mx: "auto",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.3rem",
            }
          }}
        >
          Stay connected and informed with EdMira's integrated forum and news
          feed. Engage with peers, share insights, and stay up-to-date on the
          latest developments in the medical fields.
        </Typography>
      </Container>

      {/* Community Sections */}
      <Container maxWidth="lg" className="mb-24 px-4">
        <Grid container spacing={10}>
          {/* Forum Card */}
          <Grid item xs={12} lg={6}>
            <motion.section
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl md:p-12 p-4 cursor-pointer"
              style={{
                background:
                  "linear-gradient(145deg, rgba(203, 162, 68, 0.1) 0%, rgba(217, 128, 33, 0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(203, 162, 68, 0.3)",
              }}
            >
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(203, 162, 68, 0.2) 0%, transparent 70%)",
                }}
              />
              <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
                sx={{ 
                  color: "#CBA244", 
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }
                }}
                className="md:text-start text-center"
              >
                Community Forum
              </Typography>
              <Typography variant="body1" mb={6} 
                sx={{ 
                  color: "#C7BC9A", 
                  textAlign: { xs: "center", md: "left" }
                }}>
                Join our vibrant community forum to connect with fellow medical
                students, ask questions, and participate in discussions on a
                wide range of medical topics.
              </Typography>

              <Button
                variant="contained"
                onClick={joinCommunity}
                startIcon={<WhatsApp sx={{ fontSize: 28 }} />} // slightly larger icon
                className="font-semibold text-xl md:px-12 px-2 md:py-5 py-2 rounded-full transition-all duration-300"
                sx={{
                  background: "linear-gradient(135deg, #D98021 0%, #CBA244 100%)",
                  color: "#082E39",
                  borderRadius: "9999px", // ensures fully rounded sides
                  padding: "1.25rem 3rem", // larger button
                  fontSize: "1.125rem",
                  fontWeight: { xs: 400, md: 600 },
                  boxShadow: "0 6px 25px rgba(217, 128, 33, 0.4)",
                  textTransform: "none", // keeps text as-is (not all caps)
                  "&:hover": {
                    transform: "scale(1.07)",
                    boxShadow: "0 8px 35px rgba(217, 128, 33, 0.6)",
                    background: "linear-gradient(135deg, #CBA244 0%, #D98021 100%)",
                  },
                  "& .MuiButton-startIcon": {
                    marginRight: "0.75rem",
                  },
                }}
              >
                Join Now!
              </Button>
            </motion.section>
          </Grid>

          {/* News Card */}
          <Grid item xs={12} lg={6}>
            <motion.section
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl md:p-12 p-4 cursor-pointer"
              style={{
                background:
                  "linear-gradient(145deg, rgba(217, 128, 33, 0.1) 0%, rgba(203, 162, 68, 0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(217, 128, 33, 0.3)",
              }}
            >
              <div
                className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(217, 128, 33, 0.2) 0%, transparent 70%)",
                }}
              />
              <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
                sx={{ 
                  color: "#D98021",
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }
                }}
                className="md:text-start text-center"
              >
                Medical News and Updates
              </Typography>
              <Typography variant="body1" mb={6} sx={{ color: "#C7BC9A" }}>
                Stay informed with the latest medical breakthroughs, research
                updates, and industry news curated specifically for medical
                students and professionals.
              </Typography>

              <Button
                variant="contained"
                onClick={joinMedicalUpdates}
                startIcon={<WhatsApp sx={{ fontSize: 28 }} />} // slightly larger icon
                className="font-semibold text-xl md:px-12 px-4 md:py-5 py-3 rounded-full transition-all duration-300"
                sx={{
                  background: "linear-gradient(135deg, #D98021 0%, #CBA244 100%)",
                  color: "#082E39",
                  borderRadius: "9999px", // ensures fully rounded sides
                  padding: "1.25rem 3rem", // larger button
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  boxShadow: "0 6px 25px rgba(217, 128, 33, 0.4)",
                  textTransform: "none", // keeps text as-is (not all caps)
                  "&:hover": {
                    transform: "scale(1.07)",
                    boxShadow: "0 8px 35px rgba(217, 128, 33, 0.6)",
                    background: "linear-gradient(135deg, #CBA244 0%, #D98021 100%)",
                  },
                  "& .MuiButton-startIcon": {
                    marginRight: "0.75rem",
                  },
                }}
              >
                Join Now!
              </Button>
            </motion.section>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Container maxWidth="lg" className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:text-5xl text-3xl font-bold text-center mb-16"
          style={{
            background: "linear-gradient(135deg, #CBA244 0%, #D98021 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Team
        </motion.h1>

          
        <Grid container spacing={12} className="sm:p-4 sm:items-start items-center" >
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} lg={6} key={member.name}>
              <motion.div
                initial={{ opacity: 0, x: idx === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl md:p-12 min-[309px]:p-4 text-center"
                style={{
                  background: member.bgGradient,
                  backdropFilter: "blur(10px)",
                  border: member.border,
                }}
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 4,
                    background: member.avatarBg,
                    boxShadow: member.boxShadow,
                  }}
                >
                  <Person sx={{ fontSize: 60, color: "#082E39" }} />
                </Avatar>

                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: member.color }}
                >
                  {member.name}
                </Typography>

                <Typography variant="body1" sx={{ color: "#C7BC9A" }}>
                  {member.title}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ForumSection
