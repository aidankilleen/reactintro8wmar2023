function Message({ message }) {

  let styles = {
    border: "1px solid black", 
    color: message.read ? 'lightgray' : 'black'
  }

    return (
      <div style={ styles }>
        <h1 style={{ backgroundColor: `${ message.read ? 'lightgray' : 'white'}`}}>{ message.title }</h1>
        <p>{ message.text }</p>
        { message.read && <p>Read</p> }
        { !message.read && <p>Unread</p> }
        { message.read ? <p>Read</p> : <p>Unread</p> }
      </div>
    )
  }

export default Message;
