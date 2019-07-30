import React from "react";
const DemoPropsInput = ({ x, y, height, width, opacity, color, setColor, setHeight, setOpacity, setWidth, setX, setY }) => {
  return (
    <section>
      <h3>Highlighter properties</h3>
      <label htmlFor="x">Origin - x : </label>
      <input
        type="number"
        onChange={e => setX(Number(e.target.value))}
        value={x}
      />
      <br />
      <label htmlFor="y">Origin - y : </label>
      <input
        type="number"
        onChange={e => setY(Number(e.target.value))}
        value={y}
      />
      <br />
      <label htmlFor="y">Height : </label>
      <input
        type="number"
        onChange={e => setHeight(Number(e.target.value))}
        value={height}
      />
      <br />
      <label htmlFor="y">Width : </label>
      <input
        type="number"
        onChange={e => setWidth(Number(e.target.value))}
        value={width}
      />
      <br />
      <label htmlFor="y">Color : </label>
      <input
        type="color"
        onChange={e => {
          setColor(e.target.value)
        }
        }
        value={color}
      />
      <br />
      <label htmlFor="y">Opacity : </label>
      <input
        type="range" min="0" max="1" step="0.1"
        onChange={e => setOpacity(Number(e.target.value))}
        value={opacity}
      />
      {opacity}
      <br />
    </section>
  );
};

export default DemoPropsInput;
