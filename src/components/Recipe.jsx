import React from "react";

class Recipe extends React.Component {
  render() {
    return(
      <div className="recipe-box" >
        <div className="card" style={{width: 18 + "rem"}}>
          <img className="card-img-top" src="http://placekitten.com/80/80" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Recipe title</h5>
            <p className="card-text">Some quick ingredient list.</p>
            <a href="#" className="btn btn-primary">Complete Recipe</a>
          </div>
        </div>
        <div className="card" style={{width: 18 + "rem"}}>
          <img className="card-img-top" src="http://placekitten.com/80/80" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Recipe title</h5>
            <p className="card-text">Some quick ingredient list.</p>
            <a href="#" className="btn btn-primary">Complete Recipe</a>
          </div>
        </div>
        <div className="card" style={{width: 18 + "rem"}}>
          <img className="card-img-top" src="http://placekitten.com/80/80" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Recipe title</h5>
            <p className="card-text">Some quick ingredient list.</p>
            <a href="#" className="btn btn-primary">Complete Recipe</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe;
