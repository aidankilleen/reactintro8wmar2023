import { createContext, useState } from 'react';
import './App.css';
import Container from './Container';

export function getTheme(darkMode) {
  return {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white": "black", 
    height: "30vh"
  }
}

export const DarkModeContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider
      value={{ value: darkMode, setter: setDarkMode }}
    >
      <div style={ getTheme(darkMode) }>
        <input 
          type="checkbox" 
          checked = { darkMode } 
          onChange = {() => setDarkMode(current => !current)}
        />
        <h1>useContext Investigation</h1>

        <Container>
        </Container>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
