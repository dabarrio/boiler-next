"use client";

import { useRouter } from "next/navigation";
import { loginAction } from "../actions/login.action";

export default function LoginButton() {
  const router = useRouter();
  const handleLogin = async () => {
    try {
     const login = await loginAction({
        email: "a@a.com",
        password: "123456",
      });
      
      if(login) router.push('/');

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return <button className="bg-blue-600 py-4 px-8 rounded-3xl text-white" onClick={handleLogin}>Iniciar sesión</button>;
}
