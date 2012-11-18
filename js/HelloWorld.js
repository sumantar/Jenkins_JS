"use strict";

function sayHello() {
  document.getElementById('hello').innerHTML = 'Hello World';
}

var unusedVariable = 'hello';

window.onload = sayHello;