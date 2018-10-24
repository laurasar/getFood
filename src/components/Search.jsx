import React from 'react';
import Recipe from "./Recipe";

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
        this.setState({
          recipes: response.results,
        });
      });
  }

  render() {
    return (
      <Recipe
        recipes={ this.state.recipes }
      />
    );
  }

}

export default Search;
