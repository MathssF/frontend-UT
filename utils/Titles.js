import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitlesList from '../contexts/titlesList';
import flagBR from '../images/brasil.png';
import flagPT from '../images/portugal.png';
import flagUS from '../images/estados-unidos.png';
import flagEN from '../images/inglaterra.png';
import flagFR from '../images/franca.png';
import flagIT from '../images/italia.png';


export default function Titles({ genres }) {
  const [titles, setTitles] = useState([]);

  const [pageAtual, setPageAtual] = useState(1);
  const pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [flagLang, setFlagLang] = useState('en-US');

  const handlePageClick = (pg) => {
    setPageAtual(pg);
  };

  useEffect(() => {
    TitlesList({
      children: titles,
      lang: flagLang,
      page: pageAtual,
    }).then(titlesArray => {
      setTitles(titlesArray);
    });
  }, [pageAtual, flagLang]);

  const langFlags = [
    { lang: 'pt-BR', flag: flagBR },
    { lang: 'pt-PT', flag: flagPT },
    { lang: 'en-US', flag: flagUS },
    { lang: 'en-GB', flag: flagEN },
    { lang: 'fr', flag: flagFR },
    { lang: 'it', flag: flagIT },
  ]

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
    width: 'calc(20% - 32px)',
  };

  const pageNumbersStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
    marginRight: '8px',
  };

  const flagsContainerStyle = {
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'center'
  };

  const flagStyle = {
    width: '20px',
    cursor: 'pointer',
    marginBottom: '20px',
    marginLeft: '12px',
    marginRight: '12px',
  };

  return (
    <>
      <div style={flagsContainerStyle}>
        {langFlags.map((elem, index) => {
          console.log('Icones, créditos ao Roundicons: https://www.flaticon.com/br/autores/roundicons');
          return (
          <img
            key={index}
            src={elem.flag.src}
            alt={elem.lang}
            style={{ ...flagStyle, left: `calc(${index * 20}px)` }} // Ajuste a posição horizontal conforme necessário
            onClick={() => setFlagLang(elem.lang)}
          />
        )})}
      </div>
      <div style={containerStyle}>
        {filteredTitles.map(title => (
          <div
            key={title.id}
            style={titleStyle}
          >
            <Link to={`/${title.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`}
              alt={`${title.title} ${title.id}`} // Title id aqui só na fase de desenvolvimento, após isto, retirar
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <br />
            {title.title}
            </Link>
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
    </>
  );
}


// Icones, crédito ao Roundicons: https://www.flaticon.com/br/autores/roundicons