import React, { useState } from "react";

const Learn = () => {
  const [value, serValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    serValue(e.target.value);
  };
  console.log(value);
  const handleSubmit = () => {
    setTodo((prev) => [...prev, value]);
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
