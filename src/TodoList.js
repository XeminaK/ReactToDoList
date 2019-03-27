import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: []
    };
 
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
   
  addItem(e) {
    if (this._inputElement.value !== "") { 
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => { //setting the properties
        return { 
          items: prevState.items.concat(newItem)  //add the new item to the current array
        };
      });
     
      this._inputElement.value = ""; //clears the input box
    }
     
    console.log(this.state.items); //it is delaying the responses by 1 input behind ---need to fix this for the future
       
    e.preventDefault(); //prevents the default behavior of refreshing the page and clearing all our data out
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
                    placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                  delete={this.deleteItem}/> 
      </div>
    );
  }
}
 
export default TodoList;
