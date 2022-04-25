import React from 'react'

function Categories({allCategories, filterData}) {
  return (
    <div className='categories'>
        <h4>Browse by Category</h4>
        {
            allCategories.map((category) =>{
                return (
                    <li>
                        <ul onClick={()=>{filterData(category)}}>{category}</ul>
                    </li>
                );
            })
        }
    </div>
  )
}

export default Categories