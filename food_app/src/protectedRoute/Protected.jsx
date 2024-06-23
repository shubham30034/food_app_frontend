import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Protected = ({isAuthenticated,children}) => {
 if(!isAuthenticated) {
    return <Navigate to={"/"}/>
 }

 return children ? children : <Outlet/>
}

export default Protected