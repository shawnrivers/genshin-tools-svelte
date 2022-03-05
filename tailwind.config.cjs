const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				teyvat: ['Teyvat'],
				khaenriah: ['Khaenriah']
			}
		}
	},
	plugins: []
};

module.exports = config;
