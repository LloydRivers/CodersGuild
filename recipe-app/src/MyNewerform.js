import React, { useState } from "react";

function MyNewerform() {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
  });

  return (
    <>
      <label>MyNewerform</label>
      <input type="text">MyNewerform</input>
      <label>MyNewerform</label>
      <input
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        type="password"
      >
        MyNewerform
      </input>
      <label>MyNewerform</label>
    </>
  );
}

export default MyNewerform;
