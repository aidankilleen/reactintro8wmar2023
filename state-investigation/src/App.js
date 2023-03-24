import { useState } from 'react';
import './App.css';

function App() {

  const title = "State Investigation";

  //let clickMessage = "not clicked";

  const [clickMessage, setClickMessage] = useState("not clicked");
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [bold, setBold] = useState(false);
  const [name, setName] = useState("Aidan");

  const styles = {
    color: darkMode ? 'white' : 'black', 
    backgroundColor: darkMode ? 'black' : 'white'
  }

  console.log(`App() called ${count}`);

  const onClick = () => {
    setClickMessage(current => "clicked");
  }

  const onPlusClick = () => {
    setCount(current => current + 1);
    console.log(`count = ${ count }`);
  }

  const onPlus2Click = () => {

    //setCount(count + 1);

    setCount((currentValue) => {
      return currentValue + 1;
    });

    setCount(currentValue => currentValue + 1);

  }

  const onMinusClick = () => {
    setCount(current => current - 1);
  }

  const onDarkModeChanged = () => {
    setDarkMode(current => !current);
  }
/*
  const onNameChanged = (evt) => {
    console.log(evt);

    setName(current => {
      return evt.target.value
    })
  }
*/

  return (
    <div style={styles}>

      <input value = { name } onChange={ evt => setName(evt.target.value) }/> { name }

      <button onClick={()=>setName("")}>reset</button>

      <hr/>

      <input type="checkbox" checked= { bold } onChange = { () => setBold(!bold) }/>
      
      <p style = { { fontWeight: bold ? 'bold' : 'normal' }}>
        { bold ? 'bold' : 'not bold' }
      </p>
      <hr/>


      <input type="checkbox" checked = { darkMode } onChange = { onDarkModeChanged }/>

      <h2>{ title }</h2>
      <button onClick={ onClick } >Click Me</button> { clickMessage }
      <hr/>

      <h3>{ count }</h3>

      <button onClick={ onPlusClick }>+</button>
      <button onClick={ onMinusClick }>-</button>

      <button onClick={ onPlus2Click }>+2</button>


    </div>
  );
}

export default App;
