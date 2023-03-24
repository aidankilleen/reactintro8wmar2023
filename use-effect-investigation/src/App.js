
import './App.css';
import {useEffect, useState} from 'react';
import Box from './Box';


function App() {

  const [colour, setColour] = useState("red");
  const [title, setTitle] = useState("useEffect Investigation");
  const [size, setSize] = useState({width:0, height:0});









  useEffect(()=>{
    window.addEventListener("resize", (evt)=> {
      console.log("window resized");
      setSize(prev => {
        return {
          width: window.innerWidth, 
          height: window.innerHeight
        }
      });
    })

    return () => {
      console.log("cleaning up after the App() is closed");
      //window.removeEventListener("resize")
    }
  }, []);

  useEffect(()=>{

    console.log("this is called only once");

    const url = "https://api.citybik.es/v2/networks/cork";
    fetch(url)
      .then(response=>response.json())
      .then(json => {
        console.log(json);

        setTitle(json.network.name);
      });

  }, []);

  useEffect(()=>{
    console.log(`Colour changed to ${ colour }`)
  }, [colour]);

  const styles = {
    backgroundColor: colour
  };

  return (
    <>
      <h1>{ title }</h1>

      <Box/>


      <hr/>
      




      ({size.width},{size.height})

      <div style={ styles }>
        { colour }
      </div>

      <button onClick={()=>setColour("green")}>Green</button>
      <button onClick={()=>setColour("blue")}>Blue</button>
      <button onClick={()=>setColour("red")}>Red</button>

    </>
  );
}

export default App;
