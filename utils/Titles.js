import React, { useContext } from 'react';
import { TitlesContext } from '../contexts/titlesContext';
import TitlesComponent from './titlesComponent';

export default function Titles(genres) {
  // Iniciando
  const { titles, setTitles } = useContext(TitlesContext);
  
  return (
    <div>Opa</div>
  );
}