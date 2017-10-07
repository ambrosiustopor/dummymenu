const expect = require('expect');

const sanitizeOptions = require('../src/js/sanitize-options');

describe('sanitize options: depth', function() {

	it('should sanitize depth option if no value given', function() {

		var options = sanitizeOptions({});

		expect( options.depth ).toBe( 1 );

	});

	it('should sanitize depth option if invalid type given', function() {

		var options = sanitizeOptions({
			depth: 'none'
		});

		expect( options.depth ).toBe( 1 );

	});

	it('should sanitize depth option if above maximum value', function() {

		var options = sanitizeOptions({
			depth: 99
		});

		expect( options.depth ).toBe( 10 );

	});

	it('should sanitize depth option if below minimum value', function() {

		var options = sanitizeOptions({
			depth: -2
		});

		expect( options.depth ).toBe( 1 );

	});

});
