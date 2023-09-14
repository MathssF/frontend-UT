import React from 'react';
// import React, { useContext } from 'react';
// import { GenresContext } from '../contexts/genresContext';

export default function GenresList() {
  // const { genres } = useContext(GenresContext);

  return (
    <div>
      { genres.map((index) => (
        <button
          key={index.id}
        >
          { index.name }
        </button>
      )) }
    </div>
  )
}
