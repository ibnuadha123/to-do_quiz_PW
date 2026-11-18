import { useState } from "react";
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from "../data.js";

const emptyForm = {
  title: "",
  description: "",
  status: "to-do",
  priority: "low",
  deadline: "",
};

function ChipGroup({ label, options, value, onChange }) {
  return (
    <div className="field">
      <span className="field-label">{label}</span>
      <div className="chips" role="group" aria-label={label}>
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`chip ${value === opt ? "chip-active" : ""}`}
            aria-pressed={value === opt}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TodoFormModal({ todo, onSubmit, onClose }) {
  const isEdit = Boolean(todo);
  const [form, setForm] = useState(
    isEdit
      ? {
          title: todo.title,
          description: todo.description,
          status: todo.status,
          priority: todo.priority,
          deadline: todo.deadline,
        }
      : emptyForm
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, title: form.title.trim() });
  };

  return (
    <div className="overlay" onClick={onClose}>
      <form
        className="modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h2>{isEdit ? "Update Todo" : "Tambah Todo"}</h2>

        <div className="field">
          <label htmlFor="title">Judul</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            autoFocus
          />
        </div>

        <div className="field">
          <label htmlFor="description">Deskripsi</label>
          <textarea
            id="description"
            name="description"
            rows={2}
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <ChipGroup
          label="Status"
          options={STATUS_OPTIONS}
          value={form.status}
          onChange={(status) => setForm({ ...form, status })}
        />

        <ChipGroup
          label="Prioritas"
          options={PRIORITY_OPTIONS}
          value={form.priority}
          onChange={(priority) => setForm({ ...form, priority })}
        />

        <div className="field">
          <label htmlFor="deadline">Deadline</label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="modal-actions">
          <button type="button" className="btn-text" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn btn-blue btn-pill">
            {isEdit ? "Update" : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  );
}