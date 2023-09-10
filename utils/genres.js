import React, { useContext } from 'react';
import { GenresContext } from '../contexts/genresContext';

export default function GenresList() {
  const { genres } = useContext(GenresContext);

  const ListGen = { genres.map((index) => (
    <button
      key={index.id}
    >
      { index.name }
    </button>
  )) }

  return (
    { ListGen }
  )
}
