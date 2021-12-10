import React, { useState } from "react";

const Learn = () => {
  const [value, serValue] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div>
      Learn
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default Learn;
