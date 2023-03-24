import { useState } from 'react';
import './App.css';
import { useCustomLogger } from './useCustomLogger';
import useLocalStorage from './useLocalStorage';

function App() {

  const [username, setUsername] 
    = useLocalStorage("username", "akilleen");


  const [active, setActive] = useState(false);



  return (
    <>
      <h1>Custom Hook Investigation</h1>
      <input 
        type="checkbox" 
        checked = { active }
        onChange = { (evt) => setActive(evt.target.checked)}
      />

      <hr/>
      { username }<br/>


      <input 
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}/>


    </>
  );
}

export default App;
