import React, { Component } from 'react';
import Wrapper from './Components/Wrapper'
import { DragDropContext } from 'react-beautiful-dnd';
import { randomId } from './utils/randomIds';
import InputContainer from './Components/Input/Input.container';
import TodoBin from './Components/TodoBin'
import TodoItem from './Components/TodoItem'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: {
        "xyz": { id: "xyz", content: "Finish todo app" }
      },
      order: ["xyz"],
    };
  }

  handleDragEnd = result => {
    const { draggableId, destination, source } = result;
    if (!destination) return null;
    if (destination.index === source.index) return;
    let newOrder = Array.from(this.state.order);
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, draggableId);
    this.setState({
      order: newOrder
    });
  }

  handleClick = () => {
    this.setState({
      id: randomId()
    })
  };

  handleUpdate = content => {
    const newTodo = {
      id: randomId(),
      content
    }

    this.setState(prevState => ({
      todos: {
        ...prevState.todos,
        [newTodo.id]: newTodo
      },
      order: [newTodo.id, ...prevState.order]
    }))
  };

  render() {
    const { todos, order } = this.state;
    const todoList = order.map((todoID, i) => <TodoItem todo={todos[todoID]} index={i} key={todoID}/> );
    return (
      <Wrapper>
        <h1>What are your plans for today?</h1>
        <InputContainer handleUpdate={this.handleUpdate}/>
        <DragDropContext
          onDragEnd={this.handleDragEnd}
        >
          <TodoBin id="todos-1">
            {todoList}
          </TodoBin>
        </DragDropContext>
      </Wrapper>
    );
  }
}

export default App;
