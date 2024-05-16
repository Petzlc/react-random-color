import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // set a value
  const [newValue, setNewValue] = useState(true);
  // const to generate random color
  const generatedColor = randomColor();
  console.log(generatedColor);
  return (
    <div
      style={{
        backgroundColor: generatedColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0px',
        padding: '28vh',
      }}
    >
      <h1>Random Color Generator</h1>
      <button
        onClick={() => setNewValue(newValue === !true)}
        style={{
          padding: '5px',
          marginLeft: '100px',
          marginTop: '50px',
          backgroundColor: '#050708',
          color: '#FFFFFF',
          borderRadius: '5px',
          fontSize: '1.2rem',
          overflow: 'hidden',
        }}
      >
        Generate
      </button>
      <div
        style={{
          color: '#FFFFFF',
          backgroundColor: generatedColor,
          margin: '0px',
          fontSize: '11vh',
          padding: '10px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Generated Color: {generatedColor}
      </div>
    </div>
  );
}
