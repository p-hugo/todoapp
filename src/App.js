import React, { useState } from 'react';
import Wrapper from './Components/Wrapper'
import { DragDropContext } from 'react-beautiful-dnd';
import { randomId } from './utils/randomIds';
import InputContainer from './Components/Input/Input.container';
import TodoBin from './Components/TodoBin'
import TodoItem from './Components/TodoItem'
import Container from './Components/Container';
import { ThemeProvider } from 'styled-components'
import {theme as importedTheme, lightTheme} from './utils/theme.config';
import ToggleButton from './Components/ToggleButton';

export default function App() {

  const [todos, setTodos] = useState({
    "xyz": { id: "xyz", content: "Finish todo app" }
  });
  const [order, setOrder] = useState(["xyz"]);
  const [theme, setTheme] = useState(importedTheme);

  const handleDragEnd = result => {
    const { draggableId, destination, source } = result;
    if (!destination) return null;
    if (destination.index === source.index) return;
    let newOrder = Array.from(order);
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, draggableId);
    setOrder(newOrder);
  }

  const handleUpdate = content => {
    const newTodo = {
      id: randomId(),
      content
    }
    setTodos({...todos, [newTodo.id]: newTodo});
    setOrder([newTodo.id, ...order]);
  };

  const handleToggle = e => {
    if(theme === lightTheme){
      setTheme(importedTheme);
    }else {
      setTheme(lightTheme);
    }
  }

  const todoList = order.map((todoID, i) => <TodoItem todo={todos[todoID]} index={i} key={todoID} />);
    console.log(theme);
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Container>
            <p>Change the theme! <ToggleButton active={theme === lightTheme} onClick={handleToggle}/></p>
            <h1>What are your plans for today?</h1>
            <InputContainer handleUpdate={handleUpdate} />
            <DragDropContext
              onDragEnd={handleDragEnd}
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
