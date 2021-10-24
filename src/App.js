import React, { useState } from 'react'
import './Styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/UI/Navbar/Navbar'
import AppRouter from './Components/UI/AppRouter/AppRouter'
import { AuthContext } from './context/context'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App



