'use strict';

var incrspace = require( 'compute-incrspace' );
var factorial = require( './../lib' );

var x = incrspace( -10, 100, 1 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
	v = factorial( x[ i ] );
	console.log( 'x: %d, f(x): %d', x[ i ], v );
}
