import React from "react";

class Form extends React.Component {
  render() {
    return(

      <div
        <form className="form-inline">
          <div className="form-group mb-2">
            <label for="staticEmail2" className="sr-only">Ingredient</label>
            <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="          Enter your ingredients" />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" className="sr-only">Ex: Olive Oil</label>
            <input type="string" className="form-control" id="inputPassword2" placeholder="Ex: Olive Oil" ref={(input) => {this.formInput = input}
            }/>
          </div>
          <button type="submit" className="btn btn-primary mb-2">Search Recipes!</button>
        </form>
      </div>
    );
  }
}

export default Form;
