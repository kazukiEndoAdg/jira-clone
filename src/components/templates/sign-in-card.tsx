"use client"; //　Client Componentsは可能な限り粒度を小さくする

// import { useForm } from "react-hook-form"; // Reactアプリケーションでのフォーム管理を効率的に行うためのライブラリ
// import { z } from "zod"; // Zodは型とデータの整合性を強化するためのツールです。
// import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

// const formSchema = z.object({
//   email: z.string().email(),
//   password: z.string(),
// });

export const SignInCard = () => {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <form
      className="flex flex-col gap-2 w-full justify-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="text-gray-500">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="outline outline-1 outline-black rounded-sm w-full p-1"
        />
      </div>
      <div>
        <label className="text-gray-500">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="outline outline-1 outline-black rounded-sm w-full p-1"
        />
      </div>
      <button className="bg-blue-500 rounded-sm text-white p-2">
        Click me
      </button>
      <hr />
      {loading ? "loading..." : null}
      {error ? "error has occurred" : null}
    </form>
  );
};
