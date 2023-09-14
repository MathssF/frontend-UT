import React from 'react';
// import React, { useContext } from 'react';
// import { GenresContext } from '../contexts/genresContext';

export default function GenresComponent({ genres, onGenreSelect }) {
  // const { genres } = useContext(GenresContext);

  return (
    <div>
      { genres.map((index) => (
        <div
          key={index.id}
        >
          <button
            onClick={() => onGenreSelect(genre.id)}
          >
            { index.name }
          </button>
        </div>
      )) }
    </div>
  )
}
