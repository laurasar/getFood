import React from 'react';
import "../css/global.css";
import Form from "./Form";
import Recipe from "./Recipe";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      recipes: [],
    };
    this.updateRecipes = this.updateRecipes.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  updateRecipes(result){
    this.setState({
    recipes: result,
    });
  }

  updateIngredients(keywords){
    this.setState({
    ingredients: keywords,
  });
}

  render() {
    return(
      <div>
        <h1>Look up recipes for ingredients you have!</h1>
        <Form
          updateIngredients={ this.updateIngredients }
        />
      </div>
    )
  }
}

export default App;
