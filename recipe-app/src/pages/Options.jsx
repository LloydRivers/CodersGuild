import React, { useState, useEffect } from "react";

const Options = () => {
  const [options, setOptions] = useState();
  const [paragraph, setParagraph] = useState(
    "Lorem ipsum dolor Redux sit amet consectetur React adipisicing Node elit. Sit, Vue numquam."
  );
  console.log(typeof options);
  return (
    <div style={{ width: "50%", margin: "0 auto" }} class="select">
      <h3>You removed {options}</h3>
      <select value={options} onChange={(e) => setOptions(e.target.value)}>
        <option></option>
        <option>Redux</option>
        <option>React</option>
        <option>Node</option>
        <option>Vue</option>
      </select>
      <p>
        {paragraph
          .split(" ")
          .filter((word) => word != options)
          .join(" ")}
      </p>
    </div>
  );
};

export default Options;
