import React from "react";
import { FaRobot, FaRegLaughWink } from "react-icons/fa"; // Importando iconos graciosos

export function Error404() {
  return (
    <div className="container text-center mt-5 pt-5">
      <div className="error-container">
        <FaRobot size={80} color="#4CAF50" />
        <h1 className="display-1 text-danger">Error 404</h1>
        <h3 className="text-muted">¡Oh no! Algo salió mal...</h3>
        <p className="text-info mt-3">
          Parece que el código se fue de vacaciones y no pudo encontrar esta página. ¡Oops!
        </p>
        <p className="mt-3">
          <FaRegLaughWink size={50} color="#FF6347" />
        </p>
        <a href="/" className="btn btn-primary mt-4">Volver al inicio</a>
      </div>
    </div>
  );
}
