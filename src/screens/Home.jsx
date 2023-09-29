import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Library from './Library'
import Player from './Player'
import Favorites from './Favorites'
import Feed from './Feed'
import Trending from './Trending'
import './home.css'
import SideBar from '../components/sidebar/SideBar' 
import Login from './auth/login'
import { setClientTOken } from '../spotify'


const Home = () => {
  const [token, setToken] = useState("")

  useEffect(()=>{
    const tokenStorage = window.localStorage.getItem('token')
    const hash = window.location.hash;
    window.location.hash = ""

    if(!token && hash){
    const _token = hash.split('&')[0].split('=')[1];
    window.localStorage.setItem('token', _token)
    setToken(_token)
    setClientTOken(_token)
  }
    else{
      setToken(tokenStorage)
      setClientTOken(tokenStorage)
    }
  },[])
  return (!token?
  <Login />:

    <Router>

    <div className='main-body'>
    <SideBar />
    <Routes>
        <Route path='/' element={<Library/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
        <Route path='/trending' element={<Trending/>}></Route>
        <Route path='/player' element={<Player/>}></Route>
        <Route path='/favorite' element={<Favorites/>}></Route>
        
    </Routes>
    </div>
    

    </Router>
  )
}

export default Home