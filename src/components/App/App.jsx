import React from 'react';
import Blanc from '@components/Blanc';
import Form from '@components/Form';
import styles from './App.module.scss';

const App = () => {
	const { app, app__title, app__main } = styles;

	return (
		<div className={app}>
			<h1 className={app__title}>Form App</h1>
			<div className={app__main}>
				<Form />
				<Blanc />
			</div>
		</div>
	);
};

export default App;
