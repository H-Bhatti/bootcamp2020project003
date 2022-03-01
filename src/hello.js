import React from "react";
import ReactDOM from 'react-dom';

function Hello({passedVariable}){
    return <p>This paragraph is from hello.js for learning about export and import, and the passed variable is {passedVariable} and type is of <strong>{typeof passedVariable}</strong></p>
}
export default Hello;