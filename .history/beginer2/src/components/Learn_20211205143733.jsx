import React, { useState } from "react";

const Learn = () => {
  const [value, serValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    serValue(e.target.value);
  };
  console.log(value);
  const handleSubmit = (e) => {};
  return (
    <div>
      Learn
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
