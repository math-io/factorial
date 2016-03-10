Factorial
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Factorial][factorial-function] function.

The [factorial][factorial-function] function may be defined as the product

<div class="equation" align="center" data-raw-text="n! = \prod_{k=1}^n k" data-equation="eq:factorial_function">
	<img src="https://cdn.rawgit.com/math-io/factorial/87f777e5d721ed922fc1176aea23f94f043922d2/docs/img/product.svg" alt="Factorial function definition">
	<br>
</div>

or according to the recurrence relation

<div class="equation" align="center" data-raw-text="n! = \begin{cases}1 &amp; \textrm{if } n = 0,\\(n-1)! \times n &amp; \textrm{if } n > 1\end{cases}" data-equation="eq:factorial_recurrence_relation">
	<img src="https://cdn.rawgit.com/math-io/factorial/87f777e5d721ed922fc1176aea23f94f043922d2/docs/img/recurrence_relation.svg" alt="Factorial function recurrence relation">
	<br>
</div>

Following the convention for an [empty product][empty-product], in all definitions, 

<div class="equation" align="center" data-raw-text="0! = 1" data-equation="eq:zero_factorial">
	<img src="https://cdn.rawgit.com/math-io/factorial/87f777e5d721ed922fc1176aea23f94f043922d2/docs/img/zero_factorial.svg" alt="Zero factorial">
	<br>
</div>

The [Gamma][gamma-function] function extends the [factorial][factorial-function] function for non-integer values.

<div class="equation" align="center" data-raw-text="n! = \Gamma(n+1)" data-equation="eq:factorial_function_and_gamma">
	<img src="https://cdn.rawgit.com/math-io/factorial/87f777e5d721ed922fc1176aea23f94f043922d2/docs/img/gamma.svg" alt="Factorial function extension via the Gamma function">
	<br>
</div>

The [factorial][factorial-function] of a __negative__ integer is not defined.


## Installation

``` bash
$ npm install math-factorial
```


## Usage

``` javascript
var factorial = require( 'math-factorial' );
```


#### factorial( x )

Evaluates the [factorial][factorial-function] function.

``` javascript
var val = factorial( 3 );
// returns 3! = 6

val = factorial( -3/2 );
// returns ~-3.545

val = factorial( -1/2 );
// returns ~1.772

val = factorial( 1/2 );
// returns ~0.886

val = factorial( -10 );
// returns NaN

val = factorial( 171 );
// returns +infinity

val = factorial( NaN );
// returns NaN
```


## Examples

``` javascript
var incrspace = require( 'compute-incrspace' );
var factorial = require( 'math-factorial' );

var x = incrspace( -10, 100, 1 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
	v = factorial( x[ i ] );
	console.log( 'x: %d, f(x): %d', x[ i ], v );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-factorial.svg
[npm-url]: https://npmjs.org/package/math-factorial

[build-image]: http://img.shields.io/travis/math-io/factorial/master.svg
[build-url]: https://travis-ci.org/math-io/factorial

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/factorial/master.svg
[coverage-url]: https://codecov.io/github/math-io/factorial?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/factorial.svg
[dependencies-url]: https://david-dm.org/math-io/factorial

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/factorial.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/factorial

[github-issues-image]: http://img.shields.io/github/issues/math-io/factorial.svg
[github-issues-url]: https://github.com/math-io/factorial/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[gamma-function]: https://github.com/math-io/gamma
[factorial-function]: https://en.wikipedia.org/wiki/Factorial
[empty-product]: https://en.wikipedia.org/wiki/Empty_product
