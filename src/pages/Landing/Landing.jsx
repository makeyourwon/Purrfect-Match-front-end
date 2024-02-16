import styles from './Landing.module.css'
import logo from '../../assets/logo-7.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Landing = ({ user }) => {

  const navigate = useNavigate();

  useEffect(() => {
    
    if (user) {
      navigate('/listings'); 
    }
  }, [user, navigate]); 


  const navigateToSignUp = () => {
    navigate('/signup');
  };

  // Function to navigate to the Log In page
  const navigateToLogIn = () => {
    navigate('/login');
  };

  return (
    <main className={`${styles.container} landing-page`} >
      <img src={logo} alt="Purrfect Match Logo" />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={navigateToSignUp}>Sign Up</button>
        <button className={styles.button} onClick={navigateToLogIn}>Log In</button>
      </div>
    </main>
  )
}

export default Landing
