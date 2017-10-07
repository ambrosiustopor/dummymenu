const slugify = require('slugify');

const parseOptionsString = require('./parse-options-string');
const sanitizeOptions = require('./sanitize-options');

(function( $ ) {

	/*
	var texts = [
		'Home', 'About', 'Contact', 'News', 'Disclaimer', 'Blog'
	];
	*/

	$(function() {

		$('[data-dummymenu]').each(function() {

			var options = sanitizeOptions(
				parseOptionsString(
					$(this).data('dummymenu')
				)
			);

			$(this).html( $makeTree( 0, options ) );

		});

	});

	function $makeTree( depth, options ) {

		if ( !depth ) depth = 0;
		depth++;
		
		var $ul = $('<ul></ul>'),
			$li,
			n;

		for ( n = 1; n <= options.repeat; n++ ) {

			var text = 'Item-' + depth + '-' + n;

			if ( options.link ) {
				var link = '#';
				if ( options.link === 2 ) {
					link += slugify(text);
				}
				$li = $( '<li><a href="' + link + '">' + text + '</a></li>');
			}
			else {
				$li = $( '<li>' + text + '</li>');
			}

			if ( depth < options.depth && n % 2 === 0 && depth < 4 ) {
				$li.append( $makeTree( depth, options ) );
			}

			$ul.append( $li );

		}

		depth--;

		return $ul;
	}

})( jQuery );
