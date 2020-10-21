import React from 'react';
import Blanc from '@components/Blanc';
import Form from '@components/Form';

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
