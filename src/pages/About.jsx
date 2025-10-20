import { Box, Typography, Container, Paper, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 30 }} />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code"
  },
  {
    icon: <StorageIcon sx={{ fontSize: 30 }} />,
    title: "Dedicated Developer",
    description: "Committed to delivering high-quality and efficient solutions"
  },
  {
    icon: <BrushIcon sx={{ fontSize: 30 }} />,
    title: "Teamwork",
    description: "Can adjust different roles in a team-based environment"
  }
];

const About = () => {
  return (
    <Container>
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              background: 'linear-gradient(45deg, #e0b0ff, #9b4dca)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 20px rgba(180, 126, 179, 0.2)',
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 8 }}>
          <Avatar
            src="/pic.jpeg"
            alt="Profile"
            sx={{
              width: 200,
              height: 200,
              mb: 4,
              boxShadow: '0 4px 20px rgba(180, 126, 179, 0.2)',
              border: '4px solid white',
            }}
          />
          <Paper 
            elevation={0}
            className="gradient-bg"
            sx={{ 
              p: 4,
              borderRadius: 4,
              textAlign: 'center',
              maxWidth: '800px',
              mb: 6
            }}
          >
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Hello! I'm Kathereen Belleza, a passionate Software Developer with a strong foundation in both frontend and backend technologies. 
              I specialize in creating user-friendly web applications that combine beautiful design with efficient functionality.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
              My journey in software development began with a fascination for problem-solving and creative design. 
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously expanding my skill set 
              through online courses and hands-on projects.
            </Typography>
          </Paper>
        </Box>

        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,
            color: '#e0b0ff',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
          }}
        >
          My Features
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  className="gradient-bg"
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, rgba(155, 77, 202, 0.2), rgba(224, 176, 255, 0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(45deg, rgba(155, 77, 202, 0.4), rgba(224, 176, 255, 0.4))',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" className="gradient-text" gutterBottom sx={{ mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      opacity: 0.9,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
