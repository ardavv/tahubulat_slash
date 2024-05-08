import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/LoginPage'
import Signup from './pages/SignUpPage'
import Identity from './pages/IdentityPages'
import Skill from './pages/SkillSelect'
import Learning from './pages/Learningpage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/identity' element={<Identity />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/learning' element={<Learning />} />
        </Routes>
      </Router>
    </>
  )
}
export default App