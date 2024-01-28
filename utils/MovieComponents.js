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

  const percentage = (voteRat * 10).toFixed(2);
  console.log('voteRat: ', voteRat);
  console.log('percentage: ', percentage);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  
  const progress = (percentage / 100) * circumference;
  const remaining = circumference - progress;
  
  return (
    <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    >
    <circle
      cx="30"
      cy="30"
      r={radius}
      fill="rgba(255, 255, 255, 0.1)"
      strokeWidth="5"
    />
    <circle
      cx="30"
      cy="30"
      r={radius - 2.5}
      fill="none"
      stroke="#14FF00"
      strokeWidth="5"
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
      fontSize="12"
      fill="#14FF00"
    >
      {percentage}%
    </text>
    </svg>
  );
};



const SinopseComponent = ({ overview }) => {
  return (
    <div>
      <h2 style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '20px', color: '#FFFFFF' }}>
        Sinopse
      </h2>
      <br />
      <p style={{ fontFamily: 'Roboto', fontSize: '16px', color: '#DDDDDD' }}>
        {overview}
      </p>
    </div>
  );
};

export { MovieDetails, RatingCircle, SinopseComponent };

// https://developer.themoviedb.org/reference/movie-credits
// https://developer.themoviedb.org/reference/movie-recommendations