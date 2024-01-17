import { useState, useEffect } from "react";

function UseState() {
  const [currSib, setSib] = useState(0);

  return (
    <div>
      <h4>{currSib}</h4>
      <button onClick={() => setSib((currSib) => currSib + 1)}>Like</button>
    </div>
  );
}

export default UseState;
