import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (

    <div>
      <h2>React Router Investigation</h2>

      <NavLink to="/home">Home</NavLink> |
      <NavLink to="/about">About</NavLink> |
      <NavLink to="/contact">Contact</NavLink> |
      <NavLink to="/members">Members</NavLink> |



      <Outlet/>


    </div>
  );
}

export default App;
