import { useState } from 'react';
import  styles  from './auth.module.scss';
import loginImg from "../../assets/login.png"
import loginPhoneImg from "../../assets/login-phone.png";
import { Link, useNavigate } from  "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import Card from '../../components/card/Card.js';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config.js';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader.js';

// import Card from "../../components/card/Card.js"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState('')

    const navigate = useNavigate()

    const loginUser = (e) => {
      e.preventDefault();
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setIsLoading(false)
    toast.success('Login Successful')
    navigate('/')

  })
  .catch((error) => {
    toast.error(error.message)
  });
    }
    
  // Login with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    toast.success('Login Successfully')
    navigate('/')
    
  }).catch((error) => {
    // Handle Errors here.
    toast.error(error.message)
    // ...
  });
  }

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login"  />
      </div>

      <Card>
      <div className={styles.form}>
        <h2>Login</h2>
        <form onSubmit={loginUser}>
            <input type="text" placeholder='Email'
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            />
            <input type="password" 
            placeholder='Password' required
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
             />
            <button type='submit' className='--btn --btn-purple --btn-block'>Login</button>
            <div className={styles.Links}>
                <Link to='/reset'>Reset Password</Link>
            </div>
            <p>-- or --</p>
        </form>
        <button className='--btn --btn-primary --btn-block' onClick={signInWithGoogle}>
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
    </>
  )
}

export default Login
