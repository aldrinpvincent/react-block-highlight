# React Block Highlight

React Component to highlight any part of the containing block in rectangle.

### Installation

```bash
  npm i react-block-highlight --save
```

### Usage

#### Importing component

```js
import ReactBlockHighlight from "react-highlight";
```

#### Highlighting some part of block

Part of the block that requires to be highlighted can be passed in props with opacity and color

```html
const highlightProps = { x, y, height, width, opacity, color };

<ReactBlockHighlight id="demo-space" {...highlightProps}>
  {
  <div>Hifglight some part of this div</div>
  }
</ReactBlockHighlight>
```

Props

| Prop    |    Type     |                Description                 |      Default Value       |
| ------- | :---------: | :----------------------------------------: | :----------------------: |
| id      |   string    |      Unique id for the canvas element      | "block-highlight-canvas" |
| x       |   number    |       x-coordinate of starting point       |            0             |
| y       |   number    |       y-coordinate of starting point       |            0             |
| height  |   number    |    Height of the area to be highlighted    |            20            |
| width   |   number    |    Width of the area to be highlighted     |           250            |
| opacity | number(0-1) |   Opacity of the area to be highlighted    |           0.5            |
| color   |   number    | Color of the area to be highlighted in RGB |        "#ffff00"         |

Demo - https://react-block-highlight.netlify.com/
