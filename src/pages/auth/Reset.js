import React from 'react';
import  styles  from './auth.module.scss';
import resetImg from "../../assets/reset.png"
import { Link } from  "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import Card from '../../components/card/Card.js';

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset Password" width='600px' />
      </div>

      <Card>
      <div className={styles.form}>
        <h2>Reset Password</h2>
        <form >
            <input type="text" placeholder='Email'
            required />
            
            <button className='--btn --btn-purple --btn-block'>Login</button>
            <div className={styles.links}>
              <p><Link to='/login'>- Log in</Link></p>
              <p><Link to='/register'>- Register</Link></p>
            </div>
            <p>-- or --</p>
        </form>
       
    
      </div>
      </Card>

    </section>
  )
}

export default Reset
