import React, { useState } from "react";

function TodoTask({ task, index }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <li className="flex flex-col items-center justify-between md:flex-row w-full py-2 ">
      <div className="flex flex-col w-full mr-2 hover:bg-gray-200 p-2 rounded">
        <div className="flex">
          <input
            type="checkbox"
            id={`task-${index}`}
            value={isDone}
            onChange={() => setIsDone(!isDone)}
          />
          <label
            htmlFor={`task-${index}`}
            className={`ml-2 w-full ${isDone ? "line-through" : ""}`}
          >
            {task.title}
          </label>
        </div>
      </div>
    </li>
  );
}

export default TodoTask;
