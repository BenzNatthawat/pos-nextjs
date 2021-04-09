import React, { createContext, useState, useContext } from 'react'

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [carts, setCarts] = useState([])

  return (
    <DataContext.Provider value={{ carts, setCarts }}>
      {children}
    </DataContext.Provider>
  )
}

export const useAuth = () => useContext < any > (DataContext)