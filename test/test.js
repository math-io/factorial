'use strict';

// MODULES //

var tape = require( 'tape' );
var incrspace = require( 'compute-incrspace' );
var abs = require( 'math-abs' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var EPS = require( 'const-eps-float64' );
var factorial = require( './../lib' );


// FIXTURES //

var integers = require( './fixtures/integers.json' );
var decimals = require( './fixtures/decimals.json' );


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
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		v = factorial( x[ i ] );
		if ( v === expected[ i ] ) {
			t.equal( v, expected[ i ], 'returns '+expected[i]+' when provided '+x[i] );
		} else {
			delta = abs( v - expected[ i ] );
			tol = EPS * Math.max( 1, abs( v ), abs( expected[ i ] ) );
			t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the factorial function (decimal values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = decimals.x;
	expected = decimals.expected;
	for ( i = 0; i < x.length; i++ ) {
		v = factorial( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 2e-14 * Math.max( 1, abs( v ), abs( expected[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
