import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import { DragDropContext } from "react-beautiful-dnd";
import Input from "./components/Input/";
import TodoBin from "./components/TodoBin";
import TodoItem from "./components/TodoItem";
import Container from "./components/Container";
import { ThemeProvider } from "styled-components";
import { theme as importedTheme, lightTheme } from "./utils/theme.config";
import ToggleButton from "./components/ToggleButton";
import useTodos from "./useTodos";

export default function App() {
  const {
    todos,
    order,
    handleAdd,
    handleDragEnd,
    handleRemove,
    handleToggle: toggler
  } = useTodos({});
  const [theme, setTheme] = useState(importedTheme);

  const handleToggle = e => {
    if (theme === lightTheme) {
      setTheme(importedTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  const todoList = order.map((todoID, i) => (
    <TodoItem
      todo={todos[todoID]}
      index={i}
      key={todoID}
      handleRemove={handleRemove}
      handleToggle={toggler}
    />
  ));
  
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container>
          <p>
            Change the theme!{" "}
            <ToggleButton
              active={theme === lightTheme}
              onClick={handleToggle}
            />
          </p>
          <h1>What are your plans for today?</h1>
          <Input handleUpdate={handleAdd} />
          <DragDropContext onDragEnd={handleDragEnd}>
            <TodoBin id="todos-1">{todoList}</TodoBin>
          </DragDropContext>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}
