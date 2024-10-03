import axios from 'axios';

const bearerToken = process.env.BEARER_TOKEN;
const baseUrl = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
});

export const fetchMovies = async () => {
    try {
      const response = await axiosInstance.get(`/movie/popular`);
      return response.data.results;
    } catch (error) {
      console.error('Erreur lors de la récupération des films:', error);
      return [];
    }
  };