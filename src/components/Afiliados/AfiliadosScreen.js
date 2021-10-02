import React from 'react';

export const AfiliadosScreen = ({ usuario, handleDeleteUser }) => {
	return (
		<>
			<tr>
				<td className="py-4">{usuario.nombre}</td>
				<td className="py-4">{usuario.apellido}</td>
				<td className="py-4">{usuario.email}</td>
				<td className="py-4">{usuario.direccion}</td>
				<td className="py-4">{usuario.fechaNacimiento}</td>
				<td className="py-4">{usuario.dni}</td>
				<td>
					<button className="btn btn-outline-success my-3">Modificar</button>
				</td>
				<td>
					<button
						onClick={() => handleDeleteUser(usuario.id)}
						className="btn btn-outline-danger my-3"
					>
						Borrar
					</button>
				</td>
			</tr>
		</>
	);
};
