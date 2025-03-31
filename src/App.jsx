import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Loading from './components/Loading';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9b4dca', // Deep purple
      light: '#e0b0ff',
      dark: '#6b2b8a',
    },
    secondary: {
      main: '#7a4988', // Muted purple
      light: '#a76fb5',
      dark: '#4d2d54',
    },
    background: {
      default: '#1a0b2e', // Very dark purple
      paper: '#2d1b4e', // Dark purple
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontSize: '1.1rem',
          padding: '10px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(155, 77, 202, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 8px 32px rgba(155, 77, 202, 0.15)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(45, 27, 78, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(155, 77, 202, 0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px rgba(155, 77, 202, 0.25)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(224, 176, 255, 0.2)',
              transition: 'all 0.2s ease-in-out',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(224, 176, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#9b4dca',
            },
          },
        },
      },
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const navbarHeight = 64; // Height of the navbar

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= navbarHeight + 100 && rect.bottom >= navbarHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {isLoading ? (
          <Loading onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <div 
            style={{ 
              minHeight: '100vh',
              background: 'linear-gradient(135deg, #2d1b4e 0%, #1a0b2e 100%)',
              overflowX: 'hidden',
            }}
            onScroll={handleScroll}
          >
            <Navbar activeSection={activeSection} />
            <div style={{ paddingTop: '64px' }}>
              <section id="home" style={{ scrollMarginTop: '64px' }}><Home /></section>
              <section id="about" style={{ scrollMarginTop: '64px' }}><About /></section>
              <section id="projects" style={{ scrollMarginTop: '64px' }}><Projects /></section>
              <section id="contact" style={{ scrollMarginTop: '64px' }}><Contact /></section>
            </div>
          </div>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
