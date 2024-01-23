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

const RatingCircle = ({ voteRat }) => {

    const percentage = voteRat * 10;
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
          //  fill="none"
          //  stroke="#f0f0f0" // cor de fundo do círculo (cinza claro)
          //  fill="#FFFFFF"
          fill="rgba(255, 255, 255, 0.1)"
          strokeWidth="5"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="#14FF00" // cor do círculo preenchido (verde)
          strokeWidth="5"
        //   strokeDasharray={`${progress} ${remaining}`}
        //   strokeDashoffset="0"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90 30 30)"
          border="-3px"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Roboto"
          fontWeight="bold"
          fontSize="16"
          fill="#14FF00" // cor do texto (branco)
        >
          {percentage}%
        </text>
      </svg>
    );
  };

export { MovieDetails, RatingCircle };
