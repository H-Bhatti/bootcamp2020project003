import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Hello from './hello';

function Hi(props){
  return <div >
      Hello <strong>{props.name}</strong>
      <br></br>
  <button id = "button">button</button>
  <h1>4 + 5 is {4+5}</h1>
  <ul> List of things
    <li>React</li>
    <li><strong>Mondo DB</strong></li>
    <li>ETH</li>
  </ul>
  <h2>Headings , buttons, lists, mathematical operations, little bit of CSS</h2>
  <br/>
  <Hello passedVariable = {273}> type of is {typeof passedVariable}</Hello>
  </div>
}

ReactDOM.render(<Hi name = "Hammad"/>, document.querySelector('#root'))