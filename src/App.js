import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import FormAddTodo from "./components/FormAddTodo";
import FormLogin from "./components/FormLogin";
import TrafficLight from "./components/TrafficLight";
import { initialTodos } from "./components/testData";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let dataStr = localStorage.getItem("todolist");
    if (dataStr != null && dataStr !== "") {
      setTodos(JSON.parse(dataStr));
    } else {
      setTodos(initialTodos);
      localStorage.setItem("todolist", JSON.stringify(initialTodos));
    }
  }, []);

  const onAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
    alert(`Added new todo: "${newTodo.title}" successfully!`);
  };

  const onLogOut = () => {
    setIsLogin(false);
  };

  return (
    <div className="bg-blue-400 min-h-screen relative flex flex-col justify-center items-center">
      {isLogin && (
        <>
          <button className="absolute top-4 left-12" onClick={onLogOut}>
            Log out
          </button>
          <TrafficLight />
          <div className="w-[300px] h-auto min-h-[200px] bg-blue-50 flex flex-col items-center rounded mt-24">
            <FormAddTodo handleAddTodo={onAddTodo} />
            <TodoList props={todos} />
          </div>
        </>
      )}
      {!isLogin && <FormLogin setIsLogin={setIsLogin} />}
    </div>
  );
}

export default App;
