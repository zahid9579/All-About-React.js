import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../../app/feature/todo/todoSlice";
import { useState } from "react";
import './Todo.css'; // 

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos); 
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState(""); 
  const [editId, setEditId] = useState(null); 

  // Add a new todo
  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todoText })); 
      setTodoText(""); 
    }
  };

  // Update an existing todo
  const handleUpdateTodo = () => {
    if (todoText.trim() && editId !== null) {
      dispatch(updateTodo({ id: editId, newText: todoText }));
      setTodoText(""); 
      setEditId(null); 
    }
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  // Handle editing a todo
  const handleEditTodo = (todo) => {
    setTodoText(todo.text); // 
    setEditId(todo.id); // 
  };

  return (
    <div className="todo-container">
      <h1>Welcome to your Todo Application</h1>

      {/* Single input field for both adding and updating */}
      <input
        type="text"
        className="todo-input"
        placeholder={editId ? "Update your todo..." : "Enter your todo..."} // Change placeholder text for editing
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)} // Update text as user types
      />
      <button className="add-update-btn" onClick={editId ? handleUpdateTodo : handleAddTodo}>
        {editId ? "Update Todo" : "Add Todo"} 
      </button>

      {/* List of todos */}
      <div>
        
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button className="delete" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button className="edit" onClick={() => handleEditTodo(todo)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
