import React from 'react';
import "../css/global.css";
import Form from "./Form";

class App extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return(
      <div>
        <header>
          <h2>getFood</h2>
          <h3> Get Recipes for ingredients you have!</h3>
        </header>
        <Form history ={this.props.history}/>
      </div>
    )
  }
}

export default App;
