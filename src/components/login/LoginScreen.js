import React from 'react';

export const LoginScreen = ({ history }) => {
	const handleLogin = (e) => {
		e.preventDefault();
		history.replace('/');
	};
	return (
		<>
			<div className="fondoLogin">
				<div className="container-fluid">
					<form className="vh-100 d-flex  ">
						<div className="row w-100 justify-content-center align-items-center">
							<div className="col-lg-4 border border-dark border-2 contenedorLogin p-5 ">
								<h1 className="pb-3">Ingresar</h1>
								<div className="d-flex flex-column">
									<div className="d-block mt-3">
										<i className="fas fa-user fs-3 ms-2 text-warning d-flex ">
											<p className="text-dark ms-2 fs-3">Nombre de Usuario</p>
										</i>
										<input
											type="text"
											className="p-3 mt-2  w-100 borderInput border border-none "
											placeholder="   ingrese Nombre de Usuario"
										/>
									</div>
									<div className="d-block mt-5">
										<i className="fas fa-lock fs-3 text-warning d-flex">
											<p className="text-dark ms-2 fs-3">Contraseña</p>
										</i>

										<input
											type="password"
											className="p-3 mt-2  w-100 borderInput border border-none"
											placeholder="   ingrese la Contraseña"
										/>
									</div>

									<button className="btn-grad mt-5" onClick={handleLogin}>
										Ingresar
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
