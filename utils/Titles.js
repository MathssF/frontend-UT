import React, { useEffect, useState } from 'react';
import TitlesList from '../contexts/titlesList';

export default function Titles(genres) {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    TitlesList({ children: [] }).then(titlesArray => {
      setTitles(titlesArray);
    });
  }, []);
  
  return (
    <div>
      {titles.map(title => (
        <div key={title}>{title}</div>
      ))}
    </div>
  );
}