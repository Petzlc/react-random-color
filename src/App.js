import kuler from 'kuler'; // probably not needed
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // const to generate random color
  const generatedColor = randomColor();
  console.log(generatedColor);
  // const [backgroundColor, setbackgroundColor] = useState(color.randomColor);
  return (
    <>
      <h1>Random Color Generator</h1>
      <button
        onClick={() => {
          //const newColor = randomColor();
        }}
        type="button"
        style={{
          padding: '5px',
          marginLeft: '100px',
          marginTop: '50px',
          backgroundColor: '#050708',
          color: '#FFFFFF',
          borderRadius: '5px',
          fontSize: '1.2rem',
        }}
      >
        Generate
      </button>
      <div
        style={{
          color: '#FFFFFF',
          backgroundColor: generatedColor,
          width: '800px',
          margin: '50px',
          fontSize: '100px',
          padding: '10px',
        }}
      >
        background color {generatedColor}
      </div>
    </>
  );
}
