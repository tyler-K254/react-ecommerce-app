import React from 'react';
import  styles  from './auth.module.scss';
import loginImg from "../../assets/login.png"
import { Link } from  "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import Card from '../../components/card/Card.js';
// import Card from "../../components/card/Card.js"


const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width='600px' />
      </div>

      <Card>
      <div className={styles.form}>
        <h2>Login</h2>
        <form >
            <input type="text" placeholder='Email'
            required />
            <input type="password" 
            placeholder='Password' required/>
            <button className='--btn --btn-purple --btn-block'>Login</button>
            <div className={styles.Links}>
                <Link to='/reset'>Reset Password</Link>
            </div>
            <p>-- or --</p>
        </form>
        <button className='--btn --btn-primary --btn-block'>
            <div className={styles['google-icon-div']}>
        <FcGoogle />
  </div> 
    Log in With Google</button>
    <span className={styles.register}>
        <p>Don't have an account? </p>
        <Link to='/register'>Register</Link>
      </span>
      </div>
      </Card>

    </section>
  )
}

export default Login
