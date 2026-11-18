import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoFormModal from "./TodoFormModal.jsx";
import { toClass } from "../data.js";

export default function TodoDetail({ todos, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return (
      <div className="detail-page">
        <div className="detail-card">
          <p>Tugas tidak ditemukan. Mungkin sudah dihapus.</p>
          <div className="actions">
            <button className="btn btn-red" onClick={() => navigate("/")}>
              Kembali
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-card">
        <div className="detail-grid">
          <div>
            <h3>Judul</h3>
            <p>{todo.title}</p>
            <h3>Deskripsi</h3>
            <div className="desc-box">{todo.description || "-"}</div>
          </div>
          <div>
            <h3>Status</h3>
            <p>
              <span className={`status-${toClass(todo.status)}`}>
                {todo.status}
              </span>
            </p>
            <h3>Prioritas</h3>
            <p>
              <span className={`priority-${toClass(todo.priority)}`}>
                {todo.priority}
              </span>
            </p>
            <h3>Deadline</h3>
            <p>{todo.deadline}</p>
            <div className="actions">
              <button className="btn btn-red" onClick={() => navigate("/")}>
                Kembali
              </button>
              <button className="btn btn-blue" onClick={() => setShowForm(true)}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <TodoFormModal
          todo={todo}
          onClose={() => setShowForm(false)}
          onSubmit={(data) => {
            onUpdate(todo.id, data);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}