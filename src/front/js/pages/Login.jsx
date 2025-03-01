import React, { useState } from "react";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaKey, FaRegLaughWink } from "react-icons/fa"; // Iconos divertidos

export function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [messageError, setMessageError] = useState();
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const login = async ({ email, password }) => {
		try {
			const respose = await fetch(`${process.env.BACKEND_URL}/api/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					'email': email,
					'password': password
				})
			});
			const resp = await respose.json();
			if (resp.token) {
				localStorage.setItem('token', resp.token);
				navigate('/private');
			}

			if (respose.status !== 200) {
				setError(true);
				setMessageError(resp.error);
			}
		} catch (error) {
			setError(true);
			setMessageError(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5 form-login">
			<div className="card p-5 shadow-lg rounded" style={{ width: '380px', backgroundColor: '#f7f7f7' }}>
				<h3 className="text-center mb-4 text-primary">Iniciar Sesión</h3>
				<form>
					<div className="mb-4">
						<label htmlFor="email" className="form-label d-flex align-items-center">
							<FaUserAlt size={20} className="mr-2" /> Email
						</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							className="form-control"
							id="email"
							placeholder="email@example.com"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="inputPassword" className="form-label d-flex align-items-center">
							<FaKey size={20} className="mr-2" /> Password
						</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							className="form-control"
							id="inputPassword"
						/>
						<div id="passwordHelpBlock" className="form-text">
							Si no tienes cuenta <Link to='/signup'>regístrate</Link>.
						</div>
					</div>
					<div className="d-grid">
						<button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>
							Entrar
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
		</div>
	);
}
