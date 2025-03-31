import { AppBar, Toolbar, Button, Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const theme = useTheme();
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(26, 11, 46, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '3.5rem',
                background: 'linear-gradient(135deg, #9b4dca, #6b2b8a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #b05ee3, #7c359c)',
                  textShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                },
              }}
            >
              K
            </Typography>
          </motion.div>
          <Typography
            variant="h6"
            sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            Kath
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: item.id === 'home' ? '#ffffff' : (activeSection === item.id ? '#e0b0ff' : '#ffffff'),
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'rgba(224, 176, 255, 0.1)',
                    color: '#e0b0ff',
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
