import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div>
      <AppRouter/>
    </div>
  )
}

export default App