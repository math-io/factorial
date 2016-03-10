'use strict';

// MODULES //

var gamma = require( 'math-gamma' );
var PINF = require( 'const-pinf-float64' );
var FACTORIALS = require( './factorials.json' );


// VARIABLES //

var MAX_FACTORIAL = 170;


// FACTORIAL //

/**
* FUNCTION: factorial( x )
*	Computes the factorial of x.
*
* @param {Number} x - input value
* @returns {Number} factorial
*/
function factorial( x ) {
	// Check for `NaN`:
	if ( x !== x ) {
		return NaN;
	}
	// Check for `integer`:
	if ( x%1 === 0 ) {
		if ( x < 0 ) {
			return NaN;
		}
		if ( x <= MAX_FACTORIAL ) {
			return FACTORIALS[ x ];
		}
		return PINF;
	}
	return gamma( x + 1 );
} // end FUNCTION factorial()


// EXPORTS //

module.exports = factorial;
