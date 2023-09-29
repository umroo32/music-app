import React,{useEffect, useRef, useState,useCallback} from 'react'
import './audioplayer.css'
import ProgressCircle from './ProgressCircle'
import Controls from './Controls'
import WaveAnimation from './WaveAnimation'

const AudioPlayer = ({ currentTrack,
  totalTracks,
  currentIndex,
  setCurrentIndex}) => {
    console.log(totalTracks)
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0)
   
    var audioSrc = totalTracks[currentIndex]?.track.preview_url;
    // console.log(totalTracks[currentIndex]?.track.preview_url )

    const audioRef = useRef(new Audio(totalTracks[0]?.track.preview_url))
    const intervalRef = useRef()
    const isReady = useRef(false)
    const {duration} =audioRef.current;
    const currentPercentage = duration? (trackProgress/ duration) * 100: 0;
    const startTimer = useCallback(() => {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
            return handleNext()
        } else {
          setTrackProgress(audioRef.current.currentTime)
        }
      }, 1000)
   }, [currentTrack])
    useEffect(() => {
      if (audioRef.current.src) {
        if (isPlaying) {
          audioRef.current.play();
          startTimer();
        } else {
          clearInterval(intervalRef.current);
          audioRef.current.pause();
        }
      } else {
        if (isPlaying) {
          audioRef.current = new Audio(audioSrc);
          audioRef.current.play();
          startTimer();
        } else {
          clearInterval(intervalRef.current);
          audioRef.current.pause();
        }
      }
    }, [isPlaying,currentTrack]);

    useEffect(() => {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
  
      setTrackProgress(audioRef.current.currentTime);
  
      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        isReady.current = true;
      }
    }, [currentIndex]);

    useEffect(() => {
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
    }, []);

    const handleNext=()=>{
      if(currentIndex < totalTracks.length - 1){
       return setCurrentIndex(currentIndex + 1)
      }else{
        setCurrentIndex(0)
      }
    }
    const handlePrev=()=>{
      if(currentIndex -1 < 0 ){
        setCurrentIndex(totalTracks.length -1)
      }
      else{
        setCurrentIndex(currentIndex -1)
      }
    }

    const addZero = (n) =>{
      return n > 9 ? "" + n : "0" + n
    }

    const artists = [];
    currentTrack?.album?.artists.forEach((artist)=>{
      artists.push(artist.name)
    })
  return (
    <div className='player-body flex' >
      <div className='player-left-body'>
        <ProgressCircle 
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className='player-right-body flex'>
      <p className="song-title">Album: {totalTracks[0]?.track?.name}</p>
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            // totalTracks={totalTracks}
          />
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer