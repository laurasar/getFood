import React from 'react';
import "../css/global.css";
import Form from "./Form";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    return(
      <div>
        <h2>getFood</h2>
        <h3> Get Recipes for ingredients you have!</h3>
        <Form />
      </div>
    )
  }
}

export default App;
