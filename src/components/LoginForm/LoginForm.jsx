import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'

import * as authService from '../../services/authService'

const LoginForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/profile')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="username" className={styles.label}>Username</label>
        <input
          type="text"
          autoComplete="off"
          id="username"
          value={formData.username}
          name="username"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.button}>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
