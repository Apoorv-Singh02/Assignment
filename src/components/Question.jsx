import React from 'react'
import "./Question.css"

const Question = ({Qid}) => {
    const questions = ["I have ambitious aims of making a difference",
        "My leadership journey has progressed as i anticipated",
        "I have spent less than 4 years on full-time service or ministry",
        "I have ambitious aims of making a difference",
        "My leadership journey has progressed as i anticipated",
        "I have spent less than 4 years on full-time service or ministry",
        "I have ambitious aims of making a difference",
        "My leadership journey has progressed as i anticipated",
        "I have spent less than 4 years on full-time service or ministry",
        "I have ambitious aims of making a difference",
        "My leadership journey has progressed as i anticipated",
        "I have spent less than 4 years on full-time service or ministry",
        "I have ambitious aims of making a difference",
        "My leadership journey has progressed as i anticipated",
        "I have spent less than 4 years on full-time service or ministry"
    ]

  return (
    <div className='question'>
        <div className='qno'>
            <span style={{fontWeight: '900'}}>{Qid}</span>/20
        </div>
        <div className='q-text'>
            {questions[Qid]}
        </div>
    </div>
  )
}

export default Question