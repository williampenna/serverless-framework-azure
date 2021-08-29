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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handlers/hello.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/handlers/hello.ts":
/*!*******************************!*\
  !*** ./src/handlers/hello.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst { EventHubProducerClient } = __webpack_require__(/*! @azure/event-hubs */ \"@azure/event-hubs\");\nconst connectionString = \"Endpoint=sb://testwillehn.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=chave\";\nconst eventHubName = \"goodbye\";\nasync function main() {\n    const producer = new EventHubProducerClient(connectionString, eventHubName);\n    const batch = await producer.createBatch();\n    batch.tryAdd({ body: \"First event\" });\n    batch.tryAdd({ body: \"Second event\" });\n    batch.tryAdd({ body: \"Third event\" });\n    await producer.sendBatch(batch);\n    await producer.close();\n    console.log(\"A batch of three events have been sent to the event hub\");\n}\nconst sayHello = async function (context, req) {\n    var _a;\n    try {\n        console.log('Typescript HTTP trigger function processed a request.');\n        if (req.query.name || ((_a = req.body) === null || _a === void 0 ? void 0 : _a.name)) {\n            await main();\n            context.res = {\n                body: `Goodbye ${(req.query.name || req.body.name)}`,\n            };\n        }\n        else {\n            context.res = {\n                status: 400,\n                body: 'Please pass a name on the query string or in the request body',\n            };\n        }\n    }\n    catch (error) {\n        context.res = {\n            status: 400,\n            body: 'Please pass a name on the query string or in the request body',\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (sayHello);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvaGVsbG8udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlcnMvaGVsbG8udHM/YjAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBenVyZUZ1bmN0aW9uLCBDb250ZXh0LCBIdHRwUmVxdWVzdCB9IGZyb20gJ0BhenVyZS9mdW5jdGlvbnMnO1xuY29uc3QgeyBFdmVudEh1YlByb2R1Y2VyQ2xpZW50IH0gPSByZXF1aXJlKFwiQGF6dXJlL2V2ZW50LWh1YnNcIik7XG5cbmNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBcIkVuZHBvaW50PXNiOi8vdGVzdHdpbGxlaG4uc2VydmljZWJ1cy53aW5kb3dzLm5ldC87U2hhcmVkQWNjZXNzS2V5TmFtZT1Sb290TWFuYWdlU2hhcmVkQWNjZXNzS2V5O1NoYXJlZEFjY2Vzc0tleT1jaGF2ZVwiO1xuY29uc3QgZXZlbnRIdWJOYW1lID0gXCJnb29kYnllXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG5cbiAgLy8gQ3JlYXRlIGEgcHJvZHVjZXIgY2xpZW50IHRvIHNlbmQgbWVzc2FnZXMgdG8gdGhlIGV2ZW50IGh1Yi5cbiAgY29uc3QgcHJvZHVjZXIgPSBuZXcgRXZlbnRIdWJQcm9kdWNlckNsaWVudChjb25uZWN0aW9uU3RyaW5nLCBldmVudEh1Yk5hbWUpO1xuXG4gIC8vIFByZXBhcmUgYSBiYXRjaCBvZiB0aHJlZSBldmVudHMuXG4gIGNvbnN0IGJhdGNoID0gYXdhaXQgcHJvZHVjZXIuY3JlYXRlQmF0Y2goKTtcbiAgYmF0Y2gudHJ5QWRkKHsgYm9keTogXCJGaXJzdCBldmVudFwiIH0pO1xuICBiYXRjaC50cnlBZGQoeyBib2R5OiBcIlNlY29uZCBldmVudFwiIH0pO1xuICBiYXRjaC50cnlBZGQoeyBib2R5OiBcIlRoaXJkIGV2ZW50XCIgfSk7ICAgIFxuXG4gIC8vIFNlbmQgdGhlIGJhdGNoIHRvIHRoZSBldmVudCBodWIuXG4gIGF3YWl0IHByb2R1Y2VyLnNlbmRCYXRjaChiYXRjaCk7XG5cbiAgLy8gQ2xvc2UgdGhlIHByb2R1Y2VyIGNsaWVudC5cbiAgYXdhaXQgcHJvZHVjZXIuY2xvc2UoKTtcblxuICBjb25zb2xlLmxvZyhcIkEgYmF0Y2ggb2YgdGhyZWUgZXZlbnRzIGhhdmUgYmVlbiBzZW50IHRvIHRoZSBldmVudCBodWJcIik7XG59XG5cbmNvbnN0IHNheUhlbGxvOiBBenVyZUZ1bmN0aW9uID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQ6IENvbnRleHQsIHJlcTogSHR0cFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygnVHlwZXNjcmlwdCBIVFRQIHRyaWdnZXIgZnVuY3Rpb24gcHJvY2Vzc2VkIGEgcmVxdWVzdC4nKTtcblxuICAgIGlmIChyZXEucXVlcnkubmFtZSB8fCAocmVxLmJvZHk/Lm5hbWUpKSB7XG4gICAgICBhd2FpdCBtYWluKCk7XG4gICAgICBjb250ZXh0LnJlcyA9IHtcbiAgICAgICAgLy8gc3RhdHVzOiAyMDAsIC8qIERlZmF1bHRzIHRvIDIwMCAqL1xuICAgICAgICBib2R5OiBgR29vZGJ5ZSAkeyhyZXEucXVlcnkubmFtZSB8fCByZXEuYm9keS5uYW1lKX1gLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5yZXMgPSB7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICBib2R5OiAnUGxlYXNlIHBhc3MgYSBuYW1lIG9uIHRoZSBxdWVyeSBzdHJpbmcgb3IgaW4gdGhlIHJlcXVlc3QgYm9keScsXG4gICAgICB9O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb250ZXh0LnJlcyA9IHtcbiAgICAgIHN0YXR1czogNDAwLFxuICAgICAgYm9keTogJ1BsZWFzZSBwYXNzIGEgbmFtZSBvbiB0aGUgcXVlcnkgc3RyaW5nIG9yIGluIHRoZSByZXF1ZXN0IGJvZHknLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F5SGVsbG87Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/handlers/hello.ts\n");

/***/ }),

/***/ "@azure/event-hubs":
/*!************************************!*\
  !*** external "@azure/event-hubs" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@azure/event-hubs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGF6dXJlL2V2ZW50LWh1YnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXp1cmUvZXZlbnQtaHVic1wiP2FkMGYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF6dXJlL2V2ZW50LWh1YnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@azure/event-hubs\n");

/***/ })

/******/ })));