import React from 'react'
import './widgetentry.css'

const WidgetEntry = ({title,subtitle,image}) => {
    // console.log(subtitle,title,image)
  return (
    <div className='entry-body flex'>
        <img src={image} alt={title} className='entry-image'/>
        <div className='entry-right-body flex'>
            <p className='entry-title'>{title}</p>
            <p className='entry-subtitle'>{subtitle}</p>
        </div>
    </div>
  )
}

export default WidgetEntry