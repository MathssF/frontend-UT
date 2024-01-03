const TitlesList = async ({ children }) => {
  const fetch = require('node-fetch');

  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0'
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
