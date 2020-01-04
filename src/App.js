import React, {Component} from 'react';
import Todolist from './Todolist';
import todosData from './todosData';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: todosData,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todo.map(todos => {
                if (todos.id === id) {
                    return {
                        ...todos,
                        completed: !todos.completed
                    }
                }
                return todos
            })
            return {
                todo: updatedTodos
            }
        })
      }

  render() {
    const todos = this.state.todo.map(item => {
    return(
      <Todolist key={item.id} item={item} handleChange={this.handleChange} handleClick={this.handleClick} />
      );
    })
    return (
      <div className="todo-list">
        {todos}
      </div>
    )    
  }
}

export default App;