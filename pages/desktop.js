import React, { useContext } from 'react';
import { GenresContext } from '../contexts/genresContext';

export default function Desktop() {
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
        { genres.map((index) => (
          <button
            key={index.id}
          >
            { index.name }
          </button>
        )) }
      </main>

      <footer>
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
}

// export default Desktop;