import React from 'react';
import "../css/global.css";
import Form from "./Form";

class App extends React.Component {
  constructor(prop){
    super(prop);
    this.state={
      ingredients:"",
    }
    this.changeIngredient=this.changeIngredient.bind(this);
  }
  changeIngredient(arg){
    this.setState({
      ingredients:args,
    },  this.history.push("/search"){

    })
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
