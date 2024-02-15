import { NavLink, Link} from 'react-router-dom'
import './NavBar.css'
import { useEffect,useState } from 'react'
import * as profileService from '../../services/profileService'


const NavBar = ({ user, handleLogout }) => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const getThisProfile = async () => {
      const thisProfile = await profileService.getProfile()
      setProfile(thisProfile) 
    }
    getThisProfile()
  },[])
  return (
    <nav className="navbar">
      <div className="logo"> PurrfectMatch</div>
      <ul className="nav-links">
        {user ? (
          <>
          <li>Welcome, {profile.name}</li>
          <li><NavLink className="nav-link" to="/profile">My Profile</NavLink></li>
          <li><NavLink className="nav-link" to="/favorites">My Favorites</NavLink></li>
          <li><NavLink className="nav-link" to="/listings">Animal Listing</NavLink></li>
          <li><NavLink className="nav-link" to="" onClick={handleLogout}>Log out</NavLink></li>
          </>
        ) : (
          <>
          <li><NavLink className="nav-link" to="/login">Log In</NavLink></li>
          <li><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>
          <li><NavLink className="nav-link" to="/">Home</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
