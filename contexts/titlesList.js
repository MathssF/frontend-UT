import dotenv from 'dotenv';
dotenv.config();

const TitlesList = async ({ children, lang, page, itQtd }) => { // , lang, totalPage 
  const fetch = require('node-fetch');

  const apiKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0';
  const baseUrl = 'https://api.themoviedb.org/3/movie/popular';
  const language = lang || 'en-US';

  const url = `${baseUrl}?language=${language}&page=${page}`;
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

export default TitlesList;
