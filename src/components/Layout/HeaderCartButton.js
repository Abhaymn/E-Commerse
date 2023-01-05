import React from "react";
import { Badge } from "react-bootstrap";


const HeaderCartButton = (props) => {
  return (
    <div >
      <button onClick={props.onclick}>
        cart
        <Badge>0</Badge>
      </button>
    </div>
  );
};

export default HeaderCartButton;