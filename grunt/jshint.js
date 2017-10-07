module.exports = function(grunt, options) {

	return {
		options: {
			"esnext": true
		},
		target: {
			src: ["src/**/*.js", "test/**/*.js"]
		}
	};
	
};
