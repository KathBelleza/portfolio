import axios from 'axios';

const API_ENDPOINT = 'https://formspree.io/f/your-form-id'; // Replace with your FormSpree form ID

export const sendContactEmail = async (formData) => {
  try {
    const response = await axios.post(API_ENDPOINT, formData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};
