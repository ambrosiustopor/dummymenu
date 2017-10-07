module.exports = function(grunt, options) {

	return {
		basic: {
			options: {
				config: { 
					'default': true,
					'line-length': false,
					'blanks-around-headers': false,
					'no-duplicate-header': false,
					'no-inline-html': false
				}
			},
			src: [
				'README.md'
			]
		}
	};

};
