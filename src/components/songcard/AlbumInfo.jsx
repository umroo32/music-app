import React from 'react'
import './albuminfo.css'

const AlbumInfo = ({info}) => {
  const artist =[];

  info?.artists.forEach(element => {
    artist.push(element.name);
  });
  return (
    <div className='albumInfo-card'>
      <div className='albumName-container'>
    <div className='marquee'>
    <p >{info?.name + '-' + artist?.join(", ")}</p>
    </div>
   </div>
   <div className='flex-info'>
    <div className='album-info'>
      <p>{`${info?.name} is an ${info?.album_type} by ${artist?.join(', ')} with ${info?.total_tracks} track(s)`}</p>
    </div>
    <div className='album-release'>
      <p>Release Date: {info?.release_date}</p>
    </div>
    </div>
    </div>
  )
}

export default AlbumInfo