import React, { useState, useEffect } from "react";

let nextId = 4; // starting after initial todos in PublicPage

const defaultTodos = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Clean house" },
  { id: 3, title: "Study for exam" },
];

const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : defaultTodos;
  });
  const [editingTodo, setEditingTodo] = useState(null);
  const [formTitle, setFormTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      // update todo
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, title: formTitle } : todo
        )
      );
      setEditingTodo(null);
    } else {
      // add new todo
      setTodos([...todos, { id: nextId++, title: formTitle }]);
    }
    setFormTitle("");
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setFormTitle(todo.title);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCancel = () => {
    setEditingTodo(null);
    setFormTitle("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{editingTodo ? "Edit Todo" : "Add New Todo"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          placeholder="Todo title"
          required
        />
        <button type="submit">{editingTodo ? "Update" : "Add"}</button>
        {editingTodo && (
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>
      <h3>Your Todos:</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleEdit(todo)}
              style={{ cursor: "pointer" }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
