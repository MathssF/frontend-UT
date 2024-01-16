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
              borderRadius: '4px',
              padding: '8px 16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: genre.selected ? "blue" : "white",
              color: genre.selected ? 'white' : 'black'
            }}
          >
            { genre.name }
            { genre.selected && <span style={{ marginLeft: '5px' }}>X</span> }
          </button>
        </div>
      )) }
    </div>
  )
}
