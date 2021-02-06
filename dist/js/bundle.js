/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/apple-location-choice.js":
/*!*****************************************!*\
  !*** ./src/js/apple-location-choice.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _snake_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-state */ "./src/js/snake-state.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var randomX = Math.floor(Math.random() * 40) * 10;
  var randomY = Math.floor(Math.random() * 40) * 10;
  var check = _snake_state__WEBPACK_IMPORTED_MODULE_0__.default.filter(function (v) {
    return v.x === randomX && v.y === randomY;
  });

  while (check.length === 1) {
    randomX = Math.floor(Math.random() * 40) * 10;
    randomY = Math.floor(Math.random() * 40) * 10;
    check = _snake_state__WEBPACK_IMPORTED_MODULE_0__.default.filter(function (v) {
      return v.x === randomX && v.y === randomY;
    });
  }

  return {
    randomX: Math.floor(Math.random() * 40) * 10,
    randomY: Math.floor(Math.random() * 40) * 10
  };
});

/***/ }),

/***/ "./src/js/apple-render.js":
/*!********************************!*\
  !*** ./src/js/apple-render.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/js/constant.js");
/* harmony import */ var _apple_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple.state */ "./src/js/apple.state.js");


var $canvas = document.querySelector('.canvas');
var ctx = $canvas.getContext('2d');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (randomX, randomY) {
  ctx.beginPath();
  ctx.rect(randomX, randomY, _constant__WEBPACK_IMPORTED_MODULE_0__.default.sizeX, _constant__WEBPACK_IMPORTED_MODULE_0__.default.sizeY);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
  _apple_state__WEBPACK_IMPORTED_MODULE_1__.default.x = randomX;
  _apple_state__WEBPACK_IMPORTED_MODULE_1__.default.y = randomY;
});

/***/ }),

/***/ "./src/js/apple.state.js":
/*!*******************************!*\
  !*** ./src/js/apple.state.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  x: 0,
  y: 0
});

/***/ }),

/***/ "./src/js/constant.js":
/*!****************************!*\
  !*** ./src/js/constant.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sizeX: 10,
  sizeY: 10
});

/***/ }),

/***/ "./src/js/eat-apple.js":
/*!*****************************!*\
  !*** ./src/js/eat-apple.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _snake_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-state */ "./src/js/snake-state.js");
/* harmony import */ var _apple_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple.state */ "./src/js/apple.state.js");
/* harmony import */ var _apple_location_choice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apple-location-choice */ "./src/js/apple-location-choice.js");
/* harmony import */ var _apple_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apple-render */ "./src/js/apple-render.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score */ "./src/js/score.js");






var _appleLocationChoice = (0,_apple_location_choice__WEBPACK_IMPORTED_MODULE_2__.default)(),
    x = _appleLocationChoice.randomX,
    y = _appleLocationChoice.randomY;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,_apple_render__WEBPACK_IMPORTED_MODULE_3__.default)(x, y);

  if (_snake_state__WEBPACK_IMPORTED_MODULE_0__.default[0].x === _apple_state__WEBPACK_IMPORTED_MODULE_1__.default.x && _snake_state__WEBPACK_IMPORTED_MODULE_0__.default[0].y === _apple_state__WEBPACK_IMPORTED_MODULE_1__.default.y) {
    _snake_state__WEBPACK_IMPORTED_MODULE_0__.default.push({
      x: _snake_state__WEBPACK_IMPORTED_MODULE_0__.default[_snake_state__WEBPACK_IMPORTED_MODULE_0__.default.length - 1].x,
      y: _snake_state__WEBPACK_IMPORTED_MODULE_0__.default[_snake_state__WEBPACK_IMPORTED_MODULE_0__.default.length - 1].y
    });
    x = (0,_apple_location_choice__WEBPACK_IMPORTED_MODULE_2__.default)().randomX;
    y = (0,_apple_location_choice__WEBPACK_IMPORTED_MODULE_2__.default)().randomY;
    (0,_score__WEBPACK_IMPORTED_MODULE_4__.default)();
  }
});

/***/ }),

/***/ "./src/js/game-over-condition.js":
/*!***************************************!*\
  !*** ./src/js/game-over-condition.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _snake_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-state */ "./src/js/snake-state.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var head = _snake_state__WEBPACK_IMPORTED_MODULE_0__.default[0];
  return head.x < 0 || head.x > 390 || head.y < 0 || head.y > 390 || _snake_state__WEBPACK_IMPORTED_MODULE_0__.default.filter(function (v) {
    return v.x === head.x && v.y === head.y;
  }).length > 1;
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snake_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-render */ "./src/js/snake-render.js");
/* harmony import */ var _snake_change_way__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake-change-way */ "./src/js/snake-change-way.js");
/* harmony import */ var _eat_apple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eat-apple */ "./src/js/eat-apple.js");
/* harmony import */ var _game_over_condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-over-condition */ "./src/js/game-over-condition.js");
/* harmony import */ var _snake_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snake-state */ "./src/js/snake-state.js");
/* harmony import */ var _way_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./way-state */ "./src/js/way-state.js");






var gameover = 0;
var $start = document.querySelector('.start');
var $left = document.querySelector('.left');
var $right = document.querySelector('.right');
var $resContainer = document.querySelector('.res-container');
var $res = document.querySelector('.res');
var $resScore = document.querySelector('.res span');
var $score = document.querySelector('.score span');
var $ok = document.querySelector('.ok');

