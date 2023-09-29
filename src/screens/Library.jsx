import React, { useState,useEffect } from 'react'
import APIKit from '../spotify'
import {useNavigate} from 'react-router-dom'
import {CgPlayButtonO} from "react-icons/cg"
import { IconContext } from 'react-icons'
import './library.css'
const Library = () => {
  const [playList, setPlaylist] = useState(null)
  useEffect(() => {
    APIKit.get('me/playlists').then((response) => {
      setPlaylist(response.data.items)
    })
    console.log(playList)
  }, [])
  const Navigate = useNavigate();
  const playPlayList=(id)=>{
    Navigate('/player', {state: {id: id}})
  }
  

  return (
    <div className='screen-container'>
       <div className='library-body'>
       {playList?.map(playlist=>{
          return(
            <div key={playlist.id} className='playlist-card' onClick={()=>playPlayList(playlist.id)}>
            <img className='playlist-image' src={playlist.images[0].url} />
            <p className='playlist-title'>{playlist.name}</p>
            <p className='playlist-subtitle'>{playlist.tracks.total} tracks</p>
            <div className='playlist-fade'>
              <IconContext.Provider value={{size: "50px", color:'#4B2D31'}}>
                <CgPlayButtonO />
              </IconContext.Provider>
            </div>
            </div>
          )
        })}
       </div>
    </div>
  )
}

export default Library