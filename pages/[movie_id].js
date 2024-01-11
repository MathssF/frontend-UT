// import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function idFilm() {
  const router = useRouter();
  const { movie_id } = router.query;
  const [filmContent, setFilmContent] = useState(null);

  // const fetch = require('node-fetch');

  // const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0'
  //   }
  // };

  // const film_content = fetch(url, options)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.error('error:' + err));

  useEffect(() => {
    const fetchDataFilm = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0'
        }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setFilmContent(data);
      if (movie_id) {
        fetchDataFilm();
      }
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
          }}
        >
          <p>TMBD</p>
        </div>
      </header>
      <img
            src={`https://image.tmdb.org/t/p/w500/${filmContent.poster_path}`}
            alt={filmContent.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
      <h1>{filmContent.title}</h1>
    </div>
  )
}
