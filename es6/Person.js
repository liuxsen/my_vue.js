class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        return '我是' + this.name + ',我今年' + this.age + '岁了2';
    }
}

function log(x, y = 'world') {
    console.log(x, y);
}

/*log('hello'); //hello world
log('hello', 'china'); // hello china
log('hello', ''); //hello*/

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
/*var p = new Point();
console.log(p);*/

function foo(x = 5) {
    // let x = 1; //error
    // const x = 2; //error
}

foo()

// 解构赋值和默认值结合使用

function bar({ x, y = 5 }) {
    console.log(x, y)
}

/*bar({}); //undefined 5
bar({ x: 1 }); // 1 5
bar({ x: 1, y: 1 }); // 1 1
bar(); //Cannot read property 'x' of undefined*/

function fetch(url, { body = '', method = 'get', headers = {} }) {
    console.log(method);
}
/*fetch('', {}); //get
fetch(''); //Cannot read property 'body' of undefined
// 所以第二个参数不能省略*/

function fetch2(url, { method = 'post' } = {}) {
    console.log(method);
}

// fetch2('123'); //post
// 可以省略第二个参数，这个函数相等于传了一个空的参数

// 函数区别对待
function m1({ x = 0, y = 0 } = {}) {
    console.log(x, y);
}

function m2({ x, y } = { x: 0, y: 0 }) {
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
function f(x = 1, y) {
    console.log(x, y)
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

export default Person;
