# Resumen del Proyecto Boiler

Este proyecto es una plantilla básica para aplicaciones web utilizando Next.js, un potente framework de React para el desarrollo de aplicaciones del lado del servidor y del cliente. La aplicación está configurada para usar NextAuth para la autenticación, Tailwind CSS para el diseño estilizado, y TypeScript para el tipado estático.

## Características Principales

- **Next.js**: Un framework de React que permite la renderización del lado del servidor, rutas API, y generación de sitios web estáticos.
- **NextAuth**: Un completo sistema de autenticación para aplicaciones Next.js. Este proyecto incluye un proveedor de credenciales personalizado.
- **Tailwind CSS**: Un framework CSS altamente personalizable que facilita la creación de diseños modernos y receptivos.
- **TypeScript**: Un superset de JavaScript que proporciona tipado estático, ayudando a prevenir errores y mejorar la experiencia de desarrollo.

## Estructura del Proyecto

- **`src/app`**: Contiene las rutas de la aplicación, componentes compartidos, y acciones del servidor.
- **`src/app/api/auth/[...nextauth]`**: Configuración de autenticación y rutas API para la gestión de sesiones.
- **`src/app/auth/inicio-sesion`**: Página de inicio de sesión personalizada.
- **`src/app/components`**: Componentes React reutilizables, como el botón de inicio de sesión.
- **`src/app/actions`**: Acciones del servidor, incluyendo la obtención de sesiones y la acción de inicio de sesión.
- **`tailwind.config.ts`**: Configuración de Tailwind CSS donde se definen los colores y extensiones de tema.
- **`tsconfig.json`**: Configuraciones de TypeScript para asegurar una correcta compilación y tipado del proyecto.

## Scripts Disponibles

- **`dev`**: Inicia el servidor de desarrollo.
- **`build`**: Construye la aplicación para producción.
- **`start`**: Inicia el servidor de producción.
- **`lint`**: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.

## Instalación y Uso

Para comenzar con el desarrollo, clona el repositorio y utiliza `npm install` para instalar las dependencias. Luego puedes usar `npm run dev` para iniciar el servidor de desarrollo.

Este proyecto está diseñado para ser un punto de partida flexible y efectivo para el desarrollo de aplicaciones web modernas con autenticación y un diseño estilizado.
## Archivos Importantes

- **`.env.example`**: Archivo de ejemplo que se debe renombrar a `.env` y completar con las credenciales y configuración necesaria para el proyecto.
