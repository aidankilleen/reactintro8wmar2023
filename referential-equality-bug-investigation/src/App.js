import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [active, setActive] = useState(false);
  const [member, setMember] = useState({
    id:1, 
    name: "Alice", 
    email: "alice@gmail.com", 
    active: false
  });
  const onClick = () => {
    //member.name = "CHANGED";
    //setMember(member);        // this doesn't work - member object isn't detected as having changed
    
    // this one works
    //setMember({
    //  ...member, 
    //  name: "CHANGED"
    //});

    // coding standard - always use the callback version of set 
    // when dealing with objects in the state
    setMember ( current => {
      return {
        ...current, 
        name: "CHANGED"
      }
    })

    console.log(member);
  }
  return (
    <>
      <h1>Referential Equality</h1>
      <input 
        type="checkbox" 
        checked={ active } 
        onChange={ (evt)=> setActive(evt.target.checked)}
      /> { active ? "Active" : "Inactive" }

      <hr/>
      Name: { member.name }<br/>
      Email: { member.email }
      <button onClick={ onClick }>Change The Name</button>
      <hr/>

      { JSON.stringify(member)}



    </>
  );
}

export default App;
