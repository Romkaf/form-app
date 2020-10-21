const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@components': 'src/components',
		'@models': 'src/models',
	})(config);

	return config;
};
