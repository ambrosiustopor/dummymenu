module.exports = function(grunt, options) {
 
	return {
		coverage: {
			src: 'test',
			//src: 'test/user.spec.js',
			options: {
				mask: '*.test.js'
			}
		}
	};

};
