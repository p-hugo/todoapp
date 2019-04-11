import React from 'react'
import PropTypes from 'prop-types'
import {Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components'


const Container = styled.div`
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid lightgray;
  max-height: 50vh;
  overflow-y: scroll;
`

const TodoCard = styled.div`
  padding: 10px;
`
const TodoBin = ({id, children}) => (
  <Container>
    <Droppable droppableId={id} >
      {provided => (
        <TodoCard
          ref={provided.innerRef}
          {...provided.dropabbleProps}
        >
          {children}
          {provided.placeholder}
        </TodoCard>
      )}
    </Droppable>
  </Container>
)

TodoBin.propTypes = {
  id: PropTypes.string.isRequired
}

export default TodoBin;