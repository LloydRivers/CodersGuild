import React from "react";

function RadioInput({ labelValue, name, id, value, onChangeHandler }) {
  return (
    <>
      <input
        onChange={(e) => onChangeHandler(e)}
        type="radio"
        id={id}
        value={value}
        name={name}
      />
      <label htmlFor={id}>{labelValue}</label>
    </>
  );
}

export default RadioInput;
