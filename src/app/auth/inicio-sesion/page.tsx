import { getSessionAction } from "@/app/actions/getSession.action";
import LoginButton from "@/app/components/LoginButton";
import { redirect } from "next/navigation";
import React from "react";

const InicioSesion = async () => {
  const session = await getSessionAction();

  if (session && session.user) {
    console.log("entra");
    return redirect("/");
  }
  console.log(session);
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-5">
      <div className="text-center">
        <h1>Inicio de sesión</h1>
        <h2>Bienvenido a Boiler Proyect</h2>
      </div>
      <LoginButton />
    </div>
  );
};

export default InicioSesion;
