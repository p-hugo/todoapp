import React from 'react'
import PropTypes from 'prop-types'
import {Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components'


const Container = styled.div`
  display: inline-block;
  padding: 12px;
  border: 1px solid lightgray;
  border-radius: 4px;
  height: 50vh;
  overflow-y: scroll;
`

const TodoBin = ({id, children}) => (
    <Droppable droppableId={id} >
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.dropabbleProps}
        >
          {children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
)

TodoBin.propTypes = {
  id: PropTypes.string.isRequired
}

export default TodoBin;