const expect = require('expect');

const sanitizeOptions = require('../src/js/sanitize-options');

describe('sanitize options', function() {

	it('should be a function', function() {
	
		expect( typeof sanitizeOptions ).toBe( 'function' );

	});

});
