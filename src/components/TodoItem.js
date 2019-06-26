import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 10px 0;
  padding: 10px 10px;
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.fontColor};
  width: calc(100% - 12px);
  overflow: hidden;
  box-shadow: 0px 6px 8px rgba(164, 164, 164, 0.213825);
  border-radius: 3px;
`

Container.defaultProps = {
  theme:{
    contrast: "white",
    fontColor: "black"
  }
}

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