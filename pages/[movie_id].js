import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  MovieDetails,
  RatingCircle,
  SinopseComponent,
  movieCredits,
  movieElenco,
  movieTeasers,
  movieRecomen,
} from '../utils/MovieComponents';
import Header from '../utils/Header.js';
import dotenv from 'dotenv';
dotenv.config();

const dotenvKey = process.env.API_KEY;
console.log ('.env Key: ', dotenvKey);

const key = process.env.API_Key;

export default function idFilm() {
  const router = useRouter();
  const { movie_id } = router.query;
  const [filmContent, setFilmContent] = useState(null);
  const [lang, setLang] = useState('en-US');
  const [creditsContent, setCreditsContent] = useState(null);
  const [elencoContent, setElencoContent] = useState(null);
  const [teaserContent, setTeaserContent] = useState(null);
  const [recomendsContent, setRecomendsContent] = useState(null);

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

    const fetchCredits = async () => {
      const credits = await movieCredits(movie_id);
      setCreditsContent(credits);
    };

    const fetchElenco = async () => {
      const elenco = await movieElenco(movie_id);
      setElencoContent(elenco);
    }

    const fetchTeaser = async () => {
      const teaser = await movieTeasers(movie_id);
      setTeaserContent(teaser);
    }

    const fetchRecomends = async () => {
      const recomends = await movieRecomen(movie_id);
      setRecomendsContent(recomends);
    }

    if (movie_id) {
      fetchDataFilm();
      fetchCredits();
      fetchElenco();
      fetchTeaser();
      fetchRecomends();
    }
  }, [movie_id]);

  return (
    <div
      style={{
        backgroundColor: '#E5E5E5',
      }}
    >
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
                  marginBottom: '-46px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
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
                <div>
                  {creditsContent}
                </div>
              </div>
            </div>
          </div>
          {elencoContent}
          <br />
          {teaserContent}
          <br />
          {recomendsContent}
        </div>
      ) : <div style={{ textAlign: 'center' }}>Erro de API</div>}
    </div>
  )
}
