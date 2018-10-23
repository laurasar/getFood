import React from 'react';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.results);
        this.setState({
          recipes: response.results,
        });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.recipes.map( (recipe) => {
              return (
                <div>
                  <h2>{ recipe.title }</h2>
                  <p>{ recipe.ingredients }</p>
                  <a href={ `${recipe.href}` } target="_blank">View this recipe now!</a>
                  <img src={ `${ recipe.thumbnail }` } alt=""/>
                </div>
              );
            }
          )
  
        }
      </div>
    );
  }

}

export default Search;
