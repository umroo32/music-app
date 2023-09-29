import React from 'react'
import './controls.css'
import {HiPlayPause} from 'react-icons/hi2'
import {IoPlaySkipBack} from 'react-icons/io5'
import {IoPlaySkipForward} from 'react-icons/io5'
import { IconContext } from 'react-icons'



const Controls = ({ isPlaying,
    setIsPlaying,
    handleNext,
    handlePrev,}) => {
  return (
    <IconContext.Provider value={{size: "35px" , color:'#C4D0E3'}}>
        <div className='control-wrapper flex'>
        <div className='action-btn flex' onClick={handlePrev}>
            <IoPlaySkipBack/>
        </div>
        <div onClick={()=>setIsPlaying(!isPlaying)} className={isPlaying ? 'play-pause-btn flex active' : "play-pause-btn flex"}>
        <HiPlayPause/>
        </div>
        <div className='action-btn flex' onClick={handleNext}>
            <IoPlaySkipForward/>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default Controls