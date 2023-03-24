import { useState, useMemo } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const styles = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black', 
    height: "100vh"
  }

  const calc = () => {
    [...Array(10000000).keys()].reduce((p, c)=>p+c);
    return count * 2;
  }

  const answer = useMemo(() => { 
    return calc();
  }, [count]);

  return (
    <div style={styles}>
    
      <h1>useMemo Investigation</h1>
      <input 
        type="checkbox"
        checked = { darkMode }
        onChange = {() => setDarkMode(current => !current)}/> { darkMode ? "Dark Mode" : "Light Mode"}
      <hr/>

      { count }
      <hr/>
      { answer }
      <br/>


      <button onClick = { () => setCount(prev => prev + 1)}>+</button>
      <button onClick = { () => setCount(prev => prev - 1)}>-</button>

    
    </div>
  );
}

export default App;
