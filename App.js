import React from 'react'
import './App.css'
import './style/homeLogin.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OldLogin from './pages/old_LoginPage'
import Login from './pages/LoginPage'
import Signup from './pages/SignUpPage'
import Identity from './pages/IdentityPages'
import Skill from './pages/SkillSelect'
import Learning from './pages/Learningpage'
import Playlist from './pages/PlaylistPage'
import Task from './pages/TaskPages'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/old_login' element={<OldLogin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/identity' element={<Identity />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/learning' element={<Learning />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/task' element={<Task />} />
        </Routes>
      </Router>
    </>
  )
}
export default App