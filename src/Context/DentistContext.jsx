import React, { createContext, useState, useContext } from 'react';

const DentistContext = createContext();

const DentistProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (dentist) => {
    // Logic to add a dentist to favorites
    setFavorites([...favorites, dentist]);
  };

  const removeFavorite = (dentist) => {
    // Logic to remove a dentist from favorites
    const updatedFavorites = favorites.filter((fav) => fav.id !== dentist.id);
    setFavorites(updatedFavorites);
  };

  return (
    <DentistContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </DentistContext.Provider>
  );
};

const useDentistContext = () => {
  return useContext(DentistContext);
};

export { DentistProvider, useDentistContext };