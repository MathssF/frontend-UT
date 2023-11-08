import React from 'react';

export default function GenresComponent({ genres, onGenreSelect }) {

  console.log(genres);
  return (
    <div>
      { genres.map((genre) => (
        <div
          key={genre.id}
          style={genre.select ? "background-color: blue" : "background-color: white"}
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
