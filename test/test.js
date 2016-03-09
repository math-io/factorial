'use strict';

// MODULES //

var tape = require( 'tape' );
var incrspace = require( 'compute-incrspace' );
var abs = require( 'math-abs' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var factorial = require( './../lib' );


// FIXTURES //

var data1 = require( './fixtures/data1.json' );
var expected1 = require( './fixtures/expected1.json' );
var data2 = require( './fixtures/data2.json' );
var expected2 = require( './fixtures/expected2.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof factorial, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative integer, the function returns `NaN`', function test( t ) {
	var values = incrspace( -1, -1000, -1 );
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = factorial( values[ i ] );
		t.ok( v !== v, 'returns NaN when provided ' + values[ i ] );
	}
	t.end();
});


tape( 'if provided negative infinity, the function returns `NaN`', function test( t ) {
	var v = factorial( NINF );
	t.ok( v !== v, 'returns NaN when provided negative infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = factorial( NaN );
	t.ok( v !== v, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'if `x > 170.6144...`, the function returns positive infinity', function test( t ) {
	var values = incrspace( 170.615, 1000, 10.1234 );
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = factorial( values[ i ] );
		t.equal( v, PINF, 'returns +infinity when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'if `x < -171.56749...`, the function returns positive infinity', function test( t ) {
	var values = incrspace( -171.57, -1000, -10.1234 );
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = factorial( values[ i ] );
		t.equal( v, PINF, 'returns +infinity when provided ' + values[ i ] );
	}
	t.end();
});


tape( 'the function evaluates the factorial function (positive integers)', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < data1.length; i++ ) {
		v = factorial( data1[ i ] );
		t.equal( v, expected1[ i ], 'returns '+expected1[i]+' when provided '+v );
	}
	t.end();
});

tape( 'the function evaluates the factorial function (decimal values)', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < data2.length; i++ ) {
		v = factorial( data2[ i ] );
		delta = abs( v - expected2[ i ] );
		tol = 2.75e-12 * Math.max( 1, abs( v ), abs( expected2[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data2[ i ] + '. Value: ' + v + '. Expected: ' + expected2[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
