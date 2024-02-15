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
          <li>Welcome, {user.username}</li>
          <li><NavLink className="nav-link" to="/profile">{profile?.name}'s Profile</NavLink></li>
          <li><NavLink className="nav-link" to="/home"></NavLink>Home</li>
          <li><NavLink className="nav-link" to="/favorites">Favorites</NavLink></li>
          <li><NavLink className="nav-link" to="/listings">Availible Pets</NavLink></li>
          <li><NavLink className="nav-link" to="" onClick={handleLogout}>Log out</NavLink></li>
          </>
        ) : (
          <>
          <li><NavLink className="nav-link" to="/login">log in</NavLink></li>
          <li><NavLink className="nav-link" to="/signup">signup</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
