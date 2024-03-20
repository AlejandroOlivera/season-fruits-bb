import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const fetchAllFruits = async () => {
  try {
    const response = await axios.get(`${baseUrl}/fruit/all`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching fruits:', error);
    throw error;
  }
};
