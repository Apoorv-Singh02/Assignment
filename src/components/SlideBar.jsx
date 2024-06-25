import React, { useEffect, useState } from 'react'
import "./SlideBar.css"
import Buttons from './Buttons'
import Slider from './Slider'

const SlideBar = ({BarWidth, Qid, onAnswer}) => {
  const [slide, setSlide] = useState(0)
  const [show,setShow] = useState(false)

  useEffect(()=>{
    if (!BarWidth[Qid]) {
      setSlide(0)
      setShow(false)
    } else {
      setSlide(BarWidth[Qid])
      setShow(true)
    }
  },[Qid])

  return (
    <div className='slidebar'>
        <div className='line'></div>
        <Slider Slide={slide} Show={show} />
        <Buttons onClick={()=>{
          setSlide(0);
          setShow(true);
          onAnswer(0)}} text={"Strongly Disagree"} />
        <Buttons onClick={()=>{
          setSlide(18);
          setShow(true);
          onAnswer(18)}} text={"Disagree"} />
        <Buttons onClick={()=>{
          setSlide(36);
          setShow(true);
          onAnswer(36)}} text={"Neutral"} />
        <Buttons onClick={()=>{
          setSlide(54);
          setShow(true);
          onAnswer(54)}} text={"Agree"} />
        <Buttons onClick={()=>{
          setSlide(72);
          setShow(true);
          onAnswer(72)}} text={"Strongly Agree"} />
    </div>
  )
}

export default SlideBar