
import React, { useSyncExternalStore } from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedin } from '../../redux/slice/authSlice'



const ShowOnLogIn = ({children}) => {
    const isLoggedin = useSelector(selectIsLoggedin)

    if(isLoggedin){
        return children
    }
    return null

}

export default ShowOnLogIn
