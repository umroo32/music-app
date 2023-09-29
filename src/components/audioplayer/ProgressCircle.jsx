import React from 'react'
import './progresscircle.css'

const Circle = ({
    strokeWidth,
    color,
    percentage,
    size,
}) =>{
    const radius = size / 2 -10;
    const circle = 2 * Math.PI * radius -20
    const strokePercentage = ((100 -Math.round(percentage)) * circle )/100;

    return(
        <circle
        r={radius} 
        stroke={strokePercentage !== circle ? color: ""}
        cx={"50%"}
        cy={"50%"}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circle}
        strokeDashoffset={percentage? strokePercentage: 0}
        strokeLinecap="round"
        />
    )
}

const ProgressCircle = ({percentage,
    isPlaying,
    image,
    size,
    color}) => {
  return (
    <div className='progress-circle flex'>
        <svg width={size} height={size}>
            <g>
                <Circle 
                    strokeWidth={"0.4rem"}
                    color="#3B4F73"
                    size={size}
                ></Circle>
                <Circle 
                    strokeWidth={"0.6rem"}
                    color={color}
                    percentage={percentage}
                    size={size}
                ></Circle>
            </g>
                
            <defs  >
                <clipPath id='myCircle'>
                    <circle  cx='50%'
                    cy='50%' 
                    r={size/2 - 30} fill='#FFFFFF'/>
                </clipPath>
                <clipPath id='myInnerCircle'>
                    <circle cx='50%'
                    cy='50%' 
                    r={size/2 - 100} fill='#FFFFFF'/>
                </clipPath>
            </defs>
            <image className={isPlaying? "active" : ""}
                x={30}
                y={30}
                width={2* (size/2 -30)}
                height={2*(size/2-30)}
                href='https://pngimg.com/uploads/vinyl/vinyl_PNG107.png'
                clipPath='url(#myCircle)'
            />
            <image 
                className={isPlaying? "active" : ""}
                x={100}
                y={100}
                width={2* (size/2 - 100)}
                height={2*(size/2- 100)}
                href={image}
                clipPath='url(#myInnerCircle)'
            />
        </svg>
    </div>
    )
}

export default ProgressCircle