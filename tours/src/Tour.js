import React from 'react'

function tour({id, name, info, image, price, removeTour}) {
  return (
    <div className='tour'>
        <img src={image} alt={name} />
            <div className='tour-body'>
                <div className='tour-title'>
                    <h2>{name}</h2>
                    <h2>Only ${price}</h2>
                </div>
                <p>{info}</p>
                <button className='cancel-btn' type='button' onClick={()=>removeTour(id)}> Not Interested</button>
            </div>
    </div>
  );
}

export default tour