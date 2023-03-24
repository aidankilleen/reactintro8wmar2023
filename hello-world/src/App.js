import './App.css';
import Message from './Message';

function App() {

  console.log("App() rerendering");

  let title="React Hello World";

  let messages = [
    { id: 1, title: "Message 1", text: "Message 1 text", read: false },
    { id: 2, title: "Message 2", text: "Message 2 text", read: false },
    { id: 3, title: "Message 3", text: "Message 3 text", read: false }
  ];

  let names = ["Alice", "Bob", "Carol", "Dan"];

  let clickMessage = "unclicked";

  const onClick = () => {
    console.log("clicked");
    clickMessage = "clicked";
  }

  return (
    <> {/* this is a comment */} 
      
      <h1>{ title }</h1>

      <button onClick={ onClick }>Press Me</button> { clickMessage }
      <hr/>

      <select>
      { names.map((name, index) => <option key={ name }>{index} - {name}</option>) }
      </select>
      
      {
        messages.map((message, index) => <Message key={ message.id } message={message}/>)
      }



      {/*<Message message = { messages[0] }/>*/}



      {/*<Message title = { message.title } text = { message.text}/>/*}



      {/*<Message title="First Message" text="This is message 1"/>*/}




    </>
  );
}

export default App;
