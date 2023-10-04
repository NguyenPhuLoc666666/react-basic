import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import FormAddTodo from "./components/FormAddTodo";
import TrafficLight from "./components/TrafficLight";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initialTodos = [
      {
        id: 1,
        title: "Complete homework",
      },
      {
        id: 2,
        title: "Go grocery shopping",
      },
      {
        id: 3,
        title: "Attend meeting",
      },
    ];
    let dataStr = localStorage.getItem("todolist");
    if (dataStr != null && dataStr !== "") {
      setTodos(JSON.parse(dataStr));
    } else {
      setTodos(initialTodos);
      localStorage.setItem("todolist", JSON.stringify(initialTodos));
    }
  }, []);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    localStorage.setItem("todolist", JSON.stringify(todos));
    alert(`Add new todo: "${newTodo.title}" successfully!`);
  };

  return (
    <div className="bg-blue-400 min-h-screen relative flex flex-col justify-center items-center">
      <TrafficLight />
      <div className="w-[300px] h-auto min-h-[200px] bg-blue-50 flex flex-col items-center rounded mt-24">
        <FormAddTodo handleAddTodo={handleAddTodo} />
        <TodoList props={todos} />
      </div>
    </div>
  );
}

export default App;
