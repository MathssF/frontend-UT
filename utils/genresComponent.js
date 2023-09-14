import React from 'react';

export default function GenresComponent({ genres, onGenreSelect }) {

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
