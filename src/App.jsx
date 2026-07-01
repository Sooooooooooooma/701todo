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
    <>
      <h1>TodoList</h1>
      <input
        className="input"
        placeholder="ここに文字を入力してください"
        value={text}
        onChange={handleInput}
      />
      <button onClick={handleAdd}>追加</button>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input value={editText} onChange={handleEditInput} />
                  <button onClick={handleSave}>保存</button>
                </>
              ) : (
                <>
                  {todo}
                  <button onClick={() => handleDelete(index)}>削除</button>
                  <button onClick={() => handleEdit(index)}>編集</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
