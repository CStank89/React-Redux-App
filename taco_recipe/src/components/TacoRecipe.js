import React from "react";
import { connect } from "react-redux";

const TacoRecipe = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

export default connect()(TacoRecipe);
