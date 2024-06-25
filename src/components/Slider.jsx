import React from 'react'
import "./Slider.css"

const Slider = ({Slide, Show}) => {
  return (
    <div className='selector'>
    <div className='slider' style={{ transform: `translate(${Slide}vw,0px)`,visibility: Show ? 'visible' : 'hidden'}}>
    </div>
    <div className='trail' style={{width: `${Slide}vw`,visibility: Show ? 'visible' : 'hidden'}}></div>
    </div>
  )
}

export default Slider