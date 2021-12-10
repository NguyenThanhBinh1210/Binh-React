import React, { useState } from "react";

const Learn = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    setTodo((prev) => [...prev, value]);
    setValue("");

    localStorage.setItem("todo", todo);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
      {todo.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default Learn;
