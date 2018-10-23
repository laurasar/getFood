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
      });

  }

  render() {
    return (
      <div>Hello</div>
    )
  }

}

export default Search;
