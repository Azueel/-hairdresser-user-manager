import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

export const FormScreen = ({ crearUsuario, setViewForm }) => {
	//creo la data
	const [formDate, setFormDate] = useState({
		nombre: '',
		apellido: '',
		fechaNacimiento: '',
		email: '',
		direccion: '',
		dni: '',
	});
	const [errorForm, setErrorForm] = useState(false);

	//extraigo los valores
	const { nombre, apellido, fechaNacimiento, email, direccion, dni } = formDate;

	//funcion que se ejecuta cada vez que el usuario  escribe en el input
	const handleLeerForm = (e) => {
		setFormDate({
			...formDate,
			[e.target.name]: e.target.value,
		});
	};

	//cuando el usuario presion agregar

	const handleSubmit = (e) => {
		e.preventDefault();

		//validar
		if (
			nombre.trim() === '' ||
			apellido.trim() === '' ||
			fechaNacimiento.trim() === '' ||
			email.trim() === '' ||
			direccion.trim() === '' ||
			dni.trim() === ''
		) {
			setErrorForm(true);
			return;
		}

		//validar el form
		setErrorForm(false);

		//asignar ID a formDate
		formDate.id = uuidv4();

		//crear usuario
		crearUsuario(formDate);

		// reiniciar Form
		setFormDate({
			nombre: '',
			apellido: '',
			fechaNacimiento: '',
			email: '',
			direccion: '',
			dni: '',
		});

		// alerta de usuario guardado
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Usuario Guardado',
			showConfirmButton: false,
			timer: 2000,
		});

		//esconder Formulario
		setTimeout(() => {
			setViewForm(false);
		}, 2000);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="mt-5 mb-5">
				<div className="d-flex  flex-column ms-5 ps-2">
					{errorForm ? (
						<p className="bg-danger text-white p-3 text-center w-75">
							Todos Los campos son Obligatorios
						</p>
					) : null}
					<input
						type="text"
						placeholder="Ingrese su Nombre"
						className="w-75 p-2"
						name="nombre"
						value={nombre}
						onChange={handleLeerForm}
					/>
					<input
						type="text"
						placeholder="Ingrese Su Apellido"
						className="w-75 p-2 mt-3"
						name="apellido"
						value={apellido}
						onChange={handleLeerForm}
					/>
					<input
						type="date"
						placeholder="Fecha de Nacimiento"
						className="w-75 p-2 mt-3"
						name="fechaNacimiento"
						value={fechaNacimiento}
						onChange={handleLeerForm}
					/>
					<input
						type="email"
						placeholder="Ingrese su Email"
						className="w-75 p-2 mt-3"
						name="email"
						value={email}
						onChange={handleLeerForm}
					/>
					<input
						type="text"
						placeholder="Direccion de Peluqueria"
						className="w-75 p-2 mt-3"
						name="direccion"
						value={direccion}
						onChange={handleLeerForm}
					/>
					<input
						type="number"
						placeholder="Ingrese su Dni"
						className="w-75 p-2 mt-3"
						name="dni"
						value={dni}
						onChange={handleLeerForm}
					/>
					<button
						type="submit"
						className="w-75 mt-4 p-3 bgPrincipal text-white fs-5 border rounded"
					>
						Agregar
					</button>
				</div>
			</form>
		</div>
	);
};
