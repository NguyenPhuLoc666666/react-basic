import React from "react";

function TodoTask({ props, index }) {
  return (
    <li className="flex flex-col items-center justify-between md:flex-row w-full py-2 ">
      <div className="flex flex-col w-full mr-2 hover:bg-gray-200 p-2 rounded">
        <div className="flex">
          <input type="checkbox" id={`task-${index}`}></input>
          <div htmlFor={`task-${index}`} className="ml-2">
            {props.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default TodoTask;
