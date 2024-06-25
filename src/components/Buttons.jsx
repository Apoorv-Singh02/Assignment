import React from 'react'
import "./Buttons.css"

const Buttons = ({onClick,text}) => {
  return (
    <div className='button' onClick={onClick}>
        <div className='circle'></div>
        <div className='btn-text'>{text}</div>
    </div>
  )
}

export default Buttons