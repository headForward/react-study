import React from "react";
import propTypes from "prop-types";

export default function List(props) {
  return (
    <ul>
      {props.list.map((value) => {
        return (
          <li key={value.id}>
            {value.name} <span onClick={props.onListSpanClick(value.id)}>x</span>
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  list: propTypes.array,
};
