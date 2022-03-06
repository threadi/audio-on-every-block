/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Add i18n
 */
const {
  __
} = wp.i18n;
/**
 * List of supported blocks
 *
 * @type {string[]}
 */

const supportedBlocks = ['core/heading', 'core/paragraph', 'core/gallery', 'core/list', 'core/quote', 'core/pullquote', 'core/table'];
/**
 * Add the attribute for the mediaId
 *
 * @param settings
 * @param name
 * @returns {*}
 */

function addAudioPlaybackAttribute(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    // Do nothing if it's another block than our supported ones.
    if (!supportedBlocks.includes(name)) {
      return settings;
    }

    settings.attributes = Object.assign(settings.attributes, {
      audioPlaybackId: {
        type: 'integer',
        default: 0
      },
      audioPlaybackTitle: {
        type: 'string'
      }
    });
  }

  return settings;
}

wp.hooks.addFilter('blocks.registerBlockType', 'awp/cover-custom-attribute', addAudioPlaybackAttribute);
const coverAdvancedControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    /**
     * Add components
     */
    const {
      Fragment
    } = wp.element;
    const {
      InspectorControls,
      MediaUpload,
      MediaUploadCheck
    } = wp.blockEditor;
    const {
      Button,
      PanelBody,
      TextControl
    } = wp.components;
    /**
     * Event on select audio-file
     *
     * @param media
     */

    const onSelectMedia = media => {
      props.setAttributes({
        audioPlaybackId: media.id
      });
    };
    /**
     * Event to remove selected audio-file
     */


    const removeMedia = () => {
      props.setAttributes({
        audioPlaybackId: 0
      });
    };
    /**
     * Get settings
     */


    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && supportedBlocks.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Audio Playback', 'audio-on-every-block')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-choose-block-audio"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      allowedTypes: ['audio'],
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          className: attributes.audioPlaybackId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.audioPlaybackId === 0 && __('Choose an audio-file', 'audio-on-every-block'));
      }
    })), attributes.audioPlaybackId !== 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, __('Remove audio-file', 'audio-on-every-block'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Title', 'audio-on-every-block'),
      value: attributes.audioPlaybackTitle,
      onChange: value => setAttributes({
        audioPlaybackTitle: value
      })
    })))));
  };
}, 'coverAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'awp/cover-advanced-control', coverAdvancedControls);

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks.js");

}();
/******/ })()
;
//# sourceMappingURL=index.js.map