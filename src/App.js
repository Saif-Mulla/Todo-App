import React,{ Component } from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';


class App extends Component{
  state = {
    todoApp : [
      {id : 1 , content : 'Buy some Items'},
      {id : 2 , content : 'Watch Match'},
    ]
  }
  deleteTodo = (id) =>{
    const todos = this.state.todoApp.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todoApp : todos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random()
    let todos = [...this.state.todoApp,todo]
    console.log(todos);
    
    this.setState({
      todoApp : todos
    })
     
  }
  render(){
    
    return(
      <div className="todo-app container">
       <h1 className = "center blue-text">Todo's List</h1>
       <Todos todos={this.state.todoApp} deleteTodo ={this.deleteTodo} />
       <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
