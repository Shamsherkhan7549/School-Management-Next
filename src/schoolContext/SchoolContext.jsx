'use client';
import { createContext, useState, useContext } from 'react';

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [schools, setSchools] = useState([])

  return (
    <SchoolContext.Provider value={{ schools, setSchools }}>
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchoolContext = () => useContext(SchoolContext);
