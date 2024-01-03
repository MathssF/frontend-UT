import React, { useEffect, useState } from 'react';
import TitlesList from '../contexts/titlesList';

export default function Titles({ genres }) {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    TitlesList({ children: titles }).then(titlesArray => {
      setTitles(titlesArray);
    });
  }, []);

  // Certifique-se de que 'titles' é um array antes de tentar mapear sobre ele
  if (!Array.isArray(titles) || titles.length === 0) {
    return <div><h1>Nenhum título disponível</h1></div>;
  }
  const filteredTitles = genres.length > 0
    ? titles.filter(title => title.genre_ids.some(genreId => genres.includes(genreId)))
    : titles;

  return (
    <div>
      {filteredTitles.map(title => (
        <div key={title.id}>{title.title}</div>
      ))}
    </div>
  );
}