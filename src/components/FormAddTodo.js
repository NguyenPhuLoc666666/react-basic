import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function FormAddTodo({ handleAddTodo }) {
  const generateId = () => {
    const timestamp = Date.now().toString();
    const rand = Math.floor(Math.random() * 1000);
    return timestamp + "-" + rand;
  };

  const onAddTodoInForm = (data) => {
    const value = data.title;
    if (value.trim() === "") {
      setError("title", {
        type: "manual",
        message: "Title cannot be just spaces",
      });
    } else {
      clearErrors("title");
      const id = generateId();
      const title = data.title;
      const newTodo = { id, title };
      handleAddTodo(newTodo);
      setValue("title", "");
    }
  };

  const schema = z.object({
    title: z
      .string()
      .min(1, { message: "Todo title is required." })
      .max(100, { message: "Maximize length is 100 characters." })
      .trim()
      .toLowerCase(),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = form;

  return (
    <form
      className="w-full p-2 flex flex-col md:flex-row items-center justify-center"
      onSubmit={handleSubmit(onAddTodoInForm)}
    >
      <div className="flex flex-col ">
        <div className="flex flex-col pb-4 relative">
          <label className="mb-2">Add todo</label>
          <input
            type="text"
            id="input-todo"
            placeholder="Add todo..."
            className={`rounded p-1 ${
              errors.title?.message !== undefined
                ? "focus:border-red-500 border-red-500 border-2"
                : ""
            }`}
            {...register("title")}
          />
          <p className="text-red-500">{errors.title?.message}</p>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 md:m-0 md:ml-2 mx-auto p-1 h-fit w-full bg-blue-600 text-white rounded text-base"
      >
        Add
      </button>
    </form>
  );
}

export default FormAddTodo;
