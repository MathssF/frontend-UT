import React, { useContext } from 'react';
import { GenresProvider } from '../contexts/genresContext';
import Desktop from '../utils/Desktop';

export default function IndexMenu() {
  
  return (
    <GenresProvider>
      <Desktop />
    </GenresProvider>
  );
}
