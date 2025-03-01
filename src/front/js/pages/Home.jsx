import React from "react";
import { FaReact, FaPython, FaBootstrap, FaLock, FaUserCircle } from "react-icons/fa"; // Importando iconos

export function Home() {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Bienvenido a Nuestro Proyecto de Autenticación</h1>
      <p className="text-center">
        Este proyecto permite gestionar el inicio de sesión, registro y cierre de sesión de usuarios con autenticación
        segura. El sistema utiliza JWT para manejar las sesiones de usuario y garantiza la seguridad de las rutas privadas.
      </p>
      
      <div className="row text-center mt-5">
        <div className="col-12 col-md-3 mb-4">
          <FaReact size={50} color="#61DAFB" />
          <h5>Frontend</h5>
          <p>React.js para crear una interfaz moderna y reactiva para gestionar sesiones de usuario.</p>
        </div>
        
        <div className="col-12 col-md-3 mb-4">
          <FaPython size={50} color="#306998" />
          <h5>Backend</h5>
          <p>Flask con Python para manejar la autenticación de usuarios y las rutas protegidas.</p>
        </div>

        <div className="col-12 col-md-3 mb-4">
          <FaBootstrap size={50} color="#563D7C" />
          <h5>Bootstrap</h5>
          <p>Uso de Bootstrap para un diseño simple, limpio y responsive en el frontend.</p>
        </div>

        <div className="col-12 col-md-3 mb-4">
          <FaLock size={50} color="#FF7A59" />
          <h5>Seguridad</h5>
          <p>JWT para manejar de manera segura las sesiones y proteger rutas privadas.</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <h4><FaUserCircle /> ¡Gestiona tu cuenta de usuario de forma segura!</h4>
        <p>
          <strong>Gracias por visitar nuestro sistema de autenticación de usuarios.</strong>
        </p>
      </div>
    </div>
  );
}