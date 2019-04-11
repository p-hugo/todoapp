import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border-radius: 4px;
  margin: 10px 0;
  padding: 10px 10px;
  background: #EC8B6E;
  color: white;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 6px 8px rgba(164, 164, 164, 0.213825);
  border-radius: 3px;
`

const TodoItem = ({todo, index}) => (
  <Draggable
    draggableId={todo.id} index={index}
  >
    {provided => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {todo.content}
      </Container>
    )}
  </Draggable>
)

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string
  }),
  index: PropTypes.number
};

export default TodoItem;