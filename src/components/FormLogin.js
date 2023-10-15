"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FormLogin({ setIsLogin }) {
  const schema = z.object({
    email: z
      .string()
      .email({ message: "Invalid email address." })
      .min(1, { message: "Email is required" })
      .trim()
      .toLowerCase(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(20, { message: "Password max length is 20 characters." })
      .regex(/^(?=.*[A-Z])(?=.*[@#$%^&-+=()]).+$/, {
        message: "Password must be at least 1 uppercase and 1 symbol.",
      }),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    setIsLogin(true);
  };

  return (
    <div
      className='w-[350px] h-auto z-[1001]
              bg-white text-black flex flex-col p-2 justify-start items-start m-auto rounded border-black
               fixed top-20 left-1/2 translate-x-[-50%] shadow-md shadow-slate-900"'
    >
      <p className="text-lg font-bold text-center w-full my-4 text-red-300">
        Login
      </p>
      <form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 mx-2">
          <label htmlFor="register-email">
            Email (<span className="text-red-500">*</span>)
          </label>
          <input
            className={`text-black text-lg rounded p-1 border-solid w-[300px] border-2
              ${
                errors.email?.message !== undefined
                  ? "focus:border-red-500 border-red-500 border-2"
                  : ""
              }`}
            {...register("email")}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="mb-4 mx-2">
          <label htmlFor="register-password">
            Password (<span className="text-red-500">*</span>)
          </label>
          <input
            className={`text-black text-lg rounded p-1 border-solid w-[300px] border-2
               ${
                 errors.password?.message !== undefined
                   ? "focus:border-red-500 border-red-500 border-2"
                   : ""
               }`}
            {...register("password")}
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <button
          className="hover:bg-red-300 bg-red-700 text-white active:bg-gray-500 p-2 w-full rounded cursor-pointer block"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
