//// use use context to create a toggle function that will allow the user to change the paette mode from light to dark and vice versa

import { createContext, useEffect } from 'react';
import { defaultSettings } from '../../config/config';

const initialState = {
  ...defaultSettings,
  toggleThemeMode: () => {},
};

export const SettingsContext = createContext(initialState);

export const SettingsProvider = ({ children }) => {
  const toggleThemeMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
  };

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  return (
    <SettingsContext.Provider
      value={{
        themeMode,
        toggleThemeMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
