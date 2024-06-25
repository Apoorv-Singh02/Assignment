import React from 'react'
import ProgressBar from './ProgressBar'
import "./Progress.css"

const Progress = ({Qid}) => {
  return (
    <div className='progress'>
        <div className='section'>
          <ProgressBar Qid={Qid} Barid={1} />
          Idealistic
        </div>
        <div className='section'>
          <ProgressBar Qid={Qid} Barid={2} />
          Disillusioned
        </div>
        <div className='section'>
          <ProgressBar Qid={Qid} Barid={3} />
          Cynical
        </div>    
        <div className='section'>
          <ProgressBar Qid={Qid} Barid={4} />
          Hopeful
        </div>
    </div>
  )
}

export default Progress