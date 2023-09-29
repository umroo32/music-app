import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import apiClient from '../spotify'
import './player.css'
import SongCard from '../components/songcard/SongCard'
import Queue from '../components/queue/Queue'
import AudioPlayer from '../components/audioplayer/AudioPlayer'
import Widget from '../components/widget/Widget'

const Player = () => {
  const location = useLocation()
  const [tracks, settracks] = useState([]);
  const [currentTrack,setCurrentTrack] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

useEffect(()=>{
  if(location.state){
    apiClient.get('/playlists/'+ location.state?.id +'/tracks')
    .then((response)=>{
    settracks(response.data.items),
    setCurrentTrack(response.data.items[0].track)
      // console.log(currentTrack)
  }
    )
    
  }
},[location.state])

  return (
    <div className='screen-container flex'>
      <div className='left-player-body'>
        <AudioPlayer 
        currentTrack={currentTrack}
        totalTracks={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
         />
         <Widget artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}

export default Player