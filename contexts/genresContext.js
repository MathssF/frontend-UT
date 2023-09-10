import { createContext, useEffect, useState } from 'react';

const GenresContext = createContext();

const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <GenresContext.Provider value={{ genres }}>
        {children}
    </GenresContext.Provider>
  );
};

export { GenresContext, GenresProvider };
