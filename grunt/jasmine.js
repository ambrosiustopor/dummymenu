module.exports = function( grunt, options ) {

	return {
		domain: {
			src: [
				'build/**/*.js'
			]
		,	options: {
				specs: [
					'spec/**/*.js'
				]
			,	helpers: 'helpers/**/*.js'
			,	vendor: [
					'bower_components/jquery/dist/jquery.js'
				]
			}
		}
	}

};
