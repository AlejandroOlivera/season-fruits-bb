import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
    Connection: 'keep-alive',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
  },
});
export const fetchAllFruits = async () => {
  try {
    const response = await instance.get(`${baseUrl}/fruit/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fruits:', error);
    throw error;
  }
};
