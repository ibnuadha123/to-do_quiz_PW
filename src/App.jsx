import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { initialTodos } from "./data.js";
import TodoList from "./components/TodoList.jsx";
import TodoDetail from "./components/TodoDetail.jsx";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  const addTodo = (data) => {
    const nextId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos([...todos, { id: nextId, ...data }]);
    notify("Tugas berhasil ditambahkan");
  };

  const updateTodo = (id, data) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, ...data } : t)));
    notify("Tugas berhasil diperbarui");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    notify("Tugas berhasil dihapus");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<TodoList todos={todos} onAdd={addTodo} onDelete={deleteTodo} />}
        />
        <Route
          path="/todo/:id"
          element={<TodoDetail todos={todos} onUpdate={updateTodo} />}
        />
      </Routes>
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  );
}
