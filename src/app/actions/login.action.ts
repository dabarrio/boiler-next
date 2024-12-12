import { signIn } from "next-auth/react";

interface Props {
  email: string; // Si usas un email, asegúrate de que 'email' se esté utilizando correctamente en el provider
  password: string;
}

export const loginAction = async (credentials: Props) => {
  try {
    // Intentamos hacer login con las credenciales
    const result = await signIn("credentials", {
      redirect: false,
      username: credentials.email, // Cambiar 'email' por 'username' si lo tienes configurado así en NextAuth
      password: credentials.password,
    });

    // Si la autenticación es exitosa, redirigimos
    if (result?.ok) return true;

    // Si la autenticación no es exitosa
    return false;
  } catch (error) {
    console.error("Error during login:", error);
    return false; // En caso de error, devolvemos false
  }
};
