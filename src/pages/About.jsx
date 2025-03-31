import { Box, Typography, Container, Paper, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';

const skills = [
  {
    category: "Frontend Development",
    icon: <CodeIcon sx={{ fontSize: 30 }} />,
    description: "Creating responsive and interactive user interfaces with modern web technologies.",
    technologies: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: 90
      },
      {
        name: "HTML5/CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        level: 95
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: 90
      }
    ]
  },
  {
    category: "Backend Development",
    icon: <StorageIcon sx={{ fontSize: 30 }} />,
    description: "Building robust server-side applications and managing databases efficiently.",
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        level: 85
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        level: 85
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        level: 80
      }
    ]
  },
  {
    category: "Tools & Design",
    icon: <BrushIcon sx={{ fontSize: 30 }} />,
    description: "Utilizing industry-standard tools for development and design workflows.",
    technologies: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        level: 85
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: 90
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        level: 80
      }
    ]
  }
];

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 30 }} />,
    title: "Modern Development",
    description: "Expertise in modern web development frameworks and best practices"
  },
  {
    icon: <StorageIcon sx={{ fontSize: 30 }} />,
    title: "Full Stack Solutions",
    description: "End-to-end development capabilities from frontend to backend"
  },
  {
    icon: <BrushIcon sx={{ fontSize: 30 }} />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code"
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
          My Skills
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={category.category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  className="gradient-bg"
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    mb: 4,
                    maxWidth: '800px',
                    mx: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, rgba(155, 77, 202, 0.2), rgba(224, 176, 255, 0.2))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        flexShrink: 0,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" className="gradient-text" sx={{ mb: 1 }}>
                        {category.category}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {category.description}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Grid container spacing={2} justifyContent="center">
                    {category.technologies.map((tech) => (
                      <Grid item xs={12} sm={6} md={4} key={tech.name}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Paper
                            elevation={0}
                            className="skill-card"
                            sx={{
                              p: 3,
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 3,
                              height: '100%',
                            }}
                          >
                            <Box
                              sx={{
                                mb: 2,
                                p: 2,
                                borderRadius: '50%',
                                background: 'linear-gradient(45deg, rgba(155, 77, 202, 0.2), rgba(224, 176, 255, 0.2))',
                              }}
                            >
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                style={{ width: '40px', height: '40px' }}
                              />
                            </Box>
                            <Typography variant="body2" className="gradient-text">
                              {tech.name}
                            </Typography>
                            <Box
                              sx={{
                                width: '100%',
                                height: '4px',
                                backgroundColor: 'rgba(155, 77, 202, 0.2)',
                                borderRadius: '2px',
                                mt: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: `${tech.level}%`,
                                  height: '100%',
                                  backgroundColor: '#e0b0ff',
                                  borderRadius: '2px',
                                }}
                              />
                            </Box>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

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
