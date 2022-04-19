import React,{useState, useEffect} from 'react';
import Tours from './Tours.js'
const url = 'https://course-api.com/react-tours-project';

function App() {
  const[isLoading, setLoading] = useState(true);
  const[tours, setTours] = useState([]);

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => id != tour.id);
    setTours (newTours);
  }

  const fetchTours = async() =>{
    setLoading(true);
    try {
      let response = await fetch(url);
      let data = await response.json();
      setTours (data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log (error);
    }
  }

  useEffect (()=>{
    fetchTours();
  },[]);

  if (isLoading){
    return (
      <main className='container'>
        <h1 >Loading...</h1>
      </main>
    );
  }
  
  if (tours.length === 0){
    return (
      <main className='container'> 
        <button className="refresh-btn" onClick={()=> fetchTours()}> Refresh Tours</button>
      </main>
    );
    
  }

  return (
    <main className='container'>
      <h1>Our Tours</h1>
      <div className='underline'></div>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );

  
}

export default App;
