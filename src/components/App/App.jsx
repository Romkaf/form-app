import React from 'react';
import Form from '../Form';
import Blanc from '../Blanc';

import './App.scss';

const App = () => {
	return (
		<div>
			<h1>It's the Form App!</h1>
			<div className="container">
				<Form />
				<Blanc />
			</div>
		</div>
	);
};

export default App;
