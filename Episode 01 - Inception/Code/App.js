// ➜ DOM (pure)
const rootHTML = document.getElementById("root");
const rootElementContent = rootHTML.textContent;
console.log(rootHTML);
console.log(rootElementContent);

// ➡️ Using JS to manipulate the DOM (pure)
// const heading_first = document.createElement("h1");
// heading_first.textContent = "Namaste React 🚀 ( Project Based Learning)";
// console.log(heading_first);
// root.appendChild(heading_first);

// ➡️ Notes
// CDN - content delivery network
// Crossorigin - main object of crossorigin to used share one domain to other domain(just like client-side-architrue)
// This enables a better error handling experience in React 16 and later.
// React Js is nothing, pure javascript code (my freind), who is writtern these all code, facebook developers,
// Written by facebook developer(don't think too much).
// Don't panic (React js is very easy)
// Software Engineer(UI developer), be consistent, be calm, Learn ui design appraoch

// ➡️ Do you know, what is most costly operation in javascript(website)?
// -> answer is simple- DOM manuplation(DOM)
// - The DOM (Document Object Model) is a programming interface that represents the structure of a webpage as a tree of objects. It allows developers to manipulate HTML and CSS dynamically using languages like JavaScript. For example, you can use the DOM to update content, change styles, or respond to user interactions.

const Heading = React.createElement("h1", {}, "Hello world!🚀)");
console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
// push into ReactDOM(Tree)
root.render(Heading);

/* ➡️ Assignments
<div id="parent">
  <div id=child-1>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child-2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>
ReactElement(Object) => HTML(Browser Understands) 
This object React.CreateElement("",{},[]);
{} -> this object {} is a place,where you can define the attribute(id,className,custom-attritude).
*/

const mainContainer = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h1", {}, "I'm h2 Tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h1", {}, "I'm h2 Tag"),
  ]),
]);

console.log(mainContainer);
root.render(mainContainer);

// ➡️ (complex)
// Using React.DOM,it will become complex
// Let me tell you, Freind ->
// That's why jsx came into picture
// JSX - JAVASCRIPT XML
// JSX - make our life easy!
