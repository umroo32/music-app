import React, { useEffect, useState } from 'react'
import './widget.css'
import apiClient from '../../spotify'
import WidgetCard from './WidgetCard'

const Widget = ({artistID}) => {
    const [similarArtist,setSimilarArtist] =useState([])
    const [featured,setfeatured] =useState([])
    const [newRelease,setNewRelease] =useState([])

    useEffect(()=>{
        if(artistID){
            apiClient.get(`/artists/${artistID}/related-artists`)
            .then((res)=>{
                const a = res.data?.artists.slice(0,3);
                setSimilarArtist(a)
            }).catch((err)=> console.log(err))
            apiClient.get(`/browse/featured-playlists`)
            .then((res)=>{
                const a = res.data?.playlists.items.slice(0,3);
                setfeatured(a)
            }).catch((err)=> console.log(err))
            apiClient.get(`/browse/new-releases`)
            .then((res)=>{
                const a = res.data?.albums.items.slice(0,3);
                setNewRelease(a)
            }).catch((err)=> console.log(err))
        }
    },[artistID])


  return (
    <div className='widgets-body flex'>
        <WidgetCard title='Similar Artists' similar={similarArtist}/>
        <WidgetCard title='Made For You' featured={featured}/>
        <WidgetCard title='New Releases' newRelease={newRelease}/>
    </div>
  )
}

export default Widget