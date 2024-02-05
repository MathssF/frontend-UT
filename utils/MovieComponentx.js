import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { movieCreditsAPI, movieElencoAPI, movieTeasersAPI, movieRecomenAPI } from './MovieAPIx.js';

const movieCredits = async (id) => {
  try {
    const credits = await movieCreditsAPI(id);

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {credits.map((elem, index) => (
          <div key={index} style={{ flex: '0 0 33%', marginBottom: '16px' }}>
            <p style={{ fontWeight: 'bold', color: 'white' }}>{elem.name}</p>
            <p style={{ color: 'white' }}>{elem.known_for_department}</p>
          </div>
        ))}
      </div>
    );
  } catch (err) {
    console.log('erro no MovieAPIs');
    console.error('error:', err);
    return (<p>Erro de API</p>);
  }
};

const movieElenco = async (id) => {
  try {
    const elenco = await movieElencoAPI(id);

    return (
      <div style={{ marginLeft: '42px' }}>
        <p style={{
          marginBottom: '24px', marginTop: '74px',
          fontWeight: 'bold', fontSize: '28px', fontFamily: 'Roboto',
       }}>Elenco original:</p>
        <div style={{ overflowX: 'scroll',
          width: '100%', maxWidth: '1100px', height: '100%', maxHeight: '400px',
          display: 'flex', flexDirection: 'row',
        }}>
          {elenco.map((elem, index) => (
            <div
              key={index}
              style={{
                width: '191px',
                height: '336px',
                padding: '8px',
                marginRight: '16px',
                marginBottom: '26px',
                borderRadius: '4px',
                display: 'inline-block',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                background: '#FFFFFF'
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${elem.profile_path}`}
                alt={elem.original_name}
                width={175}
                height={222}
                style={{
                  marginBottom: '16px',
                  borderRadius: '4px',
                }}
              />
              <p style={{ marginBottom: '4px', fontWeight: 'bold', fontSize: '18px', fontFamily: 'Roboto' }}>
                {elem.original_name}
              </p>
              <p style={{ fontSize: '16px', fontFamily: 'Roboto' }}>
                {elem.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.log('erro no MovieAPIs');
    console.error('error:', err);
    return (<p>Erro de API</p>);
  };
};

const movieTeasers = async (id) => {
  try {
    const latestTrailer = await movieTeasersAPI(id);

    if (latestTrailer) {
      return (
        <div style={{ marginLeft: '112px', width: 'calc(100% - 112px)' }}>
          <p style={{
            marginBottom: '24px', marginTop: '74px',
            fontWeight: 'bold', fontSize: '28px', fontFamily: 'Roboto',
          }}>Trailer:</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${latestTrailer.key}`}
            title={latestTrailer.name}
            allowFullScreen
          />
        </div>
      )
    } else {
      return null;
    }
  } catch (err) {
    console.log('erro na API de Vídeo');
    console.error('error:', err);
    return null;
  }
};

const movieRecomen = async (id) => {
  try {
    const recomends = await movieRecomenAPI(id);
    
    return (
      <div style={{ whiteSpace: 'nowrap' }}>
        <p style={{
            marginBottom: '24px', marginTop: '74px',
            fontWeight: 'bold', fontSize: '28px', fontFamily: 'Roboto',
        }}>Recomendados:</p>
        <br />
        {recomends.map((title) => (
          <div key={title.id} style={{
            display: 'inline-block',
            margin: '0 12px 0 0',
            width: '200px',
            verticalAlign: 'top',
            }}>
            <Link href={`/${title.id}`} passHref legacyBehavior>
              <a style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                whiteSpace: 'normal',
              }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`}
                  alt={`${title.title} ${title.id}`}
                  style={{
                    maxHeight: '320px',
                    maxWidth: '176px',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
                <br />
                <strong style={{ fontWeight: 'bold', display: 'block' }}>{title.title}</strong>
              </a>
            </Link>
            <span style={{ whiteSpace: 'normal', display: 'block' }}>
              {new Date(title.release_date).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
        ))}
      </div>
    )
  } catch (err) {
    console.error('Erro na API de recomendados:', err);
    return <></>;
  };
};

export { movieCredits, movieElenco, movieTeasers, movieRecomen };