var _final = function _final() {
  (0,_snake_change_way__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,_snake_render__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_eat_apple__WEBPACK_IMPORTED_MODULE_2__.default)();

  if ((0,_game_over_condition__WEBPACK_IMPORTED_MODULE_3__.default)()) {
    $resContainer.classList.add('gameover');
    $res.classList.add('gameover');
    $resScore.textContent = $score.textContent;
    clearInterval(gameover);
  }
};

$start.addEventListener('click', function () {
  $start.classList.add('play');
  $left.classList.add('play');
  $right.classList.add('play');
  gameover = setInterval(_final, 200);
});
$ok.addEventListener('click', function () {
  $start.classList.remove('play');
  $left.classList.remove('play');
  $right.classList.remove('play');
  $resContainer.classList.remove('gameover');
  $res.classList.remove('gameover');
  $score.textContent = 0;
  _snake_state__WEBPACK_IMPORTED_MODULE_4__.default.length = 0;
  _snake_state__WEBPACK_IMPORTED_MODULE_4__.default.push.apply(_snake_state__WEBPACK_IMPORTED_MODULE_4__.default, [{
    x: 200,
    y: 370
  }, {
    x: 200,
    y: 380
  }]);
  _way_state__WEBPACK_IMPORTED_MODULE_5__.default.dir = 'up';
});

/***/ }),

/***/ "./src/js/score.js":
/*!*************************!*\
  !*** ./src/js/score.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var $score = document.querySelector('.score span');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  $score.textContent = +$score.textContent + 10;
});

/***/ }),

/***/ "./src/js/snake-change-way.js":
/*!************************************!*\
  !*** ./src/js/snake-change-way.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _way_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./way-state */ "./src/js/way-state.js");

var $left = document.querySelector('.left');
var $right = document.querySelector('.right');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var dir = _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir;
  window.addEventListener('keydown', function (e) {
    if (e.code !== 'ArrowLeft') return;

    if (dir === 'up') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'left';
    } else if (dir === 'down') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'right';
    } else if (dir === 'left') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'down';
    } else if (dir === 'right') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'up';
    }
  });
  window.addEventListener('keydown', function (e) {
    if (e.code !== 'ArrowRight') return;

    if (dir === 'up') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'right';
    } else if (dir === 'down') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'left';
    } else if (dir === 'left') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'up';
    } else if (dir === 'right') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'down';
    }
  });
  $left.addEventListener('click', function () {
    if (dir === 'up') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'left';
    } else if (dir === 'down') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'right';
    } else if (dir === 'left') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'down';
    } else if (dir === 'right') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'up';
    }
  });
  $right.addEventListener('click', function () {
    if (dir === 'up') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'right';
    } else if (dir === 'down') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'left';
    } else if (dir === 'left') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'up';
    } else if (dir === 'right') {
      _way_state__WEBPACK_IMPORTED_MODULE_0__.default.dir = 'down';
    }
  });
});

/***/ }),

/***/ "./src/js/snake-move.js":
/*!******************************!*\
  !*** ./src/js/snake-move.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _snake_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-state */ "./src/js/snake-state.js");
/* harmony import */ var _snake_new_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake-new-head */ "./src/js/snake-new-head.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var head = (0,_snake_new_head__WEBPACK_IMPORTED_MODULE_1__.default)();
  _snake_state__WEBPACK_IMPORTED_MODULE_0__.default.unshift(head);
  _snake_state__WEBPACK_IMPORTED_MODULE_0__.default.pop();
});

/***/ }),

/***/ "./src/js/snake-new-head.js":
/*!**********************************!*\
  !*** ./src/js/snake-new-head.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _snake_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-state */ "./src/js/snake-state.js");
/* harmony import */ var _way_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./way-state */ "./src/js/way-state.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _snakeState$ = _snake_state__WEBPACK_IMPORTED_MODULE_0__.default[0],
      newX = _snakeState$.x,
      newY = _snakeState$.y;
  return _way_state__WEBPACK_IMPORTED_MODULE_1__.default.dir === 'up' ? {
    x: newX,
    y: newY - 10
  } : _way_state__WEBPACK_IMPORTED_MODULE_1__.default.dir === 'down' ? {
    x: newX,
    y: newY + 10
  } : _way_state__WEBPACK_IMPORTED_MODULE_1__.default.dir === 'left' ? {
    x: newX - 10,
    y: newY
  } : {
    x: newX + 10,
    y: newY
  };
});

/***/ }),

/***/ "./src/js/snake-render.js":
/*!********************************!*\
  !*** ./src/js/snake-render.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _snake_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-state */ "./src/js/snake-state.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/js/constant.js");
/* harmony import */ var _snake_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake-move */ "./src/js/snake-move.js");



var $canvas = document.querySelector('.canvas');
var ctx = $canvas.getContext('2d');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  _snake_state__WEBPACK_IMPORTED_MODULE_0__.default.forEach(function (v) {
    ctx.beginPath();
    ctx.rect(v.x, v.y, _constant__WEBPACK_IMPORTED_MODULE_1__.default.sizeX, _constant__WEBPACK_IMPORTED_MODULE_1__.default.sizeY);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
  });
  (0,_snake_move__WEBPACK_IMPORTED_MODULE_2__.default)();
});

/***/ }),

/***/ "./src/js/snake-state.js":
/*!*******************************!*\
  !*** ./src/js/snake-state.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  x: 200,
  y: 370
}, {
  x: 200,
  y: 380
}]);

/***/ }),

/***/ "./src/js/way-state.js":
/*!*****************************!*\
  !*** ./src/js/way-state.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  dir: 'up'
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map