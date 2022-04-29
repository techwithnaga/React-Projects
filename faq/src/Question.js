import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Question ({title, info}) {
    const [showQuestion, setShowQuestion] = useState(false);
  return (
    <article>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={()=>setShowQuestion(!showQuestion)}>
                {showQuestion ? <AiOutlineMinus/>: <AiOutlinePlus/>}
            </button>
        </header>
        {showQuestion && <p className='info'>{info}</p>}
    </article>
  )
}

export default Question