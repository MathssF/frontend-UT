import React, { useEffect, useState } from 'react';
import TitlesList from '../contexts/titlesList';

export default function Titles({ genres }) {
  const [titles, setTitles] = useState([]);

  const [pageAtual, setPageAtual] = useState(1);
  const pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePageClick = (pg) => {
    setPageAtual(pg);
  };

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
    // width: 'calc(16.666% - 32px)',
    width: 'calc(20% - 32px)',
  };

  const pageNumbersStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
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
      <br />
      <div style={pageNumbersStyle}>
        { pageList.map((pg, index) => (
          <b
            key={pg}
            style={{
              color: pg === pageAtual ? 'purple' : 'black',
              cursor: 'pointer',
              fontWeight: 'bold',
              padding: '8px 16px',
              margin: index > 0 ? '0 8px' : '0',      
            }}
            onClick={() => handlePageClick(pg)}
          >
            { pg }
          </b>
        )) }
      </div>
    </div>
  );
}
