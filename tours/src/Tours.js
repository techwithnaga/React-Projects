import React from 'react'
import Tour from './Tour.js';

function tours({tours, removeTour}) {
  return (
    <div className='tour-list'>
        {
            tours.map((tour) =>{
                return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            })
        }
    </div>

  )
}

export default tours