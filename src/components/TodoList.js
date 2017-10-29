import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, deleteTodo} from '../reducers/todo';

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <span className='delete-item'>
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input type='checkbox'
      defaultChecked={isComplete}
      onChange={() => toggleTodo(id)}
      /> {name}
  </li>
)

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }


  render() {
    return(
      <div className='Todo-List'>
        <ul>
          {this.props.todos.map(todo =>
            <TodoItem key={todo.id} toggleTodo={this.props.toggleTodo} {...todo} deleteTodo={this.props.deleteTodo}/>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => ({todos: state.todo.todos}), {fetchTodos, toggleTodo, deleteTodo}
)(TodoList);