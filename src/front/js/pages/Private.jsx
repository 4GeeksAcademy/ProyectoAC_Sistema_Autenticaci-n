import React from "react";
import { FaLock } from "react-icons/fa"; // Icono de candado para mayor énfasis

export function Private() {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5 private-page">
			<div className="card p-5 shadow-lg rounded" style={{ width: '450px', backgroundColor: '#f7f7f7' }}>
				<h1 className="text-center text-success mb-4">
					<FaLock size={50} className="mb-2" />
					Página Privada
				</h1>
				<p className="text-center mb-4" style={{ fontSize: '18px', color: '#333' }}>
					¡Bienvenido, usuario registrado! 🎉
				</p>
				<p className="text-center mb-3" style={{ fontSize: '16px', color: "#333" }}>
					Este es tu espacio secreto. Sólo tú tienes acceso a este contenido. <strong>¡No lo compartas con nadie!</strong>
				</p>
				<p className="text-center" style={{ fontSize: '14px', color: '#888' }}>
					Si lograste llegar aquí, ¡felicitaciones! Eres parte de la élite de usuarios registrados. 😎
				</p>
				<div className="mt-4">
					<span className="badge bg-primary text-white">Acceso garantizado solo con tu token</span>
				</div>
			</div>
		</div>
	);
};
