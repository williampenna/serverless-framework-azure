(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handlers/goodbye.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/handlers/goodbye.ts":
/*!*********************************!*\
  !*** ./src/handlers/goodbye.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sayGoodbye = async function (context, eventHubMessages) {\n    console.log(`Context :: ${context}`);\n    console.log(`Event Hub Messages :: ${eventHubMessages}`);\n    context.res = {\n        body: `Goodbye ${eventHubMessages}`\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (sayGoodbye);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZ29vZGJ5ZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9nb29kYnllLnRzPzc3YWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXp1cmVGdW5jdGlvbiwgQ29udGV4dCB9IGZyb20gJ0BhenVyZS9mdW5jdGlvbnMnO1xuXG5jb25zdCBzYXlHb29kYnllOiBBenVyZUZ1bmN0aW9uID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQ6IENvbnRleHQsIGV2ZW50SHViTWVzc2FnZXM6IGFueSkge1xuICBjb25zb2xlLmxvZyhgQ29udGV4dCA6OiAke2NvbnRleHR9YCk7XG4gIGNvbnNvbGUubG9nKGBFdmVudCBIdWIgTWVzc2FnZXMgOjogJHtldmVudEh1Yk1lc3NhZ2VzfWApO1xuICBjb250ZXh0LnJlcyA9IHtcbiAgICAvLyBzdGF0dXM6IDIwMCwgLyogRGVmYXVsdHMgdG8gMjAwICovXG4gICAgYm9keTogYEdvb2RieWUgJHtldmVudEh1Yk1lc3NhZ2VzfWBcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNheUdvb2RieWU7Il0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/goodbye.ts\n");

/***/ })

/******/ })));