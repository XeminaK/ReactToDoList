import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

// original way
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);






//alternate dway to render the code
// ReactDOM.render(
//     <div>
//     <p>Hello!</p>
//     </div>,
//     document.getElementById('container')
// )