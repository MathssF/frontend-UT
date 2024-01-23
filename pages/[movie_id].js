import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logoSVG from '../images/tmdbLogo.svg';
import {
  MovieDetails,
  RatingCircle,
  SinopseComponent,
} from '../utils/MovieComponents';
import {
  movieCredits
} from '../utils/MovieAPIs';

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
            backgroundColor: '#861040',
            width: '100%',
          }}>
            <div
              style={{
                padding: '70px 0 0 112px',
                display: 'flex',
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${filmContent.poster_path}`}
                alt={filmContent.title}
                style={{
                  maxWidth: '383px',
                  height: 'auto',
                  marginRight: '33px',
                  marginBottom: '-46px'
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h1  style={{
                  fontWeight: 'bold',
                  fontSize: '32px',
                  color: '#ffffff',
                  fontFamily: 'Roboto, sans-serif',
                }}>
                  {filmContent.title}
                </h1>
                <MovieDetails
                  movieData={filmContent}
                />
                <br />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <RatingCircle
                    voteRat={filmContent.vote_average}
                  />
                  <p
                    style={{
                      fontSize: '20px',
                      color: '#ffffff',
                      fontFamily: 'Roboto, sans-serif',
                      marginLeft: '12px',
                      maxWidth: '115px',
                    }}
                  >
                    Avaliação dos usuários
                  </p>
                </div>
                <br />
                <SinopseComponent overview={filmContent.overview} />
                <br />
                <movieCredits id={ movie_id }/>
              </div>
            </div>
          </div>
          

        </div>
      ) : <div style={{ textAlign: 'center' }}>Erro de API</div>}
    </div>
  )
}
