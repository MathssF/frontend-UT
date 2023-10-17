import React, { useContext } from 'react';
import { GenresContext, GenresProvider } from '../contexts/genresContext';
// import { GenresComponent } from '../utils/genresComponent.js';
// import { GenresProvider } from '../contexts/genresContext';
import Desktop from '../utils/Desktop';

export default function IndexMenu() {
  // const { genres, setGenres } = useContext(GenresContext);

  // const handleGenreSelect = (id) => {
  //   setGenres(prevGenres => prevGenres.map(genre =>
  //       genre.id === id? { ...genre, select: !genre.select} : genre
  //     ))
  // }
  
  return (
    <GenresProvider>
      <Desktop />
    </GenresProvider>
  );
}
