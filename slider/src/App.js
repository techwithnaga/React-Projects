import data from './data.js';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import React, {useState, useEffect} from 'react';

function App() {
  const [index, setIndex]  = useState(0);
  const [items, setItems] = useState (data);
  useEffect (()=>{
    const lastIndex = items.length-1;
    if (index < 0){
      setIndex(lastIndex);
    }

    if (index > lastIndex){
      setIndex(0);
    }
  }, [index, items])
  

  useEffect (()=>{
    let interval = setInterval(()=>{
      setIndex (index+1);
    },3000)

    return ()=>{
      clearInterval(interval);
    };
  }, [index])
  return (
    <div className="container">
      <div className="slider">
        {
          items.map ((item,itemIndex) =>{
            let {id, name, url} = item;
            let position = 'nextSlide';
            if (index === itemIndex) {
              position = 'activeslide';
            }
            if (itemIndex === index-1){
              position = 'lastSlide';
            }
            console.log (itemIndex, position)

            return(
              <article key={id} className={position}>
                <img src={url} alt={name} />
              </article>
            );
          })
        }
        <BsChevronLeft className='prev' onClick={()=>setIndex(index-1)}/>
        <BsChevronRight className='next'onClick={()=>setIndex(index+1)}/>
      </div>
    </div>
  );
}

export default App;
