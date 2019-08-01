import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
/**
 * React Component to highlight any part of the containing block in reactangle size.
 */

const ReactBlockHighlighter = ({ id, x, y, height, width, opacity, color }) => {
  const canvasRef = useRef(null);
  const ctx = useRef();
  const canvas = useRef({});

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
  }, []);

  useEffect(() => {
    canvas.current = document.getElementById(id) || {};
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.current.globalAlpha = opacity;
    ctx.current.fillStyle = color;
    ctx.current.fillRect(x, y, width, height);
    ctx.current.lineWidth = .2;
    ctx.current.strokeStyle = "#FF0000";
    ctx.current.strokeRect(x, y, width, height);
  }, [x, y, height, width, id, color, opacity]);

  return (
    <canvas style={{ width: "100%", height: "100%" }} ref={canvasRef} id={id} />
  );
};

ReactBlockHighlighter.propTypes = {
  /** Unique id for the canvas element */
  id: PropTypes.string,
  /** x-coordinate of starting point */
  x: PropTypes.number,
  /** y-coordinate of starting point */
  y: PropTypes.number,
  /** Height of the area to be highlighted */
  height: PropTypes.number,
  /** Width of the area to be highlighted */
  width: PropTypes.number,
  /** Opacity of the area to be highlighted */
  opacity: PropTypes.number,
  /** Color of the area to be highlighted */
  color: PropTypes.string
}

ReactBlockHighlighter.defaultProps = {
  id: "block-highlight-canvas",
  opacity: .5,
  color: "#ffff00",
  x: 0,
  y: 0,
  width: 250,
  height: 20
};

export default ReactBlockHighlighter;