module.exports = function(grunt, options) {

	return {
		php: {
			files: ['src/index.php', 'src/**/*.php'],
			tasks: ['exec'],
			options: {
				spawn: false
			}
		},
		sass: {
			files: ['src/sass/**/*'],
			tasks: ['sass'],
			options: {
				spawn: false
			}
		},
		js: {
			files: ['src/js/**/*.js'],
			tasks: ['uglify'],
			options: {
				spawn: false
			}
		}
	};
};