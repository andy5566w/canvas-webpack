(()=>{"use strict";var t={p:"dist/"};t.p;function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(new(function(){function t(){var e,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,o=null,(n=r(n="button"))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}var e,o,i;return e=t,(o=[{key:"render",value:function(){var t=this;this.button=document.createElement("button"),this.button.innerHTML="test button",this.button.classList.add("btn"),this.button.addEventListener("click",(function(){t.addText()})),document.body.appendChild(this.button)}},{key:"addText",value:function(){var t=document.createElement("p");t.classList.add("btn__text"),t.innerHTML=Math.random().toString(16).slice(2),document.body.appendChild(t)}},{key:"destroy",value:function(){this.button&&this.button.remove()}}])&&n(e.prototype,o),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}())).render()})();