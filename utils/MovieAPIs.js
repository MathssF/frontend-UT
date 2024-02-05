import dotenv from 'dotenv';
dotenv.config();

const key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0';

const fetch = require('node-fetch');

const movieCreditsAPI = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key,
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.cast.slice(0, 6);
  } catch (err) {
    console.log('erro na MovieAPIs');
    console.error('error:', err);
    return [];
  }
};

const movieElencoAPI = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key,
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.cast.slice(0, 12);
  } catch (err) {
    console.log('erro na MovieAPIs');
    console.error('error:', err);
    return [];
  };
};

const movieTeasersAPI = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key,
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const trailers = json.results.filter((video) => video.type === 'Trailer');
    trailers.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    if (trailers.length > 0) {
      const latestTrailer = trailers[0];
      return latestTrailer;
    } else {
      return null;
    }
  } catch (err) {
    console.log('erro na API de Vídeo');
    console.error('error:', err);
    return null;
  }
};

const movieRecomenAPI = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key,
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.results.slice(0, 5);
  } catch (err) {
    console.error('Erro na API de recomendados:', err);
    return [];
  };
};

export { movieCreditsAPI, movieElencoAPI, movieTeasersAPI, movieRecomenAPI };
