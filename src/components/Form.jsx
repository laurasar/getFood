import React from "react";

class Form extends React.Component {
  getIngredients(event){
    event.preventDefault();
    const IngredientAry = this.ingFormInput.value;
    this.props.updateIngredients(IngredientAry);
    console.log(IngredientAry);
    
  }


  render() {
    return(
      <div>
        <form className="form-inline" onSubmit={ (event) => { this.getIngredients(event)} }>
          <div className="form-group mb-2">
            <label for="staticEmail2" className="sr-only">Ingredient</label>
            <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="          Enter your ingredients" />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" className="sr-only">Ex: Olive Oil</label>
            <input type="string" className="form-control" id="inputPassword2" placeholder="Ex: Olive Oil" ref={(input) => {this.ingFormInput = input}} />
          </div>
          <button type="submit" className="btn btn-primary mb-2" >Search Recipes!</button>
        </form>
      </div>
    );
  }
}

export default Form;
