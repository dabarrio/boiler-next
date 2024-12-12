import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Lógica de autenticación
        //if(credentials?.username != 'admin' || credentials?.password != '123456'){
        //  return null;
        //}
        console.log(credentials);
        const user = { id: "1", name: "J Smith", email: "pX1qQ@example.com" };
        if (user) {
          return user;  // Se guarda en el JWT
        } else {
          return null;  // Si no hay usuario, muestra error
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/inicio-sesion",  // Página personalizada de inicio de sesión
  },
};

export const GET = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
export const POST = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);