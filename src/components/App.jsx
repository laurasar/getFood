import React from 'react';
import "../css/global.css";
import Form from "./Form";
import Recipe from "./Recipe";

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Look up recipes for ingredients you have!</h1>
        <Form />
        <Recipe />
      </div>
    )
  }
}

export default App;
