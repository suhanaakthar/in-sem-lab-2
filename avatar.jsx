import React from "react";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Avatar;