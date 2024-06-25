import React,{ useState } from 'react'
import Progress from './Progress'
import Question from './Question'
import SlideBar from './SlideBar'
import "./MainCard.css"

const MainCard = () => {
    const [qid, setQid] = useState(0)
    const [answers, setAnswers] = useState({})

    const onAnswer = (x) => {
        setAnswers({
            ...answers,
            qid, x
        })
        setTimeout(()=>{
          setQid(qid+1)
        },1200)
    }

  return (
    <div className='main-card'>
        <Progress Qid={qid} />
        <Question Qid={qid} />
        <SlideBar BarWidth={answers} Qid={qid} onAnswer={onAnswer} />
    </div>
  )
}

export default MainCard