import { Box, Typography, Container, TextField, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';

const ContactPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(26, 11, 46, 0.95)',
  backdropFilter: 'blur(15px)',
  borderRadius: '24px',
  border: '1px solid rgba(155, 77, 202, 0.2)',
  boxShadow: '0 20px 40px rgba(155, 77, 202, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const Contact = () => {
  return (
    <Container id="contact" maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
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
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            color: '#ffffff',
            textShadow: '0 0 30px rgba(224, 176, 255, 0.3)',
          }}
        >
          Contact Me
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Message Form */}
          <Grid item xs={12} md={10} lg={8}>
            <ContactPaper
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#e0b0ff',
                  mb: 4,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                }}
              >
                Send Me a Message
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: { xs: '50px', sm: '60px' },
                        color: '#ffffff',
                        '& fieldset': {
                          borderColor: 'rgba(224, 176, 255, 0.3)',
                          borderWidth: '2px',
                          borderRadius: '12px',
                        },
                        '&:hover fieldset': {
                          borderColor: '#e0b0ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#e0b0ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#e0b0ff',
                        fontSize: '1rem',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: { xs: '50px', sm: '60px' },
                        color: '#ffffff',
                        '& fieldset': {
                          borderColor: 'rgba(224, 176, 255, 0.3)',
                          borderWidth: '2px',
                          borderRadius: '12px',
                        },
                        '&:hover fieldset': {
                          borderColor: '#e0b0ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#e0b0ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#e0b0ff',
                        fontSize: '1rem',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#ffffff',
                        '& fieldset': {
                          borderColor: 'rgba(224, 176, 255, 0.3)',
                          borderWidth: '2px',
                          borderRadius: '12px',
                        },
                        '&:hover fieldset': {
                          borderColor: '#e0b0ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#e0b0ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#e0b0ff',
                        fontSize: '1rem',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: 2,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          height: { xs: '50px', sm: '55px' },
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          background: 'linear-gradient(45deg, #9b4dca, #6b2b8a)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #b05ee3, #7c359c)',
                          },
                          borderRadius: '12px',
                          textTransform: 'none',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 0.5,
                          px: 4,
                        }}
                      >
                        <Typography variant="body1" sx={{ color: '#ffffff' }}>
                          Send Message
                        </Typography>
                      </Button>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>
            </ContactPaper>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={10} lg={8}>
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 3 },
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                justifyContent: 'center',
                mt: 4,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ flex: 1 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<EmailIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' } }} />}
                  href="https://myaccount.google.com/?gar=WzEyMF0&hl=en&utm_source=OGB&utm_medium=act"
                  target="_blank"
                  sx={{
                    height: { xs: '50px', sm: '60px' },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    background: 'linear-gradient(45deg, #9b4dca, #6b2b8a)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #b05ee3, #7c359c)',
                    },
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Email Me
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ flex: 1 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<FacebookIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' } }} />}
                  href="https://www.facebook.com/profile.php?id=100011688635022&mibextid=ZbWKwL"
                  target="_blank"
                  sx={{
                    height: { xs: '50px', sm: '60px' },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    background: 'linear-gradient(45deg, #9b4dca, #6b2b8a)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #b05ee3, #7c359c)',
                    },
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Facebook
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ flex: 1 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<InstagramIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' } }} />}
                  href="https://www.instagram.com/kaiiiee.e?igsh=Y2hrbzg2bWs5Zmxz"
                  target="_blank"
                  sx={{
                    height: { xs: '50px', sm: '60px' },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    background: 'linear-gradient(45deg, #9b4dca, #6b2b8a)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #b05ee3, #7c359c)',
                    },
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Instagram
                </Button>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact;