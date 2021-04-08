import React, { createContext, useState, useContext } from 'react'

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [carts, setCarts] = useState([{
    name: 'product1',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    number: 1
  }, {
    name: 'product2',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    number: 2
  }, {
    name: 'product2',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    number: 5
  }])

  return (
    <DataContext.Provider value={{ carts, setCarts }}>
      {children}
    </DataContext.Provider>
  )
}

export const useAuth = () => useContext < any > (DataContext)