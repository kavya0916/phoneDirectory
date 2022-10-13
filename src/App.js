import './App.css';
import { Fragment } from 'react';
import React  from 'react';

function App() {
var appTitle = "Phone Directory";
var ele = React.createElement("div", {className: "header"}, "Phone Directory");
  return (
    <><div className='header'>
      {appTitle}
      {ele}
    </div><button>Add</button><div>
        <span>Name</span> <br />
        <span>Phone</span>
      </div></>
        );
}

export default App;
