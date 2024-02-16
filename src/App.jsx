import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profile'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import AnimalPage from './pages/AnimalPage/AnimalPage'
import AnimalDetails from './pages/AnimalDetails/AnimalDetails'

import * as authService from './services/authService'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())

  function handleLogout() {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  function handleSignupOrLogin() {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute user={user}>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listings"
          element={
            <ProtectedRoute user={user}>
              <AnimalPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/animals/:animalId"
          element={
            <ProtectedRoute user={user}>
              <AnimalDetails />
            </ProtectedRoute>
          } />
      </Routes>
    </>
  )
}

export default App