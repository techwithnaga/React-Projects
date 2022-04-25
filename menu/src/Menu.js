import React from 'react'

function menu({items}) {
  return (
    <div className='menu'>
        {
            items.map ((item) =>{
                const {id, title, price, img, desc} = item
                return (
                    <article key={id}>
                        <img src={img} alt={title} />
                        <div className='menu-text'>
                            <div className='menu-title'>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </div>
                            <p className='menu-desc'>{desc}</p>
                        </div>
                    </article>
                );
            })
        }
    </div>
  )
}

export default menu