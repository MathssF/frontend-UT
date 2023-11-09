import React from 'react';

export default function GenresComponent({ genres, onGenreSelect }) {

  return (
    <div>
      { genres.map((genre) => (
        <div
          key={genre.id}
          style={{ backgroundColor: genre.select ? "blue" : "white" }}
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
