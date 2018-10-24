import React from "react";

// this component uses Bootstrap to get the style for the cards

class Recipe extends React.Component {

  render() {
    return(
      <div>
        <div className="recipe-box container" >
          <div className="row" >
            {
              this.props.recipes.map( (recipe) => {
                  let thumbnail = "https://lh3.googleusercontent.com/kU6nXOMjJedR-RIugIEyHePg0Gye1MdOei6LxNKR94iXwso85mSDIbp-z7yXYT31RAC1=s80";

                    return(
                        <div className="card col-3" style={{width: 18 + "rem"}}>
                          <img className="img-fluid card-img-top" src={ `${ recipe.thumbnail || thumbnail }` } alt="Food" />
                          <div className="card-body">
                            <h5 className="card-title">{ recipe.title }</h5>
                            <p className="card-text">{ recipe.ingredients }</p>
                            <a href={ `${ recipe.href }` } className="btn btn-primary">View Recipe</a>
                          </div>
                        </div>
                    );
                  }
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe;
