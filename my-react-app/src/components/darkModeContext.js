import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const DarkModeContext = createContext();

// Provider Component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleColorMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleColorMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
