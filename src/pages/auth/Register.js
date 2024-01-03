import styles from './auth.module.scss'
import registerImg from '../../assets/register.png'
import { Link } from  "react-router-dom"
import Card from '../../components/card/Card.js';

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>

      <Card>
      <div className={styles.form}>
        <h2>Regester</h2>
        <form >
            <input type="text" placeholder='Email'
            required />
            <input type="password" 
            placeholder='Password' required/>
             <input type="password" 
            placeholder='Confirm Password' required/>
            <button className='--btn --btn-purple --btn-block'>Register</button>
            
        </form>
       
    <span className={styles.register}>
        <p>Already have an account? </p>
        <Link to='/login'>Log in</Link>
      </span>
      </div>
      </Card>

      <div className={styles.img}>
        <img src={registerImg} alt="register" width='600px' />
      </div>

    </section>
  )
}

export default Register
