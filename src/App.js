import './App.css';
//import { useState } from 'react';
import Hooksss from './Hooksss.js';
import Checkb from './Checkb.js';
//import Forms from './Forms.js';
import FormsControlled from './FormsControlled.js';
import FetchData from './FetchData.js';


function App(props) {

  return (
    <div className="App">
          <Hooksss />
          <Checkb />
          <br /><br /><br />
          <FormsControlled />
          <br /><br /><br />
          <FetchData />
    </div>
  );
}

export default App;
