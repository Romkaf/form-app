import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import './styles/reset.css';
import './styles/global.scss';

store.subscribe(() => {
	localStorage.setItem('state', JSON.stringify(store.getState()));
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
