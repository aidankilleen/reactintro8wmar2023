import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  console.log("App() rendered");

  const [name, setName] = useState("Alice");
  const [county, setCounty] = useState("Cork");

  // const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(0);

    useEffect(() => {
    //setRenderCount(current => current + 1);
    renderCount.current = renderCount.current + 1;
  });


  const countyRef = useRef();

  const focus = () => {
    countyRef.current.focus();
  }

  const onSubmit = (evt) => {

    evt.preventDefault();
    
    alert(`Name = ${ name }, County = ${ countyRef.current.value }`)

  }
  return (
    <>
      <h1>useRef Investigation</h1>
      <form onSubmit= { onSubmit }>
        <input value = { name } onChange = { evt => setName(evt.target.value) }/><br/>
        <p>My name is { name }</p>
        <div>rendered: { renderCount.current }</div>
        <hr/>
        <input 
          ref= { countyRef }
        />
        <input type="submit" value="submit"/>
      </form>
      <br/>

      { county }
      
      <button onClick= { focus }>Focus on County Ctrl</button>
    </>
  );
}

export default App;
