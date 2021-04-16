import React from 'react';

const App = () => {
  const [marginRight, setRight] = useState("px")
  const [marginTop, setUp] = useState("px")
  const [marginBottom, setDown] = useState("px")
  const [marginLeft, setLeft] = useState("px")

  return (
    <div className="container">
      <div>
          <button onClick = {()=>setRight(10)} className="button">right</button>
          <button onClick = {()=>setUp()} className="button">up</button>
          <button onClick = {()=>setDown()} className="button">down</div>
          <button onClick = {()=>setLeft()} className="button">left</div>
      </div>
      <div>
        <div style={{marginRight},{marginTop},{marginBottom},{marginLeft}} className="box">

        </div>
      </div>
    </div>
  );
};

export default App;