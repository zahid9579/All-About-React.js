import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [], 
};

// Create slice for todo actions and reducer
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Action to add a todo
    addTodo: (state, action) => {
      state.todos.push(action.payload); 
    },

    // Action to update a todo
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText; 
      }
    },

    // Action to delete a todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export the actions and the reducer
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
