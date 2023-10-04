import React from "react";
import TodoTask from "./TodoTask";

function TodoList({ props }) {
  return (
    <ul className="w-full px-4 py-2">
      {props.map((task, index) => (
        <TodoTask key={index} props={task} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
