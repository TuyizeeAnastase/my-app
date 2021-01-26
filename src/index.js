import React from 'react';
import ReactDom from 'react-dom';

function getBtnText(){
 
    return 'Click Me';

};

const App=()=>{


    return <div>
    <label className="label" for="name">Enter a name:</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor:'blue',color:'white'}}>{getBtnText()}</button>
  </div>
}

ReactDom.render(<App/>,document.querySelector('#root'));