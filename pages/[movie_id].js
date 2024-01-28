import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  MovieDetails,
  RatingCircle,
  SinopseComponent,
} from '../utils/MovieComponents';
import {
  movieCredits,
  movieElenco,
} from '../utils/MovieAPIs';
import Header from '../utils/Header.js';

const key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0';

export default function idFilm() {
  const router = useRouter();
  const { movie_id } = router.query;
  const [filmContent, setFilmContent] = useState(null);
  const [lang, setLang] = useState('en-US');
  const [creditsContent, setCreditsContent] = useState(null);
  const [elencoContent, setElencoContent] = useState(null);

  useEffect(() => {
    const fetchDataFilm = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=${lang}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: key,
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

    const fetchCredits = async () => {
      const credits = await movieCredits(movie_id);
      setCreditsContent(credits);
    };

    const fetchElenco = async () => {
      const elenco = await movieElenco(movie_id);
      setElencoContent(elenco);
    }

    if (movie_id) {
      fetchCredits();
      fetchElenco();
    }
  }, [movie_id]);

  return (
    <div>
      <Header />
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
                <div
                  // style={{
                  //   marginLeft: '112px',
                  // }}
                >
                  {creditsContent}
                </div>
              </div>
            </div>
          </div>
          {elencoContent}

        </div>
      ) : <div style={{ textAlign: 'center' }}>Erro de API</div>}
    </div>
  )
}
