import React, { useState } from "react";

const Learn = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  const handleSubmit = () => {
    setTodo((prev) => [...prev, value]);
    setValue("");
  };
  return (
    <form>
      <input type="text" value={value} onChange={handleChange} />
      <button onSubmit={handleSubmit}>Add</button>
      {todo.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </form>
  );
};

export default Learn;
