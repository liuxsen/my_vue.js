/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Person = __webpack_require__(1);

	var _Person2 = _interopRequireDefault(_Person);

	var _zuoyongyu = __webpack_require__(2);

	var _zuoyongyu2 = _interopRequireDefault(_zuoyongyu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require('./test.scss')
	var p = new _Person2.default("张三", 20);
	document.write(p.say());

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Person = function () {
	    function Person(name, age) {
	        _classCallCheck(this, Person);

	        this.name = name;
	        this.age = age;
	    }

	    _createClass(Person, [{
	        key: 'say',
	        value: function say() {
	            return '我是' + this.name + ',我今年' + this.age + '岁了2';
	        }
	    }]);

	    return Person;
	}();

	function log(x) {
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 'world' : arguments[1];

	    console.log(x, y);
	}

	/*log('hello'); //hello world
	log('hello', 'china'); // hello china
	log('hello', ''); //hello*/

	function Point() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    this.x = x;
	    this.y = y;
	}
	/*var p = new Point();
	console.log(p);*/

	function foo() {
	    // let x = 1; //error
	    // const x = 2; //error

	    var x = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
	}

	foo();

	// 解构赋值和默认值结合使用

	function bar(_ref) {
	    var x = _ref.x;
	    var _ref$y = _ref.y;
	    var y = _ref$y === undefined ? 5 : _ref$y;

	    console.log(x, y);
	}

	/*bar({}); //undefined 5
	bar({ x: 1 }); // 1 5
	bar({ x: 1, y: 1 }); // 1 1
	bar(); //Cannot read property 'x' of undefined*/

	function fetch(url, _ref2) {
	    var _ref2$body = _ref2.body;
	    var body = _ref2$body === undefined ? '' : _ref2$body;
	    var _ref2$method = _ref2.method;
	    var method = _ref2$method === undefined ? 'get' : _ref2$method;
	    var _ref2$headers = _ref2.headers;
	    var headers = _ref2$headers === undefined ? {} : _ref2$headers;

	    console.log(method);
	}
	/*fetch('', {}); //get
	fetch(''); //Cannot read property 'body' of undefined
	// 所以第二个参数不能省略*/

	function fetch2(url) {
	    var _ref3 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var _ref3$method = _ref3.method;
	    var method = _ref3$method === undefined ? 'post' : _ref3$method;

	    console.log(method);
	}

	// fetch2('123'); //post
	// 可以省略第二个参数，这个函数相等于传了一个空的参数

	// 函数区别对待
	function m1() {
	    var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref4$x = _ref4.x;
	    var x = _ref4$x === undefined ? 0 : _ref4$x;
	    var _ref4$y = _ref4.y;
	    var y = _ref4$y === undefined ? 0 : _ref4$y;

	    console.log(x, y);
	}

	function m2() {
	    var _ref5 = arguments.length <= 0 || arguments[0] === undefined ? { x: 0, y: 0 } : arguments[0];

	    var x = _ref5.x;
	    var y = _ref5.y;

	    console.log(x, y);
	}

	// 没有参数的情况
	/*m1(); // 0 0 
	m2(); // 0 0 */

	// x和y都有值的情况
	/*m1({ x: 3, y: 8 }) // 3 8 
	m2({ x: 3, y: 8 }) //3 8*/

	// x有值，y无值的情况；
	/*m1({ x: 3 }) // 3 0
	m2({ x: 3 }) // 3 undefined*/

	// x，y无值的情况；
	/*m1({}) // 3 0
	m2({}) // undefined undefined*/

	/*m1({ z: 3 }) // 0 0 
	m2({ z: 3 }) // undefined undefined*/

	// 函数参数默认值的顺序问题
	function f() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var y = arguments[1];

	    console.log(x, y);
	}

	/*// f(, 1); //报错
	f(undefined, 1); //1 1
	f(2); //2 undefined
	f(); //1 undefined */
	// 不可以省略默认值的参数，添加后面的参数；

	// f(undefined, null); //1 null/**/
	// undefined 会触发默认值，null不会

	/**
	 * length属性问题
	 */

	/*console.log((function(a) {}).length); //1
	console.log((function(a = 5) {}).length); // 0
	// 如果设置的默认值的参数不是尾部参数，那么length属性就不会记录后面的参数
	console.log((function(a = 5, b) {}).length); // 0
	console.log((function(a, b = 5, c = 1) {}).length);
	 // 1
	console.log((function(a, b = 5) {}).length); // 1*/

	exports.default = Person;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/*var x = 1;

	// 函数默认值是一个变量， 先是当前函数的作用域，然后才是全局作用域。
	function f(x, y = x) {
	    console.log(y);
	}
	f(2);
	*/

	/*let x = 1;

	function f(y = x) {
	    let x = 2;
	    console.log(y)
	}

	f();*/

	function throwIfMissing() {
	    throw new Error("Missing parameter");
	}

	function foo() {
	    var mustBeProvided = arguments.length <= 0 || arguments[0] === undefined ? throwIfMissing() : arguments[0];

	    return mustBeProvided;
	}
	foo(1);

	function add() {
	    var sum = 0;

	    for (var _len = arguments.length, addItems = Array(_len), _key = 0; _key < _len; _key++) {
	        addItems[_key] = arguments[_key];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = addItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var item = _step.value;

	            sum += item;
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    console.log(sum);
	}
	add(2, 3, 5); // 10
	add(2, 3, 6, 1); // 12

	function sortNumbers() {
	    for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        numbers[_key2] = arguments[_key2];
	    }

	    console.log(numbers.sort(function (a, b) {
	        return a - b;
	    }));
	}

	sortNumbers(3, 2, 1);
	sortNumbers(2, 1, 6, 7, 3, 2, 8, 9, 11);

/***/ }
/******/ ]);