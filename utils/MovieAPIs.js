import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { json } from 'react-router-dom';

const key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0';

const movieCredits = async (id) => {
  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key,
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log('json: ', json);
    
    const credits = json.cast.slice(0, 6);

    console.log('credits: ', credits);

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
  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key,
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    
    const elenco = json.cast.slice(0, 12);

    return (
      <div style={{ marginLeft: '42px' }}>
        <p style={{
          marginBottom: '24px', marginTop: '74px',
          fontWeight: 'bold', fontSize: '28px', fontFamily: 'Roboto',
       }}>Elenco original</p>
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
  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: key,
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const trailers = json.results.filter((video) => video.type === 'Trailer');
    trailers.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    if (trailers.length > 0) {
      const latestTrailer = trailers[0];
      const latestsTrailers = [trailers[0], trailers[1]]

      return (
        <div>
          <p style={{
            marginBottom: '24px', marginTop: '74px',
            fontWeight: 'bold', fontSize: '28px', fontFamily: 'Roboto',
            marginLeft: '112px',
          }}>Trailers</p>
          {/* <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${latestTrailer.key}`}
            title={latestTrailer.name}
            allowFullScreen
          /> */}
          {latestsTrailers.map((trailer, index) => (
            <div key={index}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      )
    } else {
      return null;
    }
  } catch (err) {
    console.log('erro na API de Vídeo');
    console.error('error:', err);
    return (<></>);
  }
};

const movieRecomen = async (id) => {
  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key,
    }
  };

  try {
    const response = await fetch(url, options);
    console.log('Response: ', response);
    const json = await response.json();
    const recomends = json.results.slice(0, 5);
    console.log('recomendados: ', recomends);
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