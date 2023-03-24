import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";                                         
import { Outlet } from 'react-router-dom';
import NavBar from './elements/NavBar';
import { createContext, useState } from 'react';
   
export const ShowDialogContext = createContext();

function App() {

  const [showDialog, setShowDialog] = useState(false);

  return (
    <ShowDialogContext.Provider
      value={{value: showDialog, setter: setShowDialog}}>
      <NavBar/>
      <Outlet/>
    </ShowDialogContext.Provider>
  );
}

export default App;
