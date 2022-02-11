import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("yellow");
  const [content, setContent] = useState("unhovered");

  const onMouseEnter = () => {
    setContent("hovered");
    setColor("aquamarine");
  };

  const onMouseLeave = () => {
    setContent("unhovered");
    setColor("yellow");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        id="hover-area"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          width: "100%",
          padding: "50px",
          backgroundColor: color
        }}
      >
        {content}
      </div>
    </div>
  );
}
