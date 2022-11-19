module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	plugins: ['prettier'],
	extends: 'eslint-config-airbnb-base',
	rules: {
		'no-console': 2,
		eqeqeq: 2,
	},
};
