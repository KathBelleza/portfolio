import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Box } from '@mui/material';
import { motion } from 'framer-motion';
import GitHub from '@mui/icons-material/GitHub';
import Language from '@mui/icons-material/Language';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application with a clean and intuitive interface',
    image: '/trackem.png',
    github: '#',
    live: '#',
  },
  {
    title: 'Project 2',
    description: 'Responsive e-commerce platform with advanced features',
    image: '/iskor.png',
    github: '#',
    live: '#',
  },
  {
    title: 'Project 3',
    description: 'A full-stack web application with a beautiful UI',
    image: '/awesometodos.png',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <Container id="projects" maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            fontSize: { xs: '3rem', md: '4rem' },
            color: '#ffffff',
            textShadow: '0 0 30px rgba(224, 176, 255, 0.3)',
          }}
        >
          My Projects
        </Typography>

        <Grid container spacing={6} justifyContent="center" sx={{ mb: 8 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(45deg, rgba(155, 77, 202, 0.2), rgba(224, 176, 255, 0.2))',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(224, 176, 255, 0.1)',
                    maxWidth: '400px',
                    margin: '0 auto',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      width: '100%',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h6" gutterBottom className="gradient-text" sx={{ 
                      fontWeight: 600,
                      textAlign: 'center',
                      mb: 1,
                      fontSize: { xs: '1.2rem', sm: '1.4rem' },
                    }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{
                      textAlign: 'center',
                      mb: 2,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.6,
                    }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      gap: 1, 
                      justifyContent: 'center', 
                      mt: 2 
                    }}>
                      <IconButton 
                        href={project.github}
                        target="_blank"
                        sx={{ 
                          color: '#e0b0ff',
                          '&:hover': { transform: 'scale(1.1)' },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton 
                        href={project.live}
                        target="_blank"
                        sx={{ 
                          color: '#e0b0ff',
                          '&:hover': { transform: 'scale(1.1)' },
                        }}
                      >
                        <Language />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
