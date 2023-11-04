import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FormLogin({ setIsLogin }) {
  const schema = z.object({
    email: z
      .string()
      .email({ message: "Invalid email address." })
      .min(1, { message: "Email is required" })
      .trim(),
    password: z.string(),
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
    setError,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    try {
      let response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.status === 200) {
        let data = await response.json();
        console.log(data);
        setIsLogin(true);
      } else {
        throw "Error fetching users list";
      }
    } catch (error) {
      setError("email", { message: "Email or password is wrong" });
    }
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
            type="email"
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
            type="password"
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
