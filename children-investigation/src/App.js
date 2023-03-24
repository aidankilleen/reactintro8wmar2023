import './App.css';
import Wrapper from './Wrapper';
import Button, { DangerButton, LargeButton, StyledButton } from './PtButtons';
import BasicButton, { ComposedBigButton, ComposedDangerButton, ComposedLargeDangerButton } from './HigherOrderComponents';

function App() {
  return (
    <>
      <h1>Component Children Investigation</h1>

      <ComposedLargeDangerButton
        text="Composed Large Danger Button"
        onClick={() => alert("clicked")}/>


      <hr/>

      <ComposedDangerButton
        text="Composed Danger Button"

        onClick={() => alert("clicked")}
      />

      <hr/>




      <ComposedBigButton
        text="Composed Big Button"
      />


      <BasicButton 
        text="Basic Button"
        size="large"
        onClick={() => alert("clicked")}/>



      <hr/>






      <DangerButton
        text="Are you sure?"
        onClick={()=>alert("oops")}
        />




      <LargeButton 
        text="Large Button Test"
        colour="green"
        size="small"
        onClick={ () => alert("clicked")}
        />



      <StyledButton
        text="Press Here"
        colour="blue"
        size="small"
        onClick={()=>alert('clicked')}
        />
      <hr/>



      <Button>Press Me Now</Button>


      <Button>
        <img src="https://picsum.photos/seed/picsum/100/100"/>
      </Button>




      <Wrapper>
        <h1>Wrapped Content</h1>
        <p>This is some wrapped content</p>
      </Wrapper>

      <Wrapper>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </Wrapper>

      <Wrapper>
        <img src="h"/>
      </Wrapper>

      <Wrapper>
        <ComposedLargeDangerButton
          text="Danger"
          onClick={() => alert("clicked")}
        />
      </Wrapper>


    </>
  );
}

export default App;
