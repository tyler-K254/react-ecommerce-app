import {useState} from 'react'
import styles from './auth.module.scss'
import registerImg from '../../assets/register.png'
import { Link, useNavigate } from  "react-router-dom"
import Card from '../../components/card/Card.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/config'
import Loader from '../../components/loader/Loader';


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const registerUser =(e)=> {
        e.preventDefault()
        if (password !== cPassword){
            toast.error("Passwords do not match")
        }
        setIsLoading(true)
        
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("Registration Successful...")
    navigate('/login')
    // ...
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
  
    }


  return (
    <>
    <ToastContainer />
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>

      <Card>
      <div className={styles.form}>
        <h2>Regester</h2>
        <form onSubmit={registerUser}>
            <input type="text" placeholder='Email'
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            />
            <input type="password" 
            placeholder='Password' 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
             <input type="password" 
            placeholder='Confirm Password' 
            required 
            value={cPassword} 
            onChange={(e) => setCPassword(e.target.value)} 
            />
            <button type='submit'className='--btn --btn-purple --btn-block'>Register</button>
            
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
    </>
  )
}

export default Register
