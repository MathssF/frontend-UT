import React from 'react';
import './style/buttons.css';

export default function GenresComponent({ genres, onGenreSelect }) {

  return (
    <div
      // className="genre-button-container"
    >
      { genres.map((genre) => (
        <div
          key={genre.id}
        >
          <button
            onClick={() => onGenreSelect(genre.id)}
            style={{ backgroundColor: genre.select ? "blue" : "white" }}
            // className={`genre-button ${genre.select ? 'selected' : ''}`}
          >
            { genre.name }
          </button>
        </div>
      )) }
    </div>
  )
}
