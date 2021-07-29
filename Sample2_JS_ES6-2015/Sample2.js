/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SampleClass1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SampleClass1 */ \"./src/SampleClass1.js\");\n/* harmony import */ var _SampleClass2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SampleClass2 */ \"./src/SampleClass2.js\");\n// #!/usr/bin/env node \n\n \n\n\n\n\n/**\n * Sample1のメインプログラム\n * @author Keisuke Ikeda\n * @version 1.0\n */\nfunction main()\n{\n\tconst aSampleClass1 = new _SampleClass1__WEBPACK_IMPORTED_MODULE_0__[\"SampleClass1\"]()\n\tconst aSampleClass2 = new _SampleClass2__WEBPACK_IMPORTED_MODULE_1__[\"SampleClass2\"](5)\n\n\tconsole.log('')\n\tconsole.log(\"-SampleClass1-----------------\")\n\tconsole.log(\"-value------------------------\");\n\t\n\tconsole.log(\"classValue is \" + _SampleClass1__WEBPACK_IMPORTED_MODULE_0__[\"SampleClass1\"].classValue)\n\tconsole.log(\"instanceValue is \" + aSampleClass1.instanceValue)\n\n\tconsole.log(\"-method-----------------------\")\n\n\t_SampleClass1__WEBPACK_IMPORTED_MODULE_0__[\"SampleClass1\"].classMethod();\n\taSampleClass1.instanceMethod();\n\n\tconsole.log('')\n\tconsole.log(\"-SampleClass2-----------------\")\n\tconsole.log(\"-value------------------------\");\n\n\tconsole.log(\"classValue is \" + _SampleClass2__WEBPACK_IMPORTED_MODULE_1__[\"SampleClass2\"].classValue)\n\tconsole.log(\"instanceValue is \" + aSampleClass2.instanceValue)\n\n\tconsole.log(\"-method-----------------------\")\n\n\t_SampleClass2__WEBPACK_IMPORTED_MODULE_1__[\"SampleClass2\"].classMethod()\n\taSampleClass2.instanceMethod()\n\n\tconsole.log('')\n\n\treturn null;\n}\n\nmain()\n\n\n//# sourceURL=webpack:///./src/Main.js?");

/***/ }),

/***/ "./src/SampleClass1.js":
/*!*****************************!*\
  !*** ./src/SampleClass1.js ***!
  \*****************************/
/*! exports provided: SampleClass1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SampleClass1\", function() { return SampleClass1; });\n// #!/usr/bin/env node \n\n  \n\n/**\n * @author Keisuke Ikeda\n * @version 1.0\n * @description サンプルクラス1\n * @returns this\n */\nfunction SampleClass1()\n{\n    // インスタンス変数\n    this.instanceValue = 2;\n\n    // インスタンスメソッド\n    this.instanceMethod = function(){ console.log(\"this is classMethod.\") }\n \n    return this;\n}\n\n// クラス変数\nSampleClass1.classValue = 1;\n\n// クラスメソッド\nSampleClass1.classMethod = function(){ console.log(\"this is classMethod.\") }\n\n//# sourceURL=webpack:///./src/SampleClass1.js?");

/***/ }),

/***/ "./src/SampleClass2.js":
/*!*****************************!*\
  !*** ./src/SampleClass2.js ***!
  \*****************************/
/*! exports provided: SampleClass2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SampleClass2\", function() { return SampleClass2; });\n// #!/usr/bin/env node \n\n  \n\n/**\n * @author Keisuke Ikeda\n * @version 1.0\n * @class\n * @classdesc サンプルクラス2\n * @returns this\n */\nclass SampleClass2\n{\n    /**\n     * コンストラクタ\n     */\n    constructor(instanceValue = 2)\n    {\n        // インスタンス変数\n        this.instanceValue = instanceValue;\n        return this;\n    }\n\n    /**\n     * インスタンスメソッド\n     */\n    instanceMethod(){\n        console.log(\"this is classMethod.\") \n    }\n}\n \n\n// クラス変数\nSampleClass2.classValue = 1;\n\n// クラスメソッド\nSampleClass2.classMethod = function(){ console.log(\"this is classMethod.\") }\n\n//# sourceURL=webpack:///./src/SampleClass2.js?");

/***/ })

/******/ });