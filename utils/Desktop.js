import React, { useContext } from 'react';
import { GenresContext } from '../contexts/genresContext';
import GenresComponent from './genresComponent';
// import Image from 'next/image';
import Titles from './Titles'
// import logoSVG from '../images/tmdbLogo.svg';
import Header from './Header.js';


export default function Desktop() {
  const { genres, setGenres } = useContext(GenresContext);

  const handleGenreSelect = (id) => {
    setGenres(prevGenres => prevGenres.map(genre =>
      genre.id === id ? { ...genre, selected: !genre.selected } : genre
    ))
  }

  const selectedGenreIds = genres
    .filter(genre => genre.selected)
    .map(genre => genre.id);

  return (
    <div style={{ border: 0, margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <Header />
      {/* <header
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
      </header> */}

      <main
        style={{
          backgroundColor: '#861040',
          // height: '450px',
          overflow: 'auto',
          margin: 0,
          padding: '30px 0 84px 0',
        }}
      >
        <p style={{
          fontSize: '48px',
          marginTop: '85px',
          color: 'white',
          maxWidth: '781px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <b>Milhões de filmes, séries e pessoas para descobrir. Explore já.</b>
        </p>
        <p
          style={{
            textAlign: 'center',
            color: 'white',
            padding: '40px 0 16px 0',
          }}
        >Filtre por:</p>
        <GenresComponent
          genres={genres}
          onGenreSelect={handleGenreSelect}
          style={{
            marginBottom: '84px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </main>

      <div
        style={{
          backgroundColor: 'white',
          margin: '30px 0 0',
          padding: '20px',
        }}
      >
        <Titles genres={selectedGenreIds} />
      </div>

      <footer
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
}
