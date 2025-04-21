import React, { useState, useEffect } from "react";

const initialTodos = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Clean house" },
  { id: 3, title: "Study for exam" },
];

const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const PublicPage = () => {
  const [search, setSearch] = useState("");
  const todos = initialTodos;
  const debouncedSearch = useDebouncedValue(search, 300);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Public To-Do Items</h2>
      <div>
        <input
          type="text"
          placeholder="Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PublicPage;
