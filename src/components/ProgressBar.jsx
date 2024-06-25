import React, { useEffect, useState } from 'react'
import "./ProgressBar.css"

const ProgressBar = ({Qid, Barid}) => {
  const [wide,setWide] = useState(0)

  useEffect (()=>{
    if (parseInt(Qid/5)==Barid-1) {
      setWide(wide+20)
  }},[Qid])


  return (
    <div className='progress-bg'>
    <div className='progress-bar' style={{width: `${wide}%`}}>
    </div>
    </div>
  )
}

export default ProgressBar