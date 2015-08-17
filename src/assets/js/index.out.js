(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesLogJs = require('./modules/log.js');

var _modulesLogJs2 = _interopRequireDefault(_modulesLogJs);

var _modulesFindElementJs = require('./modules/findElement.js');

var _modulesFindElementJs2 = _interopRequireDefault(_modulesFindElementJs);

(0, _modulesLogJs2['default'])('Hello World');

(0, _modulesFindElementJs2['default'])('h1').innerHTML = 'Hello World';

},{"./modules/findElement.js":2,"./modules/log.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findElement;

function findElement(query) {
  return document.querySelector(query);
}

module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = log;

function log(data) {
  console.log(data);

  return data;
}

module.exports = exports["default"];

},{}]},{},[1]);
