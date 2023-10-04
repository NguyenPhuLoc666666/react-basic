import React from "react";

function FormAddTodo({ handleAddTodo }) {
  const handleAddTodoInForm = (e) => {
    e.preventDefault();
    const generatedId = generateId();
    let title = document.getElementById("input-todo").value;
    if (title === "") {
      alert("Please enter complete information when add new todo!");
      return;
    }
    handleAddTodo({ generatedId, title });
  };
  const generateId = () => {
    const timestamp = Date.now().toString();
    const rand = Math.floor(Math.random() * 1000);
    return timestamp + "-" + rand;
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
