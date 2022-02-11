import {useState} from 'react';
import "./styles.css";

export default function App() {
  const [hovered, setHovered] = useState('unhovered');

  const onMouseEnter = () => {
    setHovered('hovered');
  }

  const onMouseLeave = () => {
    setHovered('unhovered');
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          width: '100%',
          padding: '50px',
          backgroundColor: 'yellow',
        }}
      >
      {hovered}
      </div>
    </div>
  );
}
