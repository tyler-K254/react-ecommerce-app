import { useEffect, useState, useSyncExternalStore } from "react"
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../redux/slice/authSlice";
import ShowOnLogIn from "../hiddenLink/hiddenLink";




const logo = (
    <div className={styles.logo}>
        <Link to ='/'>
            {/* <h2> */}
            {/* e<span>Shop</span>. */}
            <img className= {styles.klogo} src="/KA logo clear.png" alt="logo" />
            {/* </h2> */}
        </Link>
        </div>
)

const logo2 = (
    <div className={styles.logo2}>
        <Link to ='/'>
            {/* <h2> */}
            {/* e<span>Shop</span>. */}
            <img className= {styles.klogo2} src="/KA logo2 clear.png" alt="logo" />
            {/* </h2> */}
        </Link>
        </div>
)

const cart =(
    <span className={styles.cart}>
                    <Link to="/cart">
                        Cart
                        <FaShoppingCart size={18}/>
                        <p style={{}}>0</p>
                    </Link>
                </span>
)

const activeLink = ({isActive}) => 
(isActive ? `${styles.active}` : '')



const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [displayName, setdisplayName] = useState('')
    const navigate = useNavigate()

    const dispatch = useDispatch()

    //Monitor Currently signed in user 
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //console.log(user)
          
          if (user.displayName === null){
            const u1 = user.email.substring(0, user.email.indexOf("@"));
            const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
            
            setdisplayName(uName)
          }else{
            setdisplayName(user.displayName)  
          }
          

          dispatch(SET_ACTIVE_USER({
            email: user.email, 
            userName: user.displayName ? user.displayName : displayName, 
            userID: user.uid,
          }))
        } else {
          // User is signed out
          setdisplayName('')
          dispatch(REMOVE_ACTIVE_USER())
        }
      });
    }, [dispatch, displayName])
    
  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }
  
  const hideMenu = () => {
    setShowMenu(false)
  }

  const logoutUser = () => {
    signOut(auth).then(() => {
        toast.success('Logout successfully')
        navigate('/')
      }).catch((error) => {
        toast.success(error.message)
      });
  } 




  return (
    <header>
      <div className={styles.header}>
        { logo }

        <nav className={showMenu ? `${styles["show-nav"]}` : `${styles['hide-nav']}`}>

            <div className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` : `${styles['nav-wrapper']}`}
            onClick={hideMenu}
            >
            </div>

            <ul onClick={hideMenu}>
                <li className={styles["logo-mobile"]}>
                {logo2}
                <FaTimes size={62} color="#fff" onClick={hideMenu}/>
                </li>
                <li>
                <NavLink to="/" className={activeLink}>
                    Home
                </NavLink>
                </li>
                <li>
                <Link to="/about-us" className={activeLink}>
                    About Us
                </Link>
                </li>
                <li>
                <NavLink to="/contact" className={activeLink}>
                    Contact us
                </NavLink>
                </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
                <span className={styles.links}>
                  <a href="#home">
                      <FaUserCircle size={16}/>
                      Hi, {displayName}
                    </a>
                    <NavLink to="/login" className={activeLink}>Login</NavLink>
                    <NavLink to="/register" className={activeLink}>Register</NavLink>
                    <NavLink to="/order-history" className={activeLink}>My Orders</NavLink>
                    <ShowOnLogIn>
                    <NavLink to="/" onClick={logoutUser}>Log out</NavLink>
                    </ShowOnLogIn>
                </span>
                { cart }
            </div>
            
        </nav>

        <div className={styles["menu-icon"]}>
        { cart }
        <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
