import React from 'react';
import Recipe from "./Recipe";
import queryString from 'query-string';
import { commaLists } from 'common-tags';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      isLoaded: false,
    };

    console.log(this.state.isLoaded);
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
    const corsBaseUrl = "http://cors.io";
    const requestApiUrl = "http://www.recipepuppy.com/api/";
    // const requestUrl = `${requestApiUrl}`;
    const requestUrl = `${corsBaseUrl}/?${requestApiUrl}`;
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
          isLoaded: true,
        });
        console.log(this.state.isLoaded);
      });
  }

  renderRecipes() {
    if(this.state.isLoaded){
      return (
        <Recipe
          recipes={ this.state.recipes }
        />
      ); 
    } else {
      return "Loading..."
    }
  }

  render() {
    return (
      this.renderRecipes()
    );
  }

}

export default Search;
