import React from 'react';
import Recipe from "./Recipe";
import queryString from 'query-string';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };

    this.searchParams = queryString.parse(props.location.search);
  }

  get searchIngredients() {
    const i = this.searchParams.i;
    return i ? i : "";
  }

  get searchQuery() {
    const q = this.searchParams.q;
    return q ? q : "";
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
