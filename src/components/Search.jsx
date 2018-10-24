import React from 'react';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    };
  }

  get searchIngredients() {
    // FIXME: Once everything is routed, we'll need to update this logic
    // to use parameters provided in the query string of this route.

    return "onions,garlic";
  }

  get searchQuery() {
    // FIXME: Once everything is routed, we'll need to update this logic
    // to use parameters provided in the query string of this route.

    return "omelet";
  }

  get searchRequestUrl() {
    const corsBaseUrl = "https://cors-anywhere.herokuapp.com";
    const requestApiUrl = "http://www.recipepuppy.com/api/";
    const requestUrl = `${corsBaseUrl}/${requestApiUrl}`;
    const queryString = `i=${this.searchIngredients}&q=${this.searchQuery}`;

    return (
      `${requestUrl}?${queryString}`
    );
  }

  componentDidMount() {
    fetch(this.searchRequestUrl)
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
