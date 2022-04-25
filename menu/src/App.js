import Data from './data.js';
import Categories from './Categories.js';
import Menu from './Menu.js';
import React, {useState} from 'react';

const allCategories =  ['All', ...new Set(Data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(Data);

  const filterData = (category) => {
    if (category === 'All'){
      setMenuItems(Data);
    } else{
      const newData = Data.filter((item)=>item.category === category);
      setMenuItems (newData);
    }

  }

  return (
    <main>
      <div className='title'>
        <h1>Our Menu</h1>
        <div className='underline'></div>
      </div>
      <div className='container'>
        <Categories allCategories={allCategories} filterData = {filterData}/>
        <Menu items= {menuItems}/>
      </div>
    </main>
  );
}

export default App;
