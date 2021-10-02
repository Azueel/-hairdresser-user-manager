import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<a className="nav-item nav-link" exact href="/afiliados">
						Afiliados
					</a>

					<a className="nav-item nav-link" exact href="/deudores">
						Deudores
					</a>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					<NavLink className="nav-item nav-link" exact to="/login">
						Logout
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};