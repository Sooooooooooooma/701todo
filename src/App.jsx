import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([]);

  const [editText, setEditText] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, text]);
    console.log(todos);
    setText("");
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => {
      return i !== index;
    });
    setTodos(newTodos);
  };

  const handleEditInput = (e) => {
    setEditText(e.target.value);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const handleSave = () => {
    const newTodos = todos.map((todo, i) => {
      return i === editIndex ? editText : todo;
    });
    setTodos(newTodos);
    setEditIndex(null);
  };

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="todo-title">TodoList</h1>

        <div className="todo-form">
          <input
            className="input"
            placeholder="ここに文字を入力してください"
            value={text}
            onChange={handleInput}
          />
          <button className="btn btn-primary" onClick={handleAdd}>
            追加
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="todo-item">
                {editIndex === index ? (
                  <div className="todo-edit">
                    <input
                      className="input"
                      value={editText}
                      onChange={handleEditInput}
                    />
                    <button className="btn btn-primary" onClick={handleSave}>
                      保存
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="todo-text">{todo}</span>
                    <div className="todo-actions">
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleEdit(index)}
                      >
                        編集
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        削除
                      </button>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        {todos.length === 0 && (
          <p className="todo-empty">タスクがありません。追加してみましょう。</p>
        )}
      </div>
    </div>
  );
}

export default App;
