import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logoSVG from '../images/tmdbLogo.svg';

export default function idFilm() {
  const router = useRouter();
  const { movie_id } = router.query;
  const [filmContent, setFilmContent] = useState(null);
  const [lang, setLang] = useState('en-US');

  useEffect(() => {
    const fetchDataFilm = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=${lang}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0'
        }
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setFilmContent(data);
        
      } catch (error) {
        console.error('Erro na chamada da API', error);
      }
    }
      
    if (movie_id) {
      fetchDataFilm();
    }
  }, [movie_id]);

  return (
    <div>
      <header
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            backgroundColor: '#E73980',
            height: '54px',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Image
            src={logoSVG}
            alt="Logo"
            width={180}
            height={24}
            style={{ position: 'absolute', left: '112px' }}
          />
        </div>
      </header>
      {filmContent ? (
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <div
            style={{
              margin: '70px 112px 0 0',
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${filmContent.poster_path}`}
              alt={filmContent.title}
              style={{
                maxWidth: '186px',
                height: 'auto',
              }}
            />
          </div>
          <h1 style={{ textAlign: 'center' }}>{filmContent.title}</h1>
        </div>
      ) : <div style={{ textAlign: 'center' }}>Erro de API</div>}
    </div>
  )
}
