import React from 'react';

const MovieDetails = ({ movieData }) => {
  const {
    adult,
    release_date,
    genres,
    runtime,
  } = movieData;

  const ageRating = adult ? 'Para Maiores' : 'Livre';

  const formattedReleaseDate = new Date(release_date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const genreNames = genres.map(genre => genre.name).join(', ');

  return (
    <p style={{ fontFamily: 'Roboto', fontSize: '18px', color: '#ffffff', textAlign: 'left' }}>
      {`${ageRating} | ${formattedReleaseDate} | ${genreNames} | ${runtime}min`}
    </p>
  );
};

export default MovieDetails;
