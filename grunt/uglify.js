module.exports = function(grunt, options) {

	return {
		options: {
			//banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
			src: "build/dummymenu.js",
			dest: "dist/dummymenu.js"
		}
	};

};
