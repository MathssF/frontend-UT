import React, { useContext } from 'react';
import { GenresContext } from '../contexts/genresContext';

export default function Desktop() {
  // const fetch = require('node-fetch');

  // const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxZWQxMzcwZmJkODliMWYwZTdlZjY5N2FkYjk4ZSIsInN1YiI6IjY0ZDgzNjQ2MDAxYmJkMDBjNmM3M2NjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GsCxynMfYUeSw03wyxd1BpvE5T6IdFKuQmYuG-Ap-0'
  //   }
  // };

  // const genres = fetch(url, options)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.error('error:' + err));

  const { genres } = useContext(GenresContext);
  
  return (
    <div>
      <header>
        <div>
          <p>TMBD</p>
        </div>
      </header>

      <main>
        <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>

      </main>

      <footer>
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
}

// export default Desktop;