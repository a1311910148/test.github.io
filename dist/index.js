(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

let package1 = require('./src/modules/module1')
let package2 = require('./src/modules/module2')
let package3 = require('./src/modules/module3')

console.log(package2, package3)
package1.age = 33
},{"./src/modules/module1":2,"./src/modules/module2":3,"./src/modules/module3":4}],2:[function(require,module,exports){
let name = '王磊'
let age = '12'

function howAge() {
    console.log(age)
}
module.exports = { name, age, howAge }
},{}],3:[function(require,module,exports){
let name = 'szx'
let age = '22'

module.exports = { name, age }
},{}],4:[function(require,module,exports){
let name = '小兔子'
let age = '222'

module.exports = { name, age }
},{}]},{},[1]);
