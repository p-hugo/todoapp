import React, { useState } from 'react';
import Wrapper from './components/Wrapper'
import { DragDropContext } from 'react-beautiful-dnd';
import { randomId } from './utils/randomIds';
import Input from './components/Input/';
import TodoBin from './components/TodoBin'
import TodoItem from './components/TodoItem'
import Container from './components/Container';
import { ThemeProvider } from 'styled-components'
import {theme as importedTheme, lightTheme} from './utils/theme.config';
import ToggleButton from './components/ToggleButton';

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
            <Input handleUpdate={handleUpdate} />
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
