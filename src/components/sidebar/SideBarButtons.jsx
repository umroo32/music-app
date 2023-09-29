import React from 'react'
import './sidebarbuttons.css'
import {NavLink, useLocation} from 'react-router-dom'
import { IconContext } from 'react-icons'
const SideBarButtons = ({to,title,icon}) => {
    const Location = useLocation();

    const isActive = Location.pathname === to;
    const btnClass = isActive ? 'btn-body active' : 'btn-body'; 
  return (
   <NavLink to={to} >
    <div className={btnClass}>
    <IconContext.Provider value={{size:"24px", className:"btn-icon"}}>
    {icon}
    <p className='btn-title'>{title}</p>
    </IconContext.Provider>
    </div>
   </NavLink>
  )
}

export default SideBarButtons