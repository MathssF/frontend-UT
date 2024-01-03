import React, { useEffect, useState } from 'react';
import TitlesList from '../contexts/titlesList';

export default function Titles({ genres }) {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    TitlesList({ children: titles }).then(titlesArray => {
      setTitles(titlesArray);
    });
  }, []);

  // Certifique-se de que 'titles' é um array antes de tentar mapear sobre ele
  if (!Array.isArray(titles) || titles.length === 0) {
    return <div><h1>Nenhum título disponível</h1></div>;
  }

  const filteredTitles = genres.length > 0
    ? titles.filter(title => title.genre_ids.some(genreId => genres.includes(genreId)))
    : titles;

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const titleStyle = {
    boxSizing: 'border-box',
    maxWidth: '176px',
    marginRight: '32px',
    marginBottom: '48px',
  };

  return (
    <div style={containerStyle}>
      {filteredTitles.map(title => (
        <div key={title.id} style={titleStyle}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`}
            alt={title.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <br />
          {title.title}
          <br />
          {new Date(title.release_date).toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </div>
      ))}
    </div>
  );
}