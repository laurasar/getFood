import React from "react";

class Form extends React.Component {
  render() {
    return(
      <div className="ing-select">
        <label htmlFor="ings">Enter ingredients</label>
        <input
          type="text"
          id="ingredient"
          name="ingredient"
          placeholder="ex: Olive Oil, Oregano"  ref={(input) => {this.formInput = input}
          }/>
        <input type="submit" value="Find my recipes!" />
      </div>
    );
  }
}

export default Form;
