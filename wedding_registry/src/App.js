import './App.css';
import List from './List';


function App() {

  return (
    <main className='container text-center'>
      <div id='header'>
        <h3>John Wang and Martha Parr</h3>
        <h3>Wedding Registry</h3>
        <h5 style={{'fontWeight': 'bolder'}}>June 19, 2029</h5>
      </div>
      <List />
     

      
    </main>
  );
};

export default App;
