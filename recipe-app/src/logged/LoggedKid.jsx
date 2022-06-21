import React from "react";

function LoggedKid({ count }) {
  return <span>{count}</span>;
}

export default React.memo(LoggedKid);
