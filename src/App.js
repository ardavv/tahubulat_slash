import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "./style/homeLogin.css"
import Login from './pages/LoginPage'
import Signup from './pages/SignUpPage'
import Identity from './pages/IdentityPages'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/identity' element={<Identity />} />
        </Routes>
      </Router>
    </>
  )
}
export default App