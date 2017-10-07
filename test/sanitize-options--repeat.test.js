const expect = require('expect');

const sanitizeOptions = require('../src/js/sanitize-options');

describe('sanitize options: repeat', function() {

	it('should sanitize repeat option if no value given', function() {

		var givenOptions = {
		};

		var options = sanitizeOptions(givenOptions);

		expect( options.repeat ).toBe( 10 );

	});

	it('should sanitize repeat option if invalid type given', function() {

		var givenOptions = {
			repeat: 'yes'
		};

		var options = sanitizeOptions(givenOptions);

		expect( options.repeat ).toBe( 10 );

	});

	it('should sanitize repeat option if invalid number given', function() {

		var givenOptions = {
			repeat: 1.5
		};

		var options = sanitizeOptions(givenOptions);

		expect( options.repeat ).toBe( 10 );

	});

	it('should sanitize repeat option if above maximum value', function() {

		var givenOptions = {
			repeat: 999
		};

		var options = sanitizeOptions(givenOptions);

		expect( options.repeat ).toBe( 200 );

	});

	it('should sanitize repeat option if below minimum value', function() {

		var givenOptions = {
			repeat: -2
		};

		var options = sanitizeOptions(givenOptions);

		expect( options.repeat ).toBe( 1 );

	});

});
