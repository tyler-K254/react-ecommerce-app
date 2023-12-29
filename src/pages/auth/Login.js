import React from 'react';
import  styles  from './auth.module.scss';
import loginImg from "../../assets/login.png"
import { Link } from  "react-router-dom"
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width='600px' />
      </div>

      <div className={styles.form}>
        <h2>Login</h2>
        <form >
            <input type="text" placeholer='Email'
            required/>
            <input type="password" 
            placeholer='Paassword'required/>
            <button className='--btn --btn-purple --btn-block'>Login</button>
            <div className={styles.Links}>
                <Link to='/reset'>Reset Password</Link>
            </div>
            <p>-- or --</p>
        </form>
        <button className='--btn --btn-primary --btn-block'><div style={{   padding: '1px', borderRadius: '2px', display: 'inline-block' }}>
    <FcGoogle />
  </div> 
    Log in With Google</button>
      </div>
    </section>
  )
}

export default Login
