import React, { useState } from 'react';
import { FormScreen } from './FormScreen';
import { AfiliadosScreen } from './AfiliadosScreen';
import Swal from 'sweetalert2';

export const ListaAfiliados = () => {
	//almacenar datos
	const [usuarios, setUsuario] = useState([]);
	const [viewForm, setViewForm] = useState(false);

	//guardar datos
	const crearUsuario = (usuario) => {
		setUsuario([...usuarios, usuario]);
	};

	//mostrar formulario
	const handleViewForm = () => {
		setViewForm(true);
	};

	//eliminar usuario
	const handleDeleteUser = (id) => {
		Swal.fire({
			title: 'Estas Seguro?',
			text: 'No Podras Volver Atras!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, Borrar!',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Eliminado!', 'El Usuario Fue Eliminado.', 'success');
				const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
				setUsuario(nuevosUsuarios);
			}
		});
	};

	//editar Usuario
	const handleEditUser = (usuario) => {
		setViewForm(true);
		console.log(usuario);
	};

	return (
		<>
			<div className="row ">
				<div className="col-lg-3 ">
					<h2 className="mt-5 fw-bold text-center ColorPrincipal">Administracion</h2>
					<div className="d-flex justify-content-center">
						<button
							onClick={handleViewForm}
							className="bgPrincipal p-3 text-white border rounded  w-75 mt-5 fs-5"
						>
							Agregar Persona
						</button>
					</div>

					{viewForm ? (
						<FormScreen setViewForm={setViewForm} crearUsuario={crearUsuario} />
					) : null}
				</div>
				<div className="col-lg-9 ">
					<div></div>
					<h1 className="pt-5 pb-5 ps-4 bgPrincipal text-white fs-2">
						Hola <span className="fw-bold">Alejo</span>
					</h1>

					<div className="gris p-3 vh-100">
						<table className="table">
							<thead>
								<tr className="bgPrincipal text-white">
									<th scope="col">Nombre</th>
									<th scope="col">Apellido</th>
									<th scope="col">Email</th>
									<th scope="col">Direccion</th>
									<th scope="col">Fecha Nacimiento</th>
									<th scope="col">DNI</th>
									<th scope="col ">
										<i className="far fa-edit ms-4"></i>
									</th>
									<th scope="col">
										<i className="fas fa-trash ms-3"></i>
									</th>
								</tr>
							</thead>

							<tbody>
								{usuarios.map((usuario) => (
									<AfiliadosScreen
										key={usuario.id}
										usuario={usuario}
										handleDeleteUser={handleDeleteUser}
										handleEditUser={handleEditUser}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
