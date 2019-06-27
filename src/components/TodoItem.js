import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const defaultTheme = {
  theme: {
    contrast: "white",
    fontColor: "black"
  }
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 100fr;
  grid-gap: 2px;
  align-items: center;
  justify-items: flex-start;
  margin: 10px 0;
  padding: 10px 10px;
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.fontColor};
  width: calc(100% - 12px);
  overflow: hidden;
  box-shadow: 0px 6px 8px rgba(164, 164, 164, 0.213825);
  border-radius: 3px;
  & div {
    color: ${props => props.theme.fontColor};
  }
`;

const CompleteIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.fontColor};
  background: ${props =>
    props.completed ? props.theme.fontColor : "transparent"};
  padding: none;
  margin: none;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &:active {
    background: black;
  }
`;

const DeleteIcon = styled.div`
  width: 20px;
  height: 8px;
  border: 1px solid black;
  border-radius: 4px;
  background: black;
  padding: none;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  &:active {
    background: transparent;
  }
`;

Container.defaultProps = { defaultTheme };
CompleteIcon.defaultProps = { defaultTheme };

const TodoItem = ({ todo, index, handleRemove, handleToggle }) => (
  <Draggable draggableId={todo.id} index={index}>
    {provided => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <CompleteIcon
          completed={todo.complete}
          onClick={() => handleToggle(todo.id, !todo.complete)}
        />
        <DeleteIcon onClick={() => handleRemove(todo.id)} />
        <div>{todo.content}</div>
      </Container>
    )}
  </Draggable>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string
  }),
  index: PropTypes.number
};

export default TodoItem;
