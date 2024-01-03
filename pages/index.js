import '../styles/styles.css';
import React, { useContext } from 'react';
import { GenresProvider } from '../contexts/genresContext';
import Desktop from '../utils/Desktop';

export default function IndexMenu() {
  
  return (
    <GenresProvider style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <div style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
        <Desktop />
      </div>
    </GenresProvider>
  );
}
