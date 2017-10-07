module.exports = function(grunt, options) {

	return {
		main: {
			expand: true,
			cwd: 'dist/',
			src: ['dummymenu.js'],
			dest: 'example/vendor/dummymenu'
		}
	}
};
