import { createContext, useEffect, useState } from 'react';

const GenresContext = createContext();

const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0'
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
