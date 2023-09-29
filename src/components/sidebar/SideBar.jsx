import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SideBarButtons from './SideBarButtons'
import{MdFavorite, MdSpaceDashboard} from "react-icons/md"
import{FaGripfire,FaSignOutAlt} from "react-icons/fa";
import {SiYoutubemusic} from "react-icons/si";
import {IoLibrary} from "react-icons/io5";
import apliClient from '../../spotify';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const [img, setImg] = useState({
    profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcZnEnLy7Ie31zOFTPNd_C8GCFnYvy-Thcg&usqp=CAU",
    profile_name: ''
  })
    useEffect(()=>{
    apliClient.get("me").then(response =>
      setImg({profile_pic:response.data.images[0].url,
      profile_name: response.data.display_name}),
      // console.log()
      // setImg(response.data.images[0].uri)
      )
  })
  return (
    <div className='sidebar-container'>
    <div>
    <NavLink to='https://open.spotify.com/user/31jcwj2s4wped6qvagj5e5gn4e3e'>
    <img className='profile-img' src={img.profile_pic} alt='profile' />
       <p className='profile-name'>{img.profile_name}</p>
       </NavLink>
    </div>
   <div className='nav-btn'>
   <SideBarButtons to='/' title="Library" icon={<IoLibrary/>}/>
   <SideBarButtons to='/feed' title="Feed" icon={<MdSpaceDashboard/>}/>
    <SideBarButtons to='/trending' title="Trending" icon={<FaGripfire />}/>
    <SideBarButtons to='/player' title="Player" icon={<SiYoutubemusic/>}/>
    <SideBarButtons to='/favorite' title="Favorites" icon={<MdFavorite/>}/>
   

   
   </div>
   <div>
   <SideBarButtons to='' title="SignOut" icon={<FaSignOutAlt/>}/>
    </div>

    </div>
  )
}

export default SideBar