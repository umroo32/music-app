import React from 'react'
import './albumimage.css'

const AlbumImage = ({imageUrl}) => {
  return (
    <>
    <div className='albumImage flex'>
        <img src={imageUrl} alt='album-img' />
        <div className='albumImage-shadow'>
        <img src={imageUrl} alt='shadow' className='albumImage-shadow' />
    </div>
    </div>
   
    </>
  )
}

export default AlbumImage