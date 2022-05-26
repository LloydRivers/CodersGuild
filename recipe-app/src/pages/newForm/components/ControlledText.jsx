import React from "react";

function ControlledText({ labelValue, id, name, onChangeHandler }) {
  return (
    <>
      <label htmlFor={id}>{labelValue}</label>
      <textarea onChange={onChangeHandler} id={id} name={name}></textarea>
    </>
  );
}

export default ControlledText;
