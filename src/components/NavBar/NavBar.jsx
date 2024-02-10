import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo"> PurrfectMatch</div>
      <ul className="nav-links">
        {user ? (
          <>
          <li>Welcome, {user.name}</li>
          <li><NavLink className="nav-link" to="/profile">In the works</NavLink></li>
          <li><NavLink className="nav-link" to="/home"></NavLink>Home?</li>
          <li><NavLink className="nav-link" to="/favorites">Favs</NavLink></li>
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
//     <>
//       {user ?
//         <nav>
//           <ul>
//             <li>Welcome, {user.name}</li>
//             <li><Link to="/profiles">Profiles</Link></li>
//             <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
//           </ul>
//         </nav>
//       :
//         <nav>
//           <ul>
//             <li className="appName">PurrfectMatch</li>
//             <li><Link to="/login">Log In</Link></li>
//             <li><Link to="/signup">Sign Up</Link></li>
//             <li><Link to="/profiles">Profiles</Link></li>
//           </ul>
//         </nav>
//       }
//     </>
//   )
// }

export default NavBar
