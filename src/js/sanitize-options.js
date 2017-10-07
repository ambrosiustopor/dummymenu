const limitNumber = require('limit-number');

/**
 * Polyfill
 * @see: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' && 
    isFinite(value) && 
    Math.floor(value) === value;
};

function sanitizeRepeat(value) {

	const REPEAT_DEFAULT = 10,
	      REPEAT_MIN = 1,
	      REPEAT_MAX = 200;

	if ( !Number.isInteger( value ) ) {
		value = REPEAT_DEFAULT;
	}

	value = limitNumber(REPEAT_MIN, REPEAT_MAX, value);

	return value;
}

function sanitizeDepth(value) {

	const DEPTH_DEFAULT = 1,
	      DEPTH_MIN = 1,
	      DEPTH_MAX = 10;

	if ( !Number.isInteger( value ) ) {
		value = DEPTH_DEFAULT;
	}

	value = limitNumber(DEPTH_MIN, DEPTH_MAX, value);

	return value;
}

function sanitizeOptions(options) {

	options.repeat = sanitizeRepeat(options.repeat);
	options.depth = sanitizeDepth(options.depth);

	return options;
}

module.exports = sanitizeOptions;