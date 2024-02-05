import { createContext, useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const GenresContext = createContext();

const apiKey = process.env.API_Key;

const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey,
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        const genresWithSelect = data.genres.map(genre => ({
          ...genre,
          select: false
        }));
        setGenres(genresWithSelect)}
      )
      // .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <GenresContext.Provider value={{ genres, setGenres }}>
        {children}
    </GenresContext.Provider>
  );
};

export { GenresContext, GenresProvider };
