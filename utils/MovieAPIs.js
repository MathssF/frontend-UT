import React from 'react';
import Image from 'next/image';

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
          display: 'flex', flexDirection: 'row'
        }}>
          {elenco.map((elem, index) => (
            <div
              key={index}
              style={{
                width: '191px',
                height: '336px',
                padding: '8px',
                display: 'inline-block',
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${elem.profile_path}`}
                alt={elem.original_name}
                width={175}
                height={222}
                style={{ marginBottom: '16px' }}
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

  const elenco = fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));
};

export { movieCredits, movieElenco, movieRecomen };