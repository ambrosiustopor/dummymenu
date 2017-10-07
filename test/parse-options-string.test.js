const expect = require('expect');

const parseOptionsString = require('../src/js/parse-options-string');

describe('parse options string', function() {

	it('should be a function', function() {
	
		expect( typeof parseOptionsString ).toBe( 'function' );

	});

	it('should return empty object if empty arguments provided', function() {

		var optionsString = '';
		var options = parseOptionsString(optionsString);

		expect( options ).toEqual( {} );

	});

	it('should parse repeat option', function() {

		var optionsString = 'x23';
		var options = parseOptionsString(optionsString);

		expect( options.repeat ).toBe( 23 );

	});

	it('should parse depth option', function() {

		var optionsString = 'd5';
		var options = parseOptionsString(optionsString);

		expect( options.depth ).toBe( 5 );

	});

	it('should parse link option', function() {

		var optionsString = 'l2';
		var options = parseOptionsString(optionsString);

		expect( options.link ).toBe( 2 );

	});

	xit('should return -1 when the value is not present', function() {
		expect.equal(-1, [1,2,3].indexOf(5));
		assert.equal(-1, [1,2,3].indexOf(0));
	});

});
