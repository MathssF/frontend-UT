import React, { useContext } from 'react';
import { GenresContext } from '../contexts/genresContext';
import GenresComponent from './genresComponent';
import Titles from './Titles'

export default function Desktop() {
  const { genres, setGenres } = useContext(GenresContext);

  const handleGenreSelect = (id) => {
    setGenres(prevGenres => prevGenres.map(genre =>
      genre.id === id ? { ...genre, selected: !genre.selected } : genre
    ))
  }

  console.log('LISTA GENEROS: ', genres);

  const selectedGenreIds = genres
    .filter(genre => genre.selected)
    .map(genre => genre.id);

  console.log('LISTA SELECIONADOS: ', selectedGenreIds);

  return (
    <div
      style={{
        padding: '0px',
        margin: '0px',
        backgroundColor: '#E73980', // Cor de fundo para a DIV TMDB
        height: '54px', // Altura para a DIV TMDB
      }}
    >
      <header>
        <div>
          <p>TMBD</p>
        </div>
      </header>

      <main
        style={{
          backgroundColor: '#861040', // Cor de fundo para a MAIN
          height: '450px', // Altura máxima para a MAIN
          overflow: 'auto', // Adicionado para permitir rolar se necessário
        }}
      >
        <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>
        <p>Filtre por:</p>
        <GenresComponent
          genres={genres}
          onGenreSelect={handleGenreSelect}
        />
      </main>

      <div
        style={{
          backgroundColor: 'white', // Cor de fundo para a DIV Titles
          margin: 'auto', // Centralizar a DIV Titles
          width: '80%', // Largura máxima para a DIV Titles
        }}
      >
        <Titles genres={selectedGenreIds} />
      </div>

      <footer>
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
}
