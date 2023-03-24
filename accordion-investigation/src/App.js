import './App.css';
//import Accordion from './Accordion';
import PtAccordion from './PtAccordion';

function App() {

  const title = "Accordion Investigation";

  let items = [

    { id:1, title: 'Item 1', text: 'This is item 1', expanded: true }, 
    { id:2, title: 'Item 2', text: 'This is item 2', expanded: false }, 
    { id:3, title: 'Item 3', text: 'This is item 3', expanded: false }, 
    { id:4, title: 'Item 4', text: 'This is item 4', expanded: false } 
  ];

  let newsItems = [
    { id:1, title: 'News Item 1', text: 'This is item 1', expanded: true }, 
    { id:2, title: 'News Item 2', text: 'This is item 2', expanded: false }, 
    { id:3, title: 'News Item 3', text: 'This is item 3', expanded: false }

  ];


  return (
    <>
      <h1>{ title }</h1>

      <PtAccordion items={ items }/>

      <hr/>

      <PtAccordion items={ newsItems }/>





    </>
  );
}

export default App;
