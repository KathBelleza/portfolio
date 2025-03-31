import { Box, Typography, Container, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 4, md: 8 },
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2, md: 0 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar
              src="/pic.jpeg"
              alt="Profile Picture"
              sx={{
                width: { xs: '200px', md: '280px' },
                height: { xs: '200px', md: '280px' },
                border: '4px solid rgba(224, 176, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(155, 77, 202, 0.3)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: '600px',
              flex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography 
                variant="h1"
                className="gradient-text"
                sx={{ 
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' },
                  textShadow: '0 0 30px rgba(224, 176, 255, 0.3)',
                }}
              >
                I'm Kathereen Belleza
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  color: '#e0b0ff',
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Software Developer
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#ffffff',
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}
              >
                Building innovative solutions with modern technologies
              </Typography>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  background: 'linear-gradient(45deg, #9b4dca, #6b2b8a)',
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #b05ee3, #7c359c)',
                  },
                }}
              >
                View My Work
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
