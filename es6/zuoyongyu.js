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

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}
foo(1);


function add(...addItems) {
    let sum = 0;
    for (var item of addItems) {
        sum += item;
    }
    console.log(sum);
}
add(2, 3, 5) // 10
add(2, 3, 6, 1) // 12

function sortNumbers(...numbers) {
    console.log(numbers.sort(function(a, b) {
        return a - b;
    }));
}

sortNumbers(3, 2, 1)
sortNumbers(2, 1, 6, 7, 3, 2, 8, 9, 11)
