/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project/./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n\n\n\n\n(0,_js_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ app)\n/* harmony export */ });\n //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА\n\n let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']\n let PRICES = [100, 120, 1000, 15, 18]\n let IDS = [0, 1, 2, 3, 4]\n let IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg', \n 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399',\n 'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg',\n 'https://files.sandberg.it/products/images/lg/640-05_lg.jpg',\n 'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg']\n\n //let products = [] //массив объектов\n \n let catalog = {\n    items: [],\n    container: '.products',\n    cart: null,\n    construct (cart) {\n        this.cart = cart\n        this._init () //_ - это обозначение инкапсулированного метода\n    },\n    _init () {\n        this._handleData ()\n        this.render ()\n        this._handleEvents ()\n    },\n    _handleEvents () {\n        document.querySelector (this.container).addEventListener ('click', (evt) => {\n            if (evt.target.name === 'buy-btn') {\n                this.cart.addProduct (evt.target)\n            }\n        })\n    },\n    _handleData () {\n        for (let i = 0; i < IDS.length; i++) {\n            this.items.push (this._createNewProduct (i))\n        }\n    },\n    _createNewProduct (index) {\n        return {\n            product_name: PRODUCTS_NAMES [index],\n            price: PRICES [index],\n            id_product: IDS [index],\n            img: IMGS [index]\n        }\n    },\n    render () {\n        let str = ''\n        this.items.forEach (item => {\n            str += `\n                <div class=\"product-item\">\n                    <img src=\"https://placehold.it/300x200\" alt=\"${item.product_name}\">\n                    <!--img src=\"${item.img}\" width=\"300\" height=\"200\" alt=\"${item.product_name}\"-->\n                    <div class=\"desc\">\n                        <h1>${item.product_name}</h1>\n                        <p>${item.price}</p>\n                        <button \n                        class=\"buy-btn\" \n                        name=\"buy-btn\"\n                        data-name=\"${item.product_name}\"\n                        data-price=\"${item.price}\"\n                        data-id=\"${item.id_product}\"\n                        >Купить</button>\n                    </div>\n                </div>\n            `\n        })\n        document.querySelector(this.container).innerHTML = str\n     }\n }\n\n let cart = {\n    items: [],\n    total: 0,\n    sum: 0,\n    container: '.cart-block',\n    quantityBlock: document.querySelector ('#quantity'),\n    priceBlock: document.querySelector ('#price'),\n    construct () {\n        this._init ()\n    },\n    _init () {\n        this._handleEvents ()\n    },\n    _handleEvents () {\n        document.querySelector (this.container).addEventListener ('click', (evt) => {\n            if (evt.target.name === 'del-btn') {\n                this.deleteProduct (evt.target)\n            }\n        })\n    },\n    addProduct (product) {\n        let id = product.dataset['id']\n        let find = this.items.find (product => product.id_product === id)\n        if (find) {\n            find.quantity++\n        } else {\n            let prod = this._createNewProduct (product)\n            this.items.push (prod)\n        }\n         \n        this._checkTotalAndSum ()\n        this.render ()\n    },\n    _createNewProduct (prod) {\n        return {\n            product_name: prod.dataset['name'],\n            price: prod.dataset['price'],\n            id_product: prod.dataset['id'],\n            quantity: 1\n        }\n    },\n    deleteProduct (product) {\n        let id = product.dataset['id']\n        let find = this.items.find (product => product.id_product === id)\n        if (find.quantity > 1) {\n            find.quantity--\n        } else {\n            this.items.splice (this.items.indexOf(find), 1)\n        }\n         \n        this._checkTotalAndSum ()\n        this.render ()\n    },\n    \n    _checkTotalAndSum () {\n        let qua = 0\n        let pr = 0\n        this.items.forEach (item => {\n            qua += item.quantity\n            pr += item.price * item.quantity\n        })\n        this.total = qua\n        this.sum = pr\n    },\n    render () {\n        let itemsBlock = document.querySelector (this.container).querySelector ('.cart-items')\n        let str = ''\n        this.items.forEach (item => {\n            str += `<div class=\"cart-item\" data-id=\"${item.id_product}\">\n                    <img src=\"https://placehold.it/100x80\" alt=\"\">\n                    <div class=\"product-desc\">\n                        <p class=\"product-title\">${item.product_name}</p>\n                        <p class=\"product-quantity\">${item.quantity}</p>\n                        <p class=\"product-single-price\">${item.price}</p>\n                    </div>\n                    <div class=\"right-block\">\n                        <button name=\"del-btn\" class=\"del-btn\" data-id=\"${item.id_product}\">&times;</button>\n                    </div>\n                </div>`\n        })\n        itemsBlock.innerHTML = str\n        this.quantityBlock.innerText = this.total\n        this.priceBlock.innerText = this.sum\n    }\n }\n\n function app (){\n    console.log('Jobs done!');\n    catalog.construct (cart) //тут происходит создание объекта и вся прочая магия\n    cart.construct ()\n }\n\n//# sourceURL=webpack://project/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;