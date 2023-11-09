import React from 'react';

export default function GenresComponent({ genres, onGenreSelect }) {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { genres.map((genre) => (
        <div
          key={genre.id}
        >
          <button
            onClick={() => onGenreSelect(genre.id)}
            style={{
              margin: '5px',
              borderRadius: '10px',
              padding: '8px 16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: genre.select ? "blue" : "white",
              color: genre.select ? 'white' : 'black'
            }}
          >
            { genre.name }
            { genre.select && <span style={{ marginLeft: '5px' }}>X</span> }
          </button>
        </div>
      )) }
    </div>
  )
}
