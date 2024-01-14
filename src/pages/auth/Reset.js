import React, { useState } from 'react';
import  styles  from './auth.module.scss';
import resetImg from "../../assets/reset.png"
import { Link } from  "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import Card from '../../components/card/Card.js';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config.js';
import { sendPasswordResetEmail } from 'firebase/auth';
import Loader from '../../components/loader/Loader.js';

const Reset = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState('')

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true)
    
    sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false)
    toast.success('Check your email for a reset link')
    

  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });
  } 

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset Password" width='600px' />
      </div>

      <Card>
      <div className={styles.form}>
        <h2>Reset Password</h2>

        <form onSubmit={resetPassword}>
            <input type="text" placeholder='Email'
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)}  />
            
            <button type='submit' className='--btn --btn-purple --btn-block'>Reset Password</button>
            <div className={styles.links}>
              <p><Link to='/login'>- Log in</Link></p>
              <p><Link to='/register'>- Register</Link></p>
            </div>
            <p>-- or --</p>
        </form>
       
    
      </div>
      </Card>

    </section>
    </>
  )
}

export default Reset
