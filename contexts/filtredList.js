import dotenv from 'dotenv';
dotenv.config();

const FiltredList = async ({ genres, page }) => {
  const fetch = require('node-fetch');

  const apiKey = process.env.API_Key;
  const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
  const language = 'en-US';
  const genreIds = genres.join(',');

  const url = `${baseUrl}?include_adult=false&include_video=false&language=${language}&page=${page}&sort_by=popularity.desc&with_genres=${genreIds}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey,
    }
  };
  
  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.results) {
      return json.results;
    } else {
      // Caso nenhum filme seja encontrado
      console.error('Lista Vazia', json);
      return [];
    }
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    return [];
  }
};

export default FiltredList;
