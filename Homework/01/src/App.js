import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setLeft(left - 100)}>Left</button>
        <button onClick={() => setLeft(left + 100)}>Right</button>
        <button onClick={() => setTop(top - 100)}>Up</button>
        <button onClick={() => setTop(top + 100)}>Down</button>
      </div>
      <div className='cub'>
        <div
          style={{
            backgroundColor: "rgb(153, 255, 204)",
            width: "300px",
            height: "300px",
            marginTop: top + "px",
            marginLeft: left + "px",
          }}
          className="box"
        ></div>
      </div>
    </div>
  );
};

export default App;
