import React,{useState} from 'react'
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='nav-center'>
        <ul className={`${showLinks? 'list1 show-list': 'list1'}`}>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">info</a></li>
            <li><a href="#">meet me</a></li>
        </ul>
        
        <div className='nav-tilte'>
            <FaBars className='bars' onClick={() => setShowLinks(!showLinks)}/>
            <h1 className='logo'>TechWithNaga</h1>
            
        </div>
        <ul className={`${showLinks? 'list2 show-list': 'list2'}`}>
            <li><a href="">guides</a></li>
            <li><a href="">review</a></li>
            <li><a href="">inquiry</a></li>
        </ul>
    </div>
  )
}

export default Navbar