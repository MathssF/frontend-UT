import React, { useEffect, useState } from 'react';
import TitlesList from '../contexts/titlesList';

export default function Titles({ genres }) {
  const [titles, setTitles] = useState([]);

  let pageAtual = 1;

  useEffect(() => {
    TitlesList({
      children: titles,
      lang: 'en-US',
      page: pageAtual,
    }).then(titlesArray => {
      setTitles(titlesArray);
    });
  }, []);

  if (!Array.isArray(titles) || titles.length === 0) {
    return <div><h1>Nenhum título disponível</h1></div>;
  }

  const filteredTitles = genres.length > 0
    ? titles.filter(title => title.genre_ids.some(genreId => genres.includes(genreId)))
    : titles;

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '32px',
    justifyContent: 'center',
  };

  const titleStyle = {
    boxSizing: 'border-box',
    maxWidth: '176px',
    marginRight: '32px',
    marginBottom: '48px',
    width: 'calc(16.666% - 32px)',
  };

  return (
    <div style={containerStyle}>
      {filteredTitles.map(title => (
        <div key={title.id} style={titleStyle}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`}
            alt={`${title.title} ${title.id}`} // Title id aqui só na fase de desenvolvimento, após isto, retirar
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

      <div></div>
    </div>
  );
}
