import React from 'react';

export default function GenresComponent({ genres, onGenreSelect }) {

  // console.log(genres);
  return (
    <div>
      { genres.map((genre) => (
        <div
          key={genre.id}
        >
          <button
            onClick={() => onGenreSelect(genre.id)}
          >
            { genre.name }
          </button>
        </div>
      )) }
    </div>
  )
}
