import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

import Todo from './components/Todo'
import TodoAdd from './components/TodoAdd'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  getTodos(){
    $.ajax({
      // https://jsonplaceholder.typicode.com/todos
      url: 'http://localhost:3004/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }
  componentWillMount(){
  this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }
  handleAddTodo(){
    this.getTodos()
  }
  handleDeleteTodo(id){
    $.ajax({
      // https://jsonplaceholder.typicode.com/todos
      url: 'http://localhost:3004/todos/' + id,
      type: 'DELETE',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log(data + " #"+id);
        $("#"+id).slideUp(300, () => {
                this.getTodos();
        });

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="App col-xs-12">
        <TodoAdd addProject={this.handleAddTodo.bind(this)}/>
        <Todo onDelete={this.handleDeleteTodo.bind(this)} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
