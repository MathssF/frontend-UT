// import React, { useContext } from 'react';
import { useRouter } from 'next/router';

export default function idFilm() {
  const router = useRouter();
  const { film_id } = router.query;

  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/movie/${film_id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0'
    }
  };

  const film_content = fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

  return (
    <div>
      <h1>Filme: {film_id}</h1>
    </div>
  )
}
