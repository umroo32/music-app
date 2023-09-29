import React from 'react'
import './songcard.css'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'

const SongCard = ({album}) => {
  return (
    <div className='songCard-body flex'>
        <AlbumImage imageUrl = {album?.images[0]?.url}/>
        <AlbumInfo info={album}/>
    </div>
  )
}

export default SongCard