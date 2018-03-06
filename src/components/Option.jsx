import React from "react";

const Option = (props) => {
    return (
      <div>
        <li>{props.optionText}</li>
        <button onClick={
          (e) => 
            {
              props.handleDeleteOption(props.optionText);
            }}
        >Delete</button>
      </div>
    );
  }

export default Option;