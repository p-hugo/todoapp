import { useReducer } from "react";
import { randomId } from "./utils/randomIds";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "TODO_ADD": {
      const id = randomId();
      const { content } = action;
      const order = [id, ...state.order];
      return {
        todos: { ...state.todos, [id]: { id, content, complete: false } },
        order
      };
    }
    case "TODO_REMOVE": {
      // Implementation to follow
      let todos = Object.assign({}, state.todos);
      delete todos[action.id];
      let order = Array.from(state.order);
      order = order.filter(v => v !== action.id);
      return { todos, order };
    }
    case "TODO_TOGGLE": {
      const todo = Object.assign({}, state.todos[action.id]);
      todo.complete = action.value;
      return { ...state, todos: { ...state.todos, [action.id]: todo } };
    }
    case "DRAG_TODO": {
      const { result } = action;
      const { draggableId, destination, source } = result;
      // when user drags but places at the same location or doesn't move it at all
      if (!destination || destination.index === source.index) return state;
      let newOrder = Array.from(state.order);
      newOrder.splice(source.index, 1); // remove one item to the right
      newOrder.splice(destination.index, 0, draggableId); // add one item
      return { ...state, order: newOrder };
    }
    default:
      return state;
  }
};

const useTodos = initialState => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: initialState,
    order: []
  });

  const handleAdd = content => {
    dispatch({
      type: "TODO_ADD",
      content
    });
  };

  // Function for react beautiful dnd when user drops an item
  const handleDragEnd = result => {
    dispatch({
      type: "DRAG_TODO",
      result
    });
  };

  const handleRemove = id => {
    dispatch({
      type: "TODO_REMOVE",
      id
    });
  };

  const handleToggle = (id, value) => {
    dispatch({
      type: "TODO_TOGGLE",
      id,
      value
    });
  };

  return { ...state, handleAdd, handleDragEnd, handleRemove, handleToggle };
};

export default useTodos;
