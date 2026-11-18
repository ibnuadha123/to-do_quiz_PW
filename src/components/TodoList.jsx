import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoFormModal from "./TodoFormModal.jsx";
import { toClass } from "../data.js";

export default function TodoList({ todos, onAdd, onDelete }) {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (todo) => {
    if (window.confirm(`Hapus tugas "${todo.title}"?`)) {
      onDelete(todo.id);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
        <button className="btn-outline" onClick={() => setShowForm(true)}>
          + Tambah Todo
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Judul</th>
              <th>Status</th>
              <th>Prioritas</th>
              <th>Deadline</th>
              <th className="center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 && (
              <tr>
                <td colSpan={5} className="empty">
                  Belum ada tugas. Klik "Tambah Todo" untuk membuat yang pertama.
                </td>
              </tr>
            )}
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="title-cell">{todo.title}</td>
                <td>
                  <span className={`status-${toClass(todo.status)}`}>
                    {todo.status}
                  </span>
                </td>
                <td>
                  <span className={`priority-${toClass(todo.priority)}`}>
                    {todo.priority}
                  </span>
                </td>
                <td>{todo.deadline}</td>
                <td className="center">
                  <button
                    className="btn-icon btn-blue"
                    onClick={() => navigate(`/todo/${todo.id}`)}
                    aria-label={`Lihat detail ${todo.title}`}
                    title="Lihat detail"
                  >
                    👁
                  </button>
                  <button
                    className="btn-icon btn-red"
                    onClick={() => handleDelete(todo)}
                    aria-label={`Hapus ${todo.title}`}
                    title="Hapus"
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <TodoFormModal
          onClose={() => setShowForm(false)}
          onSubmit={(data) => {
            onAdd(data);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}