import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { ListaAfiliados } from '../components/Afiliados/ListaAfiliados';
import { ListaDeudores } from '../components/deudores/ListaDeudores';
import { InfoPersonal } from '../components/info Personas/InfoPersonal';

import { Navbar } from '../components/navBar/NavBar';

export const DashBoardRoutes = () => {
	return (
		<>
			<Navbar />

			<div>
				<Switch>
					<Route exact path="/afiliados" component={ListaAfiliados} />
					<Route exact path="/info/:infoId" component={InfoPersonal} />
					<Route exact path="/deudores" component={ListaDeudores} />
				</Switch>
			</div>
		</>
	);
};
