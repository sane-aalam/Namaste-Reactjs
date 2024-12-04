import React from "react";
import ReactDOM from "react-dom/client";

// This is how we create elements using Core React
// React Element
// React.createElement = Object => when render to the DOM, then it will becomes an HTMl element.
// React.createElement = Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

// JSX = JSX is a JavaScript Syntax which is easier to create React Elements
// JSX - is not HTML in JavaScript, but JSX is HTML like or XML like Syntax
// This is how we create elements using JSX
// JSX is React.createElement at the end of the day

// JSX (transipiled before it reaches the JS Engine)
// Transpiled means -> Transpiling is converting one higher level language to another higher level language. For example, Typescript is a high level language but after it's transpiled it's turned into JavaScript (another high level language). Or Babel for example can transpile ES6 JavaScript code into ES5 JavaScript.

// Parcel is Transpiling this code, means Parcel Manages Transpiling the code which is done By the Package known as Babel. Babel is a Transpiler - A source-to-source translator, source-to-source compiler (S2S compiler), transcompiler, or transpiler is a type of translator that takes the source code of a program written in a programming language as its input and produces an equivalent source code in the same or a different programming language.

// JSX => Transpiled to React.createElement => React.JS Object = will be converted to HTMLElement on render(render)
const jsxHeading = <h1 id="heading">Namaste React Using JSX🚀</h1>;
console.log(jsxHeading);

// React Component - Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
// 01) Class Based Component - Old way of writing React Components
// 02) Functional Components - New way of writing React Components
// Everything is components -> "Header", "Footer", "Card", "Button"

// React.createElement = JSX
const DivTag = <h1> div tag</h1>;
console.log(DivTag);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root.render(jsxHeading);
// root2.render(DivTag);

// Working of JSX ->
// step-1 React.createElement
// step-2 ReactElement(js) -> object
// step-3 HTML element
// step-4 show into dislay(DOM tree)

const HeadingJsx = () => {
  return (
    <div>
      <h1>Swiggy Logo</h1>
      <p>Select delivery location</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingJsx />);
