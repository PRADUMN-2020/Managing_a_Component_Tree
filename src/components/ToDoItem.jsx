import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.onPress(props.id);
      }}
    >
      {props.value}
    </li>
  );
}

export default ToDoItem;
