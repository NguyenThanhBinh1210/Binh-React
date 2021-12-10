import React, { useState } from "react";

const Learn = () => {
  const [value, serValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    return setValue(e.target.value);
  };

  return (
    <div>
      Learn
      <input type="text" value={value} onChange={handleChange} />
      <button>Add</button>
    </div>
  );
};

export default Learn;
