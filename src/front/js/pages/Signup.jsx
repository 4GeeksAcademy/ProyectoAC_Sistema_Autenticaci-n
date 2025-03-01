import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus, FaEnvelope, FaLock, FaRegLaughWink } from "react-icons/fa"; // Iconos divertidos

export function Signup() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [messageError, setMessageError] = useState();
	const [error, setError] = useState(false);
	const [messageSuccess, setMessageSuccess] = useState();
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();

	const postNewUser = async ({ name, email, password }) => {
		try {
			const response = await fetch(`${process.env.BACKEND_URL}/api/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, password }),
			});
	  
			if (!response.ok) {
				const errorData = await response.json();
				setError(true);
				setMessageError(errorData.Error || 'Error desconocido');
				return;
			}
	  
			const data = await response.json();
			setSuccess(true);
			setMessageSuccess('Usuario creado con éxito');
		  
			setTimeout(() => {
				navigate('/login');
			}, 1000);
		} catch (error) {
			setError(true);
			setMessageError(error.message || 'Error al realizar la solicitud');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postNewUser({ name, email, password });
	};

	return (
		<div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5 form-registre">
			<div className="card p-5 shadow-lg rounded" style={{ width: '380px', backgroundColor: '#f7f7f7' }}>
				<h3 className="text-center mb-4 text-primary">¡Bienvenido a bordo!</h3>
				<form>
					<div className="mb-4">
						<label htmlFor="name" className="form-label d-flex align-items-center">
							<FaUserPlus size={20} className="mr-2" /> Nombre
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Nombre completo"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="form-label d-flex align-items-center">
							<FaEnvelope size={20} className="mr-2" /> Email
						</label>
						<input
							type="email"
							required
							className="form-control"
							id="email"
							placeholder="email@example.com"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="form-label d-flex align-items-center">
							<FaLock size={20} className="mr-2" /> Contraseña
						</label>
						<input
							required
							type="password"
							className="form-control"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div id="passwordHelpBlock" className="form-text">
							Su contraseña debe ser de 8-20 caracteres de longitud.
						</div>
					</div>
					<div id="passwordHelpBlock" className="form-text mb-3">
						Si ya tienes cuenta <Link to="/login">inicia sesión</Link>.
					</div>
					<div className="d-grid">
						<button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>
							Registrarse
						</button>
					</div>
				</form>
			</div>

			{/* Mensaje de error */}
			{error && (
				<div className="mt-4 w-75 text-center alert alert-danger rounded">
					<FaRegLaughWink size={30} className="mr-2" />
					{messageError}
				</div>
			)}

			{/* Mensaje de éxito */}
			{success && (
				<div className="mt-4 w-75 text-center alert alert-success rounded">
					<FaRegLaughWink size={30} className="mr-2" />
					{messageSuccess}
				</div>
			)}
		</div>
	);
}
