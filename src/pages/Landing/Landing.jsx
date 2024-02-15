import styles from './Landing.module.css'
import logo from '../../assets/logo-7.png'

const Landing = ({ user }) => {
  return (
    <main className={`${styles.container} landing-page`} >
    <img src={logo} alt="Purrfect Match Logo" />
    <div className={styles.buttonContainer}>
    <button className={styles.button}>Sign Up</button>
    <button className={styles.button}>Log In</button>
    </div>
    </main>
  )
}

export default Landing
