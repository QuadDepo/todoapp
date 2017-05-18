import React, { Component } from 'react';

import TodoItem from './TodoItem';
import TodoCheck from './TodoCheck';


class Todo extends Component {
  deleteTodo(id){
    this.props.onDelete(id);
  }
  render() {
    let todoItems;
    if (this.props.todos) {
        todoItems = this.props.todos.map(todo => {
          return(
              <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.id} todo={todo} />
          );
        });
    }
    return (
      <div className="Todo">
        {todoItems}
      </div>
    );
  }
}

export default Todo;
