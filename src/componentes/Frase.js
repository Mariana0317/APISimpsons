import React from "react";

function Frase(props) {
  return (
   
      <div className="card mb-3  frase">
        <div className="row no-gutters ">
          <div className="col-md-4 ">
            <img src={props.fraseSi.image} className="imagen py-3" alt={props.fraseSi.character}></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title my-5">{props.fraseSi.character}</h5>
              <p className="card-text my-5">
                {props.fraseSi.quote}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Frase;
