module.exports = function(grunt) {

	return {
		build: {
			src: [
				"dist/*"
			,	"build/*"
			,	"example/vendor/dummymenu/*"
			]
		}
	}
};
