import React from 'react'
import './queue.css'

const Queue = ({tracks, setCurrentIndex}) => {
  console.log(tracks)
  const TimeConverter = (time) =>{
    let minutes = Math.floor(time/60000)
    let seconds = ((time % 60000)/10000).toFixed(0);
    return minutes+':'+(seconds<10? '0' : '')+seconds
  }
  return (
    <>
       <div className='queue-container flex'>
        <div className='queue flex'>
          <p className='upNext'>Up Next</p>
          <div className='queue-list'>
            {tracks?.map((track,index) =>{
              return(
                <div onClick={()=>setCurrentIndex(index)} key={index + "key"} className='queue-item flex'>
                  <p className='track-name'>{track?.track?.name}</p>
                  {/* <CgPlayButtonO className='play-icon'/> */}
                  <p>{TimeConverter(track?.track?.duration_ms)}</p>
                </div>
              )
            })}
          </div>
        </div>
       </div> 
    </>
  )
}

export default Queue