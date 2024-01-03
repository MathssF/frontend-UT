import React, { useEffect, useState } from 'react';
import TitlesList from '../contexts/titlesList';

export default function Titles(genres) {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    TitlesList({ children: titles }).then(titlesArray => {
      setTitles(titlesArray);
    });
  }, []);

  if (!titles) {
    return <div>Loading...</div>;git 
  }
  
  return (
    <div>
      {titles.map(title => (
        <div key={title}>{title}</div>
      ))}
    </div>
  );
}