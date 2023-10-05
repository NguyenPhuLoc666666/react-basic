import React, { useState } from "react";

function FormAddTodo({ handleAddTodo }) {
  const generateId = () => {
    const timestamp = Date.now().toString();
    const rand = Math.floor(Math.random() * 1000);
    return timestamp + "-" + rand;
  };

  const [todo, setTodo] = useState({
    id: "0",
    title: "",
  });

  const handleAddTodoInForm = (e) => {
    e.preventDefault();
    if (todo.title === "") {
      alert("Please enter complete information when add new todo!");
      return;
    }
    const generatedId = generateId();
    const updatedTodo = { ...todo, id: generatedId };
    setTodo(updatedTodo);
    handleAddTodo(updatedTodo);
  };

  return (
    <form
      className="w-full p-2 flex flex-col md:flex-row"
      onSubmit={handleAddTodoInForm}
    >
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <label className="mb-2">Add todo</label>
          <input
            type="text"
            id="input-todo"
            placeholder="Add todo..."
            className="rounded px-4"
            value={todo.title}
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value });
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 md:ml-2 mx-auto w-full bg-blue-600 text-white rounded"
      >
        Add
      </button>
    </form>
  );
}

export default FormAddTodo;
