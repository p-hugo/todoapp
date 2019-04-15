import React, { Component } from 'react';
import Wrapper from './Components/Wrapper'
import { DragDropContext } from 'react-beautiful-dnd';
import { randomId } from './utils/randomIds';
import InputContainer from './Components/Input/Input.container';
import TodoBin from './Components/TodoBin'
import TodoItem from './Components/TodoItem'
import Container from './Components/Container';
import { ThemeProvider } from 'styled-components'
import {theme, lightTheme} from './utils/theme.config';
import ToggleButton from './Components/ToggleButton';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: {
        "xyz": { id: "xyz", content: "Finish todo app" }
      },
      order: ["xyz"],
      theme: theme
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

  handleToggle = e => {
    if(this.state.theme === lightTheme){
      this.setState({
        theme: theme
      })
    }else {
      this.setState({
        theme: lightTheme
      })
    }
  }

  render() {
    const { todos, order, theme } = this.state;
    const todoList = order.map((todoID, i) => <TodoItem todo={todos[todoID]} index={i} key={todoID} />);
    console.log(theme);
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Container>
            <p>Change the theme! <ToggleButton active={theme === lightTheme} onClick={this.handleToggle}/></p>
            <h1>What are your plans for today?</h1>
            <InputContainer handleUpdate={this.handleUpdate} />
            <DragDropContext
              onDragEnd={this.handleDragEnd}
            >
              <TodoBin id="todos-1">
                {todoList}
              </TodoBin>
            </DragDropContext>
          </Container>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
