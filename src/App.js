import './App.css';
//import { useState } from 'react';
import Hooksss from './Hooksss.js';
import Checkb from './Checkb.js';
//import Forms from './Forms.js';
import FormsControlled from './FormsControlled.js';
import FetchData from './FetchData.js';
import FetchData3 from './FetchData3.js';


function App(props) {

  return (
    <div className="App">
          <Hooksss />
          <Checkb />
          <br /><br /><br />
          <FormsControlled />
          <br /><br /><br />
          <FetchData />
          <br /><br /><br />
          <FetchData3 />

    </div>
  );
}

export default App;
