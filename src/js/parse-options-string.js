function parseOptionsString(optionsString) {

	var options = {},
	    optionsArray = optionsString.split('-');

	optionsArray.forEach(function( option ) {
		
		var optionName = option.charAt( 0 ),
		    optionValue = option.substr( 1 );

		if ( optionName === 'x' ) {
			options.repeat = parseInt( optionValue );
		}

		if ( optionName === 'd' /*&& !isNaN( optionValue )*/ ) {
			options.depth = parseInt( optionValue );
		}

		if ( optionName === 'l' ) {
			options.link = parseInt( optionValue );
		}

	});

	return options;
}

module.exports = parseOptionsString;
