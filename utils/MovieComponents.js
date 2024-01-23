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

const RatingCircle = ({ percentage }) => {
    const radius = 30; // raio do círculo
    const circumference = 2 * Math.PI * radius; // circunferência do círculo
  
    const progress = (percentage / 100) * circumference;
    const remaining = circumference - progress;
  
    return (
      <svg width="60" height="60" viewBox="0 0 60 60">
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="#f0f0f0" // cor de fundo do círculo (cinza claro)
          strokeWidth="5"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="#4CAF50" // cor do círculo preenchido (verde)
          strokeWidth="5"
          strokeDasharray={`${progress} ${remaining}`}
          strokeDashoffset="0"
          strokeLinecap="round"
          transform="rotate(-90 30 30)"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Roboto"
          fontSize="12"
          fill="#ffffff" // cor do texto (branco)
        >
          {percentage}%
        </text>
      </svg>
    );
  };

export { MovieDetails, RatingCircle };
