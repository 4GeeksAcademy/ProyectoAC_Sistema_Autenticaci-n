import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '/workspaces/ProyectoAC_Sistema_Autenticaci-n/src/front/img/Logo.png';
export const Navbar = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	const handleClick = () => {
		localStorage.removeItem('token');
		navigate('/');
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light mb-4 bg-white shadow-sm fixed-top">
			<div className="container">
				<Link to="/" className="navbar-brand">
					<img src={Logo} alt="Instagram" style={{ height: '50px' }} />

				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="ms-auto d-flex align-items-center">
						{token ? (
							<div className="d-flex">
								<Link to="/private" className="btn btn-outline-primary me-3">
									Go private
								</Link>
								<button className="btn btn-outline-danger" onClick={handleClick}>
									Logout
								</button>
							</div>
						) : (
							<div className="d-flex">
								<Link to="/login" className="btn btn-outline-success me-3">
									Login
								</Link>
								<Link to="/signup" className="btn btn-primary">
									Signup
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};