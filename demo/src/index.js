import React, { useState } from 'react';
import { render } from 'react-dom';
import ReactBlockHighlighter from '../../src';
import DemoPropsInput from './PropsInput';
import "./index.css";

function Demo() {
  const [x, setX] = useState(6);
  const [y, setY] = useState(28);
  const [height, setHeight] = useState(10);
  const [width, setWidth] = useState(250);
  const [color, setColor] = useState("#ffff00");
  const [opacity, setOpacity] = useState(.5);

  const highlightProps = { x, y, height, width, opacity, color };
  const inputProps = { x, y, height, width, opacity, color, setColor, setHeight, setOpacity, setWidth, setX, setY };

  return (
    <section className="container">
      <div className="left">
        <DemoPropsInput {...inputProps} />
      </div>
      <div className="right">
        <ReactBlockHighlighter id="demo-space" {...highlightProps} />
      </div>
    </section>
  )
}

render(<Demo />, document.querySelector('#demo'))
