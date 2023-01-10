import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [shape, setShape] = useState("square");
  const [shapesToBeAdded, setShapesToBeAdded] = useState([]);

  const handleShapeChange = (event) => {
    setShape(event.target.value);
  };

  const handleAddShapeButtonClick = () => {
    setShapesToBeAdded([...shapesToBeAdded, shape]);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleShapeChange}>
          <option value="square" selected={shape === 'square'}>Square</option>
          <option value="circle" selected={shape === 'circle'}>Circle</option>
        </select>
      
      <button onClick={handleAddShapeButtonClick}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapesToBeAdded.map((shape, index) => (
          <div key={index} className={shape}></div>
        ))}
      </div>
    </div>
  );
};

export default App;
