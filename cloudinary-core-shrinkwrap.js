/*
 * Cloudinary's JavaScript library - Version 2.0.0
 * Copyright Cloudinary
 * see https://github.com/cloudinary/cloudinary_js
 */
(function() {
(function() {
  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('utf8_encode',factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory();
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary.utf8_encode = factory();
    }
  })(this, function() {
    return function(argString) {
      var c1, enc, end, n, start, string, stringl, utftext;
      if (argString === null || typeof argString === 'undefined') {
        return '';
      }
      string = argString + '';
      utftext = '';
      start = void 0;
      end = void 0;
      stringl = 0;
      start = end = 0;
      stringl = string.length;
      n = 0;
      while (n < stringl) {
        c1 = string.charCodeAt(n);
        enc = null;
        if (c1 < 128) {
          end++;
        } else if (c1 > 127 && c1 < 2048) {
          enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
        } else {
          enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
        }
        if (enc !== null) {
          if (end > start) {
            utftext += string.slice(start, end);
          }
          utftext += enc;
          start = end = n + 1;
        }
        n++;
      }
      if (end > start) {
        utftext += string.slice(start, stringl);
      }
      return utftext;
    };
  });

}).call(this);

(function() {
  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('crc32',['utf8_encode'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('utf8_encode'));
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary.crc32 = factory(root.cloudinary.utf8_encode);
    }
  })(this, function(utf8_encode) {
    return function(str) {
      var crc, i, iTop, table, x, y;
      str = utf8_encode(str);
      table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
      crc = 0;
      x = 0;
      y = 0;
      crc = crc ^ -1;
      i = 0;
      iTop = str.length;
      while (i < iTop) {
        y = (crc ^ str.charCodeAt(i)) & 0xFF;
        x = '0x' + table.substr(y * 9, 8);
        crc = crc >>> 8 ^ x;
        i++;
      }
      crc = crc ^ -1;
      if (crc < 0) {
        crc += 4294967296;
      }
      return crc;
    };
  });

}).call(this);

/**
 * @license
 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash compat include="assign,camelCase,cloneDeep,compact,contains,defaults,difference,functions,identity,isArray,isElement,isEmpty,isFunction,isPlainObject,isString,merge,snakeCase,trim" --output build/lodash.js`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '3.10.1';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect host constructors (Safari > 5). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^\d+$/;

  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

  /** Used to match words to create compound words. */
  var reWords = (function() {
    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
  }());

  /** Used to fix the JScript `[[DontEnum]]` bug. */
  var shadowProps = [
    'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
    'toLocaleString', 'toString', 'valueOf'
  ];

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
  cloneableTags[dateTag] = cloneableTags[float32Tag] =
  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[stringTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[mapTag] = cloneableTags[setTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map latin-1 supplementary letters to basic latin letters. */
  var deburredLetters = {
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss'
  };

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

  /** Detect free variable `self`. */
  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

  /** Detect free variable `window`. */
  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /**
   * Used as a reference to the global object.
   *
   * The `this` value is used if it's the global object to avoid Greasemonkey's
   * restricted `window` object, otherwise the `window` object is used.
   */
  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `_.indexOf` without support for binary searches.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Converts `value` to a string if it's not one. An empty string is returned
   * for `null` or `undefined` values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    return value == null ? '' : (value + '');
  }

  /**
   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
   * of `string` that is not found in `chars`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @param {string} chars The characters to find.
   * @returns {number} Returns the index of the first character not found in `chars`.
   */
  function charsLeftIndex(string, chars) {
    var index = -1,
        length = string.length;

    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimRight` to get the index of the last character
   * of `string` that is not found in `chars`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @param {string} chars The characters to find.
   * @returns {number} Returns the index of the last character not found in `chars`.
   */
  function charsRightIndex(string, chars) {
    var index = string.length;

    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }

  /**
   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  function deburrLetter(letter) {
    return deburredLetters[letter];
  }

  /**
   * Gets the index at which the first occurrence of `NaN` is found in `array`.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
   */
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  var isHostObject = (function() {
    try {
      Object({ 'toString': 0 } + '');
    } catch(e) {
      return function() { return false; };
    }
    return function(value) {
      // IE < 9 presents many host objects as `Object` objects that can coerce
      // to strings despite having improperly defined `toString` methods.
      return typeof value.toString != 'function' && typeof (value + '') == 'string';
    };
  }());

  /**
   * Checks if `value` is object-like.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
   * character code is whitespace.
   *
   * @private
   * @param {number} charCode The character code to inspect.
   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
   */
  function isSpace(charCode) {
    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
  }

  /**
   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the first non-whitespace character.
   */
  function trimmedLeftIndex(string) {
    var index = -1,
        length = string.length;

    while (++index < length && isSpace(string.charCodeAt(index))) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedRightIndex(string) {
    var index = string.length;

    while (index-- && isSpace(string.charCodeAt(index))) {}
    return index;
  }

  /*--------------------------------------------------------------------------*/

  /** Used for native method references. */
  var arrayProto = Array.prototype,
      errorProto = Error.prototype,
      objectProto = Object.prototype,
      stringProto = String.prototype;

  /** Used to resolve the decompiled source of functions. */
  var fnToString = Function.prototype.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Native method references. */
  var ArrayBuffer = root.ArrayBuffer,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      Set = getNative(root, 'Set'),
      splice = arrayProto.splice,
      Uint8Array = root.Uint8Array;

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeCreate = getNative(Object, 'create'),
      nativeFloor = Math.floor,
      nativeIsArray = getNative(Array, 'isArray'),
      nativeKeys = getNative(Object, 'keys'),
      nativeMax = Math.max,
      nativeMin = Math.min;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /**
   * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
   * of an array-like value.
   */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to lookup a type array constructors by `toStringTag`. */
  var ctorByTag = {};
  ctorByTag[float32Tag] = root.Float32Array;
  ctorByTag[float64Tag] = root.Float64Array;
  ctorByTag[int8Tag] = root.Int8Array;
  ctorByTag[int16Tag] = root.Int16Array;
  ctorByTag[int32Tag] = root.Int32Array;
  ctorByTag[uint8Tag] = Uint8Array;
  ctorByTag[uint8ClampedTag] = root.Uint8ClampedArray;
  ctorByTag[uint16Tag] = root.Uint16Array;
  ctorByTag[uint32Tag] = root.Uint32Array;

  /** Used to avoid iterating over non-enumerable properties in IE < 9. */
  var nonEnumProps = {};
  nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
  nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
  nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
  nonEnumProps[objectTag] = { 'constructor': true };

  arrayEach(shadowProps, function(key) {
    for (var tag in nonEnumProps) {
      if (hasOwnProperty.call(nonEnumProps, tag)) {
        var props = nonEnumProps[tag];
        props[key] = hasOwnProperty.call(props, key);
      }
    }
  });

  /*------------------------------------------------------------------------*/

  /**
   * Creates a `lodash` object which wraps `value` to enable implicit chaining.
   * Methods that operate on and return arrays, collections, and functions can
   * be chained together. Methods that retrieve a single value or may return a
   * primitive value will automatically end the chain returning the unwrapped
   * value. Explicit chaining may be enabled using `_.chain`. The execution of
   * chained methods is lazy, that is, execution is deferred until `_#value`
   * is implicitly or explicitly called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
   * fusion is an optimization strategy which merge iteratee calls; this can help
   * to avoid the creation of intermediate data structures and greatly reduce the
   * number of iteratee executions.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
   * `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
   * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
   * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
   * and `where`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
   * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
   * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
   * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
   * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
   * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
   * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
   * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
   * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
   * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
   * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
   * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
   * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
   * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
   * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
   * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
   * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
   * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
   * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
   * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
   * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
   * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
   * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
   * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
   * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
   * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
   * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
   * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
   * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
   * `unescape`, `uniqueId`, `value`, and `words`
   *
   * The wrapper method `sample` will return a wrapped value when `n` is provided,
   * otherwise an unwrapped value is returned.
   *
   * @name _
   * @constructor
   * @category Chain
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // returns an unwrapped value
   * wrapped.reduce(function(total, n) {
   *   return total + n;
   * });
   * // => 6
   *
   * // returns a wrapped value
   * var squares = wrapped.map(function(n) {
   *   return n * n;
   * });
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
  function lodash() {
    // No operation performed.
  }

  /**
   * An object environment feature flags.
   *
   * @static
   * @memberOf _
   * @type Object
   */
  var support = lodash.support = {};

  (function(x) {
    var Ctor = function() { this.x = x; },
        object = { '0': x, 'length': x },
        props = [];

    Ctor.prototype = { 'valueOf': x, 'y': x };
    for (var key in new Ctor) { props.push(key); }

    /**
     * Detect if `name` or `message` properties of `Error.prototype` are
     * enumerable by default (IE < 9, Safari < 5.1).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
      propertyIsEnumerable.call(errorProto, 'name');

    /**
     * Detect if `prototype` properties are enumerable by default.
     *
     * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
     * (if the prototype or a property on the prototype has been set)
     * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
     * property to `true`.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');

    /**
     * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
     *
     * In IE < 9 an object's own properties, shadowing non-enumerable ones,
     * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.nonEnumShadows = !/valueOf/.test(props);

    /**
     * Detect if own properties are iterated after inherited properties (IE < 9).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.ownLast = props[0] != 'x';

    /**
     * Detect if `Array#shift` and `Array#splice` augment array-like objects
     * correctly.
     *
     * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
     * `shift()` and `splice()` functions that fail to remove the last element,
     * `value[0]`, of array-like objects even though the "length" property is
     * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
     * while `splice()` is buggy regardless of mode in IE < 9.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.spliceObjects = (splice.call(object, 0, 1), !object[0]);

    /**
     * Detect lack of support for accessing string characters by index.
     *
     * IE < 8 can't access characters by index. IE 8 can only access characters
     * by index on string literals, not string objects.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
  }(1, 0));

  /*------------------------------------------------------------------------*/

  /**
   *
   * Creates a cache object to store unique values.
   *
   * @private
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var length = values ? values.length : 0;

    this.data = { 'hash': nativeCreate(null), 'set': new Set };
    while (length--) {
      this.push(values[length]);
    }
  }

  /**
   * Checks if `value` is in `cache` mimicking the return signature of
   * `_.indexOf` by returning `0` if the value is found, else `-1`.
   *
   * @private
   * @param {Object} cache The cache to search.
   * @param {*} value The value to search for.
   * @returns {number} Returns `0` if `value` is found, else `-1`.
   */
  function cacheIndexOf(cache, value) {
    var data = cache.data,
        result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

    return result ? 0 : -1;
  }

  /**
   * Adds `value` to the cache.
   *
   * @private
   * @name push
   * @memberOf SetCache
   * @param {*} value The value to cache.
   */
  function cachePush(value) {
    var data = this.data;
    if (typeof value == 'string' || isObject(value)) {
      data.set.add(value);
    } else {
      data.hash[value] = true;
    }
  }

  /*------------------------------------------------------------------------*/

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function arrayCopy(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * Used by `_.defaults` to customize its `_.assign` use.
   *
   * @private
   * @param {*} objectValue The destination object property value.
   * @param {*} sourceValue The source object property value.
   * @returns {*} Returns the value to assign to the destination object.
   */
  function assignDefaults(objectValue, sourceValue) {
    return objectValue === undefined ? sourceValue : objectValue;
  }

  /**
   * A specialized version of `_.assign` for customizing assigned values without
   * support for argument juggling, multiple sources, and `this` binding `customizer`
   * functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {Function} customizer The function to customize assigned values.
   * @returns {Object} Returns `object`.
   */
  function assignWith(object, source, customizer) {
    var index = -1,
        props = keys(source),
        length = props.length;

    while (++index < length) {
      var key = props[index],
          value = object[key],
          result = customizer(value, source[key], key, object, source);

      if ((result === result ? (result !== value) : (value === value)) ||
          (value === undefined && !(key in object))) {
        object[key] = result;
      }
    }
    return object;
  }

  /**
   * The base implementation of `_.assign` without support for argument juggling,
   * multiple sources, and `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return source == null
      ? object
      : baseCopy(source, keys(source), object);
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property names to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @returns {Object} Returns `object`.
   */
  function baseCopy(source, props, object) {
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];
      object[key] = source[key];
    }
    return object;
  }

  /**
   * The base implementation of `_.clone` without support for argument juggling
   * and `this` binding `customizer` functions.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @param {Function} [customizer] The function to customize cloning values.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The object `value` belongs to.
   * @param {Array} [stackA=[]] Tracks traversed source objects.
   * @param {Array} [stackB=[]] Associates clones with source counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return arrayCopy(value, result);
      }
    } else {
      var tag = objToString.call(value),
          isFunc = tag == funcTag;

      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return baseAssign(result, value);
        }
      } else {
        return cloneableTags[tag]
          ? initCloneByTag(value, tag, isDeep)
          : (object ? value : {});
      }
    }
    // Check for circular references and return its corresponding clone.
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == value) {
        return stackB[length];
      }
    }
    // Add the source value to the stack of traversed objects and associate it with its clone.
    stackA.push(value);
    stackB.push(result);

    // Recursively populate clone (susceptible to call stack limits).
    (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
      result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
    });
    return result;
  }

  /**
   * The base implementation of `_.difference` which accepts a single array
   * of values to exclude.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Array} values The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   */
  function baseDifference(array, values) {
    var length = array ? array.length : 0,
        result = [];

    if (!length) {
      return result;
    }
    var index = -1,
        indexOf = getIndexOf(),
        isCommon = indexOf === baseIndexOf,
        cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
        valuesLength = values.length;

    if (cache) {
      indexOf = cacheIndexOf;
      isCommon = false;
      values = cache;
    }
    outer:
    while (++index < length) {
      var value = array[index];

      if (isCommon && value === value) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === value) {
            continue outer;
          }
        }
        result.push(value);
      }
      else if (indexOf(values, value, 0) < 0) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.flatten` with added support for restricting
   * flattening and specifying the start index.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {boolean} [isDeep] Specify a deep flatten.
   * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, isDeep, isStrict, result) {
    result || (result = []);

    var index = -1,
        length = array.length;

    while (++index < length) {
      var value = array[index];
      if (isObjectLike(value) && isArrayLike(value) &&
          (isStrict || isArray(value) || isArguments(value))) {
        if (isDeep) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, isDeep, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  /**
   * The base implementation of `baseForIn` and `baseForOwn` which iterates
   * over `object` properties returned by `keysFunc` invoking `iteratee` for
   * each property. Iteratee functions may exit iteration early by explicitly
   * returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  /**
   * The base implementation of `_.forIn` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForIn(object, iteratee) {
    return baseFor(object, iteratee, keysIn);
  }

  /**
   * The base implementation of `_.forOwn` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return baseFor(object, iteratee, keys);
  }

  /**
   * The base implementation of `_.functions` which creates an array of
   * `object` function property names filtered from those provided.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Array} props The property names to filter.
   * @returns {Array} Returns the new array of filtered property names.
   */
  function baseFunctions(object, props) {
    var index = -1,
        length = props.length,
        resIndex = -1,
        result = [];

    while (++index < length) {
      var key = props[index];
      if (isFunction(object[key])) {
        result[++resIndex] = key;
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.merge` without support for argument juggling,
   * multiple sources, and `this` binding `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Array} [stackA=[]] Tracks traversed source objects.
   * @param {Array} [stackB=[]] Associates values with source counterparts.
   * @returns {Object} Returns `object`.
   */
  function baseMerge(object, source, customizer, stackA, stackB) {
    if (!isObject(object)) {
      return object;
    }
    var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
        props = isSrcArr ? undefined : keys(source);

    arrayEach(props || source, function(srcValue, key) {
      if (props) {
        key = srcValue;
        srcValue = source[key];
      }
      if (isObjectLike(srcValue)) {
        stackA || (stackA = []);
        stackB || (stackB = []);
        baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
      }
      else {
        var value = object[key],
            result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
            isCommon = result === undefined;

        if (isCommon) {
          result = srcValue;
        }
        if ((result !== undefined || (isSrcArr && !(key in object))) &&
            (isCommon || (result === result ? (result !== value) : (value === value)))) {
          object[key] = result;
        }
      }
    });
    return object;
  }

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Array} [stackA=[]] Tracks traversed source objects.
   * @param {Array} [stackB=[]] Associates values with source counterparts.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
    var length = stackA.length,
        srcValue = source[key];

    while (length--) {
      if (stackA[length] == srcValue) {
        object[key] = stackB[length];
        return;
      }
    }
    var value = object[key],
        result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
        isCommon = result === undefined;

    if (isCommon) {
      result = srcValue;
      if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
        result = isArray(value)
          ? value
          : (isArrayLike(value) ? arrayCopy(value) : []);
      }
      else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        result = isArguments(value)
          ? toPlainObject(value)
          : (isPlainObject(value) ? value : {});
      }
      else {
        isCommon = false;
      }
    }
    // Add the source value to the stack of traversed objects and associate
    // it with its merged value.
    stackA.push(srcValue);
    stackB.push(result);

    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
    } else if (result === result ? (result !== value) : (value === value)) {
      object[key] = result;
    }
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : toObject(object)[key];
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    var index = -1,
        length = props.length,
        result = Array(length);

    while (++index < length) {
      result[index] = object[props[index]];
    }
    return result;
  }

  /**
   * Performs a binary search of `array` to determine the index at which `value`
   * should be inserted into `array` in order to maintain its sort order.
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {boolean} [retHighest] Specify returning the highest qualified index.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
  function binaryIndex(array, value, retHighest) {
    var low = 0,
        high = array ? array.length : low;

    if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
      while (low < high) {
        var mid = (low + high) >>> 1,
            computed = array[mid];

        if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return high;
    }
    return binaryIndexBy(array, value, identity, retHighest);
  }

  /**
   * This function is like `binaryIndex` except that it invokes `iteratee` for
   * `value` and each element of `array` to compute their sort ranking. The
   * iteratee is invoked with one argument; (value).
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {boolean} [retHighest] Specify returning the highest qualified index.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
  function binaryIndexBy(array, value, iteratee, retHighest) {
    value = iteratee(value);

    var low = 0,
        high = array ? array.length : 0,
        valIsNaN = value !== value,
        valIsNull = value === null,
        valIsUndef = value === undefined;

    while (low < high) {
      var mid = nativeFloor((low + high) / 2),
          computed = iteratee(array[mid]),
          isDef = computed !== undefined,
          isReflexive = computed === computed;

      if (valIsNaN) {
        var setLow = isReflexive || retHighest;
      } else if (valIsNull) {
        setLow = isReflexive && isDef && (retHighest || computed != null);
      } else if (valIsUndef) {
        setLow = isReflexive && (retHighest || isDef);
      } else if (computed == null) {
        setLow = false;
      } else {
        setLow = retHighest ? (computed <= value) : (computed < value);
      }
      if (setLow) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return nativeMin(high, MAX_ARRAY_INDEX);
  }

  /**
   * A specialized version of `baseCallback` which only supports `this` binding
   * and specifying the number of arguments to provide to `func`.
   *
   * @private
   * @param {Function} func The function to bind.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {number} [argCount] The number of arguments to provide to `func`.
   * @returns {Function} Returns the callback.
   */
  function bindCallback(func, thisArg, argCount) {
    if (typeof func != 'function') {
      return identity;
    }
    if (thisArg === undefined) {
      return func;
    }
    switch (argCount) {
      case 1: return function(value) {
        return func.call(thisArg, value);
      };
      case 3: return function(value, index, collection) {
        return func.call(thisArg, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(thisArg, accumulator, value, index, collection);
      };
      case 5: return function(value, other, key, object, source) {
        return func.call(thisArg, value, other, key, object, source);
      };
    }
    return function() {
      return func.apply(thisArg, arguments);
    };
  }

  /**
   * Creates a clone of the given array buffer.
   *
   * @private
   * @param {ArrayBuffer} buffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function bufferClone(buffer) {
    var result = new ArrayBuffer(buffer.byteLength),
        view = new Uint8Array(result);

    view.set(new Uint8Array(buffer));
    return result;
  }

  /**
   * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return restParam(function(object, sources) {
      var index = -1,
          length = object == null ? 0 : sources.length,
          customizer = length > 2 ? sources[length - 2] : undefined,
          guard = length > 2 ? sources[2] : undefined,
          thisArg = length > 1 ? sources[length - 1] : undefined;

      if (typeof customizer == 'function') {
        customizer = bindCallback(customizer, thisArg, 5);
        length -= 2;
      } else {
        customizer = typeof thisArg == 'function' ? thisArg : undefined;
        length -= (customizer ? 1 : 0);
      }
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, customizer);
        }
      }
      return object;
    });
  }

  /**
   * Creates a base function for `_.forIn` or `_.forInRight`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var iterable = toObject(object),
          props = keysFunc(object),
          length = props.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length)) {
        var key = props[index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  /**
   * Creates a `Set` cache object to optimize linear searches of large arrays.
   *
   * @private
   * @param {Array} [values] The values to cache.
   * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
   */
  function createCache(values) {
    return (nativeCreate && Set) ? new SetCache(values) : null;
  }

  /**
   * Creates a function that produces compound words out of the words in a
   * given string.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */
  function createCompounder(callback) {
    return function(string) {
      var index = -1,
          array = words(deburr(string)),
          length = array.length,
          result = '';

      while (++index < length) {
        result = callback(result, array[index], index);
      }
      return result;
    };
  }

  /**
   * Creates a `_.defaults` or `_.defaultsDeep` function.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @param {Function} customizer The function to customize assigned values.
   * @returns {Function} Returns the new defaults function.
   */
  function createDefaults(assigner, customizer) {
    return restParam(function(args) {
      var object = args[0];
      if (object == null) {
        return object;
      }
      args.push(customizer);
      return assigner.apply(undefined, args);
    });
  }

  /**
   * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
   * customized this function returns the custom method, otherwise it returns
   * the `baseIndexOf` function. If arguments are provided the chosen function
   * is invoked with them and its result is returned.
   *
   * @private
   * @returns {Function|number} Returns the chosen function or its result.
   */
  function getIndexOf(collection, target, fromIndex) {
    var result = lodash.indexOf || indexOf;
    result = result === indexOf ? baseIndexOf : result;
    return collection ? result(collection, target, fromIndex) : result;
  }

  /**
   * Gets the "length" property value of `object`.
   *
   * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
   * that affects Safari on at least iOS 8.1-8.3 ARM64.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {*} Returns the "length" value.
   */
  var getLength = baseProperty('length');

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative(value) ? value : undefined;
  }

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add array properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    var Ctor = object.constructor;
    if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
      Ctor = Object;
    }
    return new Ctor;
  }

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return bufferClone(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case float32Tag: case float64Tag:
      case int8Tag: case int16Tag: case int32Tag:
      case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
        // Safari 5 mobile incorrectly has `Object` as the constructor of typed arrays.
        if (Ctor instanceof Ctor) {
          Ctor = ctorByTag[tag];
        }
        var buffer = object.buffer;
        return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        var result = new Ctor(object.source, reFlags.exec(object));
        result.lastIndex = object.lastIndex;
    }
    return result;
  }

  /**
   * Checks if `value` is array-like.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   */
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }

  /**
   * Checks if the provided arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)) {
      var other = object[index];
      return value === value ? (value === other) : (other !== other);
    }
    return false;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * A fallback implementation of `Object.keys` which creates an array of the
   * own enumerable property names of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function shimKeys(object) {
    var props = keysIn(object),
        propsLength = props.length,
        length = propsLength && object.length;

    var allowIndexes = !!length && isLength(length) &&
      (isArray(object) || isArguments(object) || isString(object));

    var index = -1,
        result = [];

    while (++index < propsLength) {
      var key = props[index];
      if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Converts `value` to an object if it's not one.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {Object} Returns the object.
   */
  function toObject(value) {
    if (lodash.support.unindexedChars && isString(value)) {
      var index = -1,
          length = value.length,
          result = Object(value);

      while (++index < length) {
        result[index] = value.charAt(index);
      }
      return result;
    }
    return isObject(value) ? value : Object(value);
  }

  /*------------------------------------------------------------------------*/

  /**
   * Creates an array with all falsey values removed. The values `false`, `null`,
   * `0`, `""`, `undefined`, and `NaN` are falsey.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to compact.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   */
  function compact(array) {
    var index = -1,
        length = array ? array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[++resIndex] = value;
      }
    }
    return result;
  }

  /**
   * Creates an array of unique `array` values not included in the other
   * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The arrays of values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.difference([1, 2, 3], [4, 2]);
   * // => [1, 3]
   */
  var difference = restParam(function(array, values) {
    return (isObjectLike(array) && isArrayLike(array))
      ? baseDifference(array, baseFlatten(values, false, true))
      : [];
  });

  /**
   * Gets the index at which the first occurrence of `value` is found in `array`
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons. If `fromIndex` is negative, it's used as the offset
   * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
   * performs a faster binary search.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {boolean|number} [fromIndex=0] The index to search from or `true`
   *  to perform a binary search on a sorted array.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.indexOf([1, 2, 1, 2], 2);
   * // => 1
   *
   * // using `fromIndex`
   * _.indexOf([1, 2, 1, 2], 2, 2);
   * // => 3
   *
   * // performing a binary search
   * _.indexOf([1, 1, 2, 2], 2, true);
   * // => 2
   */
  function indexOf(array, value, fromIndex) {
    var length = array ? array.length : 0;
    if (!length) {
      return -1;
    }
    if (typeof fromIndex == 'number') {
      fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
    } else if (fromIndex) {
      var index = binaryIndex(array, value);
      if (index < length &&
          (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
        return index;
      }
      return -1;
    }
    return baseIndexOf(array, value, fromIndex || 0);
  }

  /*------------------------------------------------------------------------*/

  /**
   * Checks if `target` is in `collection` using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons. If `fromIndex` is negative, it's used as the offset
   * from the end of `collection`.
   *
   * @static
   * @memberOf _
   * @alias contains, include
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {*} target The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
   * @returns {boolean} Returns `true` if a matching element is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
   * // => true
   *
   * _.includes('pebbles', 'eb');
   * // => true
   */
  function includes(collection, target, fromIndex, guard) {
    var length = collection ? getLength(collection) : 0;
    if (!isLength(length)) {
      collection = values(collection);
      length = collection.length;
    }
    if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
      fromIndex = 0;
    } else {
      fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
    }
    return (typeof collection == 'string' || !isArray(collection) && isString(collection))
      ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
      : (!!length && getIndexOf(collection, target, fromIndex) > -1);
  }

  /*------------------------------------------------------------------------*/

  /**
   * Creates a function that invokes `func` with the `this` binding of the
   * created function and arguments from `start` and beyond provided as an array.
   *
   * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var say = _.restParam(function(what, names) {
   *   return what + ' ' + _.initial(names).join(', ') +
   *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
   * });
   *
   * say('hello', 'fred', 'barney', 'pebbles');
   * // => 'hello fred, barney, & pebbles'
   */
  function restParam(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          rest = Array(length);

      while (++index < length) {
        rest[index] = args[start + index];
      }
      switch (start) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, args[0], rest);
        case 2: return func.call(this, args[0], args[1], rest);
      }
      var otherArgs = Array(start + 1);
      index = -1;
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = rest;
      return func.apply(this, otherArgs);
    };
  }

  /*------------------------------------------------------------------------*/

  /**
   * Creates a deep clone of `value`. If `customizer` is provided it's invoked
   * to produce the cloned values. If `customizer` returns `undefined` cloning
   * is handled by the method instead. The `customizer` is bound to `thisArg`
   * and invoked with up to three argument; (value [, index|key, object]).
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
   * The enumerable properties of `arguments` objects and objects created by
   * constructors other than `Object` are cloned to plain `Object` objects. An
   * empty object is returned for uncloneable values such as functions, DOM nodes,
   * Maps, Sets, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to deep clone.
   * @param {Function} [customizer] The function to customize cloning values.
   * @param {*} [thisArg] The `this` binding of `customizer`.
   * @returns {*} Returns the deep cloned value.
   * @example
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * var deep = _.cloneDeep(users);
   * deep[0] === users[0];
   * // => false
   *
   * // using a customizer callback
   * var el = _.cloneDeep(document.body, function(value) {
   *   if (_.isElement(value)) {
   *     return value.cloneNode(true);
   *   }
   * });
   *
   * el === document.body
   * // => false
   * el.nodeName
   * // => BODY
   * el.childNodes.length;
   * // => 20
   */
  function cloneDeep(value, customizer, thisArg) {
    return typeof customizer == 'function'
      ? baseClone(value, true, bindCallback(customizer, thisArg, 3))
      : baseClone(value, true);
  }

  /**
   * Checks if `value` is classified as an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    return isObjectLike(value) && isArrayLike(value) &&
      hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(function() { return arguments; }());
   * // => false
   */
  var isArray = nativeIsArray || function(value) {
    return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
  };

  /**
   * Checks if `value` is a DOM element.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   *
   * _.isElement('<body>');
   * // => false
   */
  function isElement(value) {
    return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
  }

  /**
   * Checks if `value` is empty. A value is considered empty unless it's an
   * `arguments` object, array, string, or jQuery-like collection with a length
   * greater than `0` or an object with own enumerable properties.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {Array|Object|string} value The value to inspect.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
        (isObjectLike(value) && isFunction(value.splice)))) {
      return !value.length;
    }
    return !keys(value).length;
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in older versions of Chrome and Safari which return 'function' for regexes
    // and Safari 8 which returns 'object' for typed array constructors.
    return isObject(value) && objToString.call(value) == funcTag;
  }

  /**
   * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(1);
   * // => false
   */
  function isObject(value) {
    // Avoid a V8 JIT bug in Chrome 19-20.
    // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is a native function.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
   * @example
   *
   * _.isNative(Array.prototype.push);
   * // => true
   *
   * _.isNative(_);
   * // => false
   */
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
  }

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * **Note:** This method assumes objects created by the `Object` constructor
   * have no inherited enumerable properties.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    var Ctor;

    // Exit early for non `Object` objects.
    if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) ||
        (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
      return false;
    }
    // IE < 9 iterates inherited properties before own properties. If the first
    // iterated property is an object's own property then there are no inherited
    // enumerable properties.
    var result;
    if (lodash.support.ownLast) {
      baseForIn(value, function(subValue, key, object) {
        result = hasOwnProperty.call(object, key);
        return false;
      });
      return result !== false;
    }
    // In most environments an object's own properties are iterated before
    // its inherited properties. If the last iterated property is an object's
    // own property then there are no inherited enumerable properties.
    baseForIn(value, function(subValue, key) {
      result = key;
    });
    return result === undefined || hasOwnProperty.call(value, result);
  }

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
  }

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  function isTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
  }

  /**
   * Converts `value` to a plain object flattening inherited enumerable
   * properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return baseCopy(value, keysIn(value));
  }

  /*------------------------------------------------------------------------*/

  /**
   * Recursively merges own enumerable properties of the source object(s), that
   * don't resolve to `undefined` into the destination object. Subsequent sources
   * overwrite property assignments of previous sources. If `customizer` is
   * provided it's invoked to produce the merged values of the destination and
   * source properties. If `customizer` returns `undefined` merging is handled
   * by the method instead. The `customizer` is bound to `thisArg` and invoked
   * with five arguments: (objectValue, sourceValue, key, object, source).
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {*} [thisArg] The `this` binding of `customizer`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var users = {
   *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
   * };
   *
   * var ages = {
   *   'data': [{ 'age': 36 }, { 'age': 40 }]
   * };
   *
   * _.merge(users, ages);
   * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
   *
   * // using a customizer callback
   * var object = {
   *   'fruits': ['apple'],
   *   'vegetables': ['beet']
   * };
   *
   * var other = {
   *   'fruits': ['banana'],
   *   'vegetables': ['carrot']
   * };
   *
   * _.merge(object, other, function(a, b) {
   *   if (_.isArray(a)) {
   *     return a.concat(b);
   *   }
   * });
   * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
   */
  var merge = createAssigner(baseMerge);

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object. Subsequent sources overwrite property assignments of previous sources.
   * If `customizer` is provided it's invoked to produce the assigned values.
   * The `customizer` is bound to `thisArg` and invoked with five arguments:
   * (objectValue, sourceValue, key, object, source).
   *
   * **Note:** This method mutates `object` and is based on
   * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
   *
   * @static
   * @memberOf _
   * @alias extend
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {*} [thisArg] The `this` binding of `customizer`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
   * // => { 'user': 'fred', 'age': 40 }
   *
   * // using a customizer callback
   * var defaults = _.partialRight(_.assign, function(value, other) {
   *   return _.isUndefined(value) ? other : value;
   * });
   *
   * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
   * // => { 'user': 'barney', 'age': 36 }
   */
  var assign = createAssigner(function(object, source, customizer) {
    return customizer
      ? assignWith(object, source, customizer)
      : baseAssign(object, source);
  });

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object for all destination properties that resolve to `undefined`. Once a
   * property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
   * // => { 'user': 'barney', 'age': 36 }
   */
  var defaults = createDefaults(assign, assignDefaults);

  /**
   * Creates an array of function property names from all enumerable properties,
   * own and inherited, of `object`.
   *
   * @static
   * @memberOf _
   * @alias methods
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the new array of property names.
   * @example
   *
   * _.functions(_);
   * // => ['after', 'ary', 'assign', ...]
   */
  function functions(object) {
    return baseFunctions(object, keysIn(object));
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  var keys = !nativeKeys ? shimKeys : function(object) {
    var Ctor = object == null ? undefined : object.constructor;
    if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
        (typeof object == 'function' ? lodash.support.enumPrototypes : isArrayLike(object))) {
      return shimKeys(object);
    }
    return isObject(object) ? nativeKeys(object) : [];
  };

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length,
        support = lodash.support;

    length = (length && isLength(length) &&
      (isArray(object) || isArguments(object) || isString(object)) && length) || 0;

    var Ctor = object.constructor,
        index = -1,
        proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
        isProto = proto === object,
        result = Array(length),
        skipIndexes = length > 0,
        skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
        skipProto = support.enumPrototypes && isFunction(object);

    while (++index < length) {
      result[index] = (index + '');
    }
    // lodash skips the `constructor` property when it infers it's iterating
    // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
    // attribute of an existing property and the `constructor` property of a
    // prototype defaults to non-enumerable.
    for (var key in object) {
      if (!(skipProto && key == 'prototype') &&
          !(skipErrorProps && (key == 'message' || key == 'name')) &&
          !(skipIndexes && isIndex(key, length)) &&
          !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    if (support.nonEnumShadows && object !== objectProto) {
      var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
          nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];

      if (tag == objectTag) {
        proto = objectProto;
      }
      length = shadowProps.length;
      while (length--) {
        key = shadowProps[length];
        var nonEnum = nonEnums[key];
        if (!(isProto && nonEnum) &&
            (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
          result.push(key);
        }
      }
    }
    return result;
  }

  /**
   * Creates an array of the own enumerable property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  function values(object) {
    return baseValues(object, keys(object));
  }

  /*------------------------------------------------------------------------*/

  /**
   * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the camel cased string.
   * @example
   *
   * _.camelCase('Foo Bar');
   * // => 'fooBar'
   *
   * _.camelCase('--foo-bar');
   * // => 'fooBar'
   *
   * _.camelCase('__foo_bar__');
   * // => 'fooBar'
   */
  var camelCase = createCompounder(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
  });

  /**
   * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
   * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to deburr.
   * @returns {string} Returns the deburred string.
   * @example
   *
   * _.deburr('déjà vu');
   * // => 'deja vu'
   */
  function deburr(string) {
    string = baseToString(string);
    return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
  }

  /**
   * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the snake cased string.
   * @example
   *
   * _.snakeCase('Foo Bar');
   * // => 'foo_bar'
   *
   * _.snakeCase('fooBar');
   * // => 'foo_bar'
   *
   * _.snakeCase('--foo-bar');
   * // => 'foo_bar'
   */
  var snakeCase = createCompounder(function(result, word, index) {
    return result + (index ? '_' : '') + word.toLowerCase();
  });

  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    var value = string;
    string = baseToString(string);
    if (!string) {
      return string;
    }
    if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
      return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
    }
    chars = (chars + '');
    return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
  }

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */
  function words(string, pattern, guard) {
    if (guard && isIterateeCall(string, pattern, guard)) {
      pattern = undefined;
    }
    string = baseToString(string);
    return string.match(pattern || reWords) || [];
  }

  /*------------------------------------------------------------------------*/

  /**
   * This method returns the first argument provided to it.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'user': 'fred' };
   *
   * _.identity(object) === object;
   * // => true
   */
  function identity(value) {
    return value;
  }

  /*------------------------------------------------------------------------*/

  // Add functions to the `Set` cache.
  SetCache.prototype.push = cachePush;

  // Add functions that return wrapped values when chaining.
  lodash.assign = assign;
  lodash.compact = compact;
  lodash.defaults = defaults;
  lodash.difference = difference;
  lodash.functions = functions;
  lodash.keys = keys;
  lodash.keysIn = keysIn;
  lodash.merge = merge;
  lodash.restParam = restParam;
  lodash.toPlainObject = toPlainObject;
  lodash.values = values;

  // Add aliases.
  lodash.extend = assign;
  lodash.methods = functions;

  /*------------------------------------------------------------------------*/

  // Add functions that return unwrapped values when chaining.
  lodash.camelCase = camelCase;
  lodash.cloneDeep = cloneDeep;
  lodash.deburr = deburr;
  lodash.identity = identity;
  lodash.includes = includes;
  lodash.indexOf = indexOf;
  lodash.isArguments = isArguments;
  lodash.isArray = isArray;
  lodash.isElement = isElement;
  lodash.isEmpty = isEmpty;
  lodash.isFunction = isFunction;
  lodash.isNative = isNative;
  lodash.isObject = isObject;
  lodash.isPlainObject = isPlainObject;
  lodash.isString = isString;
  lodash.isTypedArray = isTypedArray;
  lodash.snakeCase = snakeCase;
  lodash.trim = trim;
  lodash.words = words;

  // Add aliases.
  lodash.contains = includes;
  lodash.include = includes;

  /*------------------------------------------------------------------------*/

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type string
   */
  lodash.VERSION = VERSION;

  /*--------------------------------------------------------------------------*/

  // Some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose lodash to the global object when an AMD loader is present to avoid
    // errors in cases where lodash is loaded by a script tag and not intended
    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
    // more details.
    root._ = lodash;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define('lodash',[],function() {
      return lodash;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for Node.js or RingoJS.
    if (moduleExports) {
      (freeModule.exports = lodash)._ = lodash;
    }
    // Export for Rhino with CommonJS support.
    else {
      freeExports._ = lodash;
    }
  }
  else {
    // Export for a browser or Rhino.
    root._ = lodash;
  }
}.call(this));

(function() {
  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('util', ['lodash'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('lodash'));
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary.Util = factory(_);
    }
  })(this, function(_) {

    /**
      * Includes utility methods and lodash / jQuery shims
     */

    /**
      * Get data from the DOM element.
      *
      * This method will use jQuery's `data()` method if it is available, otherwise it will get the `data-` attribute
      * @param {Element} element - the element to get the data from
      * @param {string} name - the name of the data item
      * @returns the value associated with the `name`
      *
     */
    var Util, addClass, allStrings, augmentWidthOrHeight, contains, cssExpand, cssValue, curCSS, domStyle, getAttribute, getData, getStyles, getWidthOrHeight, hasClass, pnum, rnumnonpx, setAttribute, setAttributes, setData, width, without;
    getData = function(element, name) {
      if (_.isElement(element)) {
        return element.getAttribute("data-" + name);
      }
    };

    /**
      * Set data in the DOM element.
      *
      * This method will use jQuery's `data()` method if it is available, otherwise it will set the `data-` attribute
      * @param {Element} element - the element to set the data in
      * @param {string} name - the name of the data item
      * @param {*} value - the value to be set
      *
     */
    setData = function(element, name, value) {
      if (_.isElement(element)) {
        return element.setAttribute("data-" + name, value);
      }
    };

    /**
      * Get attribute from the DOM element.
      *
      * This method will use jQuery's `attr()` method if it is available, otherwise it will get the attribute directly
      * @param {Element} element - the element to set the attribute for
      * @param {string} name - the name of the attribute
      * @returns {*} the value of the attribute
      *
     */
    getAttribute = function(element, name) {
      if (_.isElement(element)) {
        return element.getAttribute(name);
      }
    };

    /**
      * Set attribute in the DOM element.
      *
      * This method will use jQuery's `attr()` method if it is available, otherwise it will set the attribute directly
      * @param {Element} element - the element to set the attribute for
      * @param {string} name - the name of the attribute
      * @param {*} value - the value to be set
      *
     */
    setAttribute = function(element, name, value) {
      if (_.isElement(element)) {
        return element.setAttribute(name, value);
      }
    };
    setAttributes = function(element, attributes) {
      var name, results, value;
      results = [];
      for (name in attributes) {
        value = attributes[name];
        if (value != null) {
          results.push(setAttribute(element, name, value));
        } else {
          results.push(element.removeAttribute(name));
        }
      }
      return results;
    };
    hasClass = function(element, name) {
      if (_.isElement(element)) {
        return element.className.match(new RegExp("\\b" + name + "\\b"));
      }
    };
    addClass = function(element, name) {
      if (!element.className.match(new RegExp("\\b" + name + "\\b"))) {
        return element.className = _.trim(element.className + " " + name);
      }
    };
    getStyles = function(elem) {
      if (elem.ownerDocument.defaultView.opener) {
        return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
      }
      return window.getComputedStyle(elem, null);
    };
    cssExpand = ["Top", "Right", "Bottom", "Left"];
    contains = function(a, b) {
      var adown, bup;
      adown = (a.nodeType === 9 ? a.documentElement : a);
      bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && adown.contains(bup));
    };
    domStyle = function(elem, name) {
      if (!(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style)) {
        return elem.style[name];
      }
    };
    curCSS = function(elem, name, computed) {
      var maxWidth, minWidth, ret, style, width;
      width = void 0;
      minWidth = void 0;
      maxWidth = void 0;
      ret = void 0;
      style = elem.style;
      computed = computed || getStyles(elem);
      if (computed) {
        ret = computed.getPropertyValue(name) || computed[name];
      }
      if (computed) {
        if (ret === "" && !contains(elem.ownerDocument, elem)) {
          ret = domStyle(elem, name);
        }
        if (rnumnonpx.test(ret) && rmargin.test(name)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      if (ret !== undefined) {
        return ret + "";
      } else {
        return ret;
      }
    };
    cssValue = function(elem, name, convert, styles) {
      var val;
      val = curCSS(elem, name, styles);
      if (convert) {
        return parseFloat(val);
      } else {
        return val;
      }
    };
    augmentWidthOrHeight = function(elem, name, extra, isBorderBox, styles) {
      var j, len, side, sides, val;
      if (extra === (isBorderBox ? "border" : "content")) {
        return 0;
      } else {
        sides = name === "width" ? ["Right", "Left"] : ["Top", "Bottom"];
        val = 0;
        for (j = 0, len = sides.length; j < len; j++) {
          side = sides[j];
          if (extra === "margin") {
            val += cssValue(elem, extra + side, true, styles);
          }
          if (isBorderBox) {
            if (extra === "content") {
              val -= cssValue(elem, "padding" + side, true, styles);
            }
            if (extra !== "margin") {
              val -= cssValue(elem, "border" + side + "Width", true, styles);
            }
          } else {
            val += cssValue(elem, "padding" + side, true, styles);
            if (extra !== "padding") {
              val += cssValue(elem, "border" + side + "Width", true, styles);
            }
          }
        }
        return val;
      }
    };
    pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    getWidthOrHeight = function(elem, name, extra) {
      var isBorderBox, styles, val, valueIsBorderBox;
      valueIsBorderBox = true;
      val = (name === "width" ? elem.offsetWidth : elem.offsetHeight);
      styles = getStyles(elem);
      isBorderBox = cssValue(elem, "boxSizing", false, styles) === "border-box";
      if (val <= 0 || (val == null)) {
        val = curCSS(elem, name, styles);
        if (val < 0 || (val == null)) {
          val = elem.style[name];
        }
        if (rnumnonpx.test(val)) {
          return val;
        }
        valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
        val = parseFloat(val) || 0;
      }
      return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles);
    };
    width = function(element) {
      return getWidthOrHeight(element, "width", "content");
    };
    allStrings = function(list) {
      var item, j, len;
      for (j = 0, len = list.length; j < len; j++) {
        item = list[j];
        if (!Util.isString(item)) {
          return false;
        }
      }
      return true;
    };
    without = function(array, item) {
      var i, length, newArray;
      newArray = [];
      i = -1;
      length = array.length;
      while (++i < length) {
        if (array[i] !== item) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    };
    Util = {
      hasClass: hasClass,
      addClass: addClass,

      /**
        * Get attribute from the DOM element.
        *
        * This method will use jQuery's `attr()` method if it is available, otherwise it will get the attribute directly
        * @param {Element} element - the element to set the attribute for
        * @param {string} name - the name of the attribute
        * @returns {*} the value of the attribute
        *
       */
      getAttribute: getAttribute,
      setAttribute: setAttribute,
      setAttributes: setAttributes,
      getData: getData,
      setData: setData,
      width: width,

      /**
       * Return true if all items in list are strings
       * @param {Array} list - an array of items
       */
      allStrings: allStrings,
      isString: _.isString,
      isArray: _.isArray,
      isEmpty: _.isEmpty,

      /**
       * Assign source properties to destination.
       * If the property is an object it is assigned as a whole, overriding the destination object.
       * @param {Object} destination - the object to assign to
       */
      assign: _.assign,

      /**
      * Recursively assign source properties to destination
      * @param {Object} destination - the object to assign to
       */
      merge: _.merge,

      /**
       * Convert string to camelCase
       * @param {string} string - the string to convert
       * @return {string} in camelCase format
       */
      camelCase: _.camelCase,

      /**
       * Convert string to snake_case
       * @param {string} string - the string to convert
       * @return {string} in snake_case format
       */
      snakeCase: _.snakeCase,

      /**
       * Create a new copy of the given object, including all internal objects.
       * @param {Object} value - the object to clone
       * @return {Object} a new deep copy of the object
       */
      cloneDeep: _.cloneDeep,

      /**
       * Creates a new array from the parameter with "falsey" values removed
       * @param {Array} array - the array to remove values from
       * @return {Array} a new array without falsey values
       */
      compact: _.compact,

      /**
       * Check if a given item is included in the given array
       * @param {Array} array - the array to search in
       * @param {*} item - the item to search for
       * @return {boolean} true if the item is included in the array
       */
      contains: _.contains,

      /**
      * Assign values from sources if they are not defined in the destination.
      * Once a value is set it does not change
      * @param {Object} destination - the object to assign defaults to
      * @param {...Object} source - the source object(s) to assign defaults from
      * @return {Object} destination after it was modified
       */
      defaults: _.defaults,

      /**
       * Returns values in the given array that are not included in the other array
       * @param {Array} arr - the array to select from
       * @param {Array} values - values to filter from arr
       * @return {Array} the filtered values
       */
      difference: _.difference,

      /**
      * Returns true if argument is a function.
      * @param {*} value - the value to check
      * @return {boolean} true if the value is a function
       */
      isFunction: _.isFunction,

      /**
       * Returns a list of all the function names in obj
       * @param {Object} object - the object to inspect
       * @return {Array} a list of functions of object
       */
      functions: _.functions,

      /**
       * Returns the provided value. This functions is used as a default predicate function.
       * @param {*} value
       * @return {*} the provided value
       */
      identity: _.identity,
      isPlainObject: _.isPlainObject,

      /**
       * Remove leading or trailing spaces from text
       * @param {string} text
       * @return {string} the `text` without leading or trailing spaces
       */
      trim: _.trim,

      /**
       * Creates a new array without the given item.
       * @param {Array} array - original array
       * @param {*} item - the item to exclude from the new array
       * @return {Array} a new array made of the original array's items except for `item`
       */
      without: without
    };
    return Util;
  });

}).call(this);

(function() {
  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('configuration',['util'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('util'));
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary.Configuration = factory(root.cloudinary.Util);
    }
  })(this, function(Util) {

    /**
     * Cloudinary configuration class
     */
    var Configuration;
    Configuration = (function() {

      /**
      * Defaults configuration.
      * @const {Object} Configuration.DEFAULT_CONFIGURATION_PARAMS
       */
      var DEFAULT_CONFIGURATION_PARAMS, ref;

      DEFAULT_CONFIGURATION_PARAMS = {
        secure: (typeof window !== "undefined" && window !== null ? (ref = window.location) != null ? ref.protocol : void 0 : void 0) === 'https:'
      };

      Configuration.CONFIG_PARAMS = ["api_key", "api_secret", "cdn_subdomain", "cloud_name", "cname", "private_cdn", "protocol", "resource_type", "responsive_width", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "type", "url_suffix", "use_root_path", "version"];


      /**
       * Cloudinary configuration class
       * @constructor Configuration
       * @param {Object} options - configuration parameters
       */

      function Configuration(options) {
        if (options == null) {
          options = {};
        }
        this.configuration = Util.cloneDeep(options);
        Util.defaults(this.configuration, DEFAULT_CONFIGURATION_PARAMS);
      }


      /**
       * Initialize the configuration.
       * The function first tries to retrieve the configuration form the environment and then from the document.
       * @function Configuration#init
       * @return {Configuration} returns this for chaining
       * @see fromDocument
       * @see fromEnvironment
       */

      Configuration.prototype.init = function() {
        this.fromEnvironment();
        this.fromDocument();
        return this;
      };


      /**
       * Set a new configuration item
       * @function Configuration#set
       * @param {string} name - the name of the item to set
       * @param {*} value - the value to be set
       * @return {Configuration}
       *
       */

      Configuration.prototype.set = function(name, value) {
        this.configuration[name] = value;
        return this;
      };


      /**
       * Get the value of a configuration item
       * @function Configuration#get
       * @param {string} name - the name of the item to set
       * @return {*} the configuration item
       */

      Configuration.prototype.get = function(name) {
        return this.configuration[name];
      };

      Configuration.prototype.merge = function(config) {
        if (config == null) {
          config = {};
        }
        Util.assign(this.configuration, Util.cloneDeep(config));
        return this;
      };


      /**
       * Initialize Cloudinary from HTML meta tags.
       * @function Configuration#fromDocument
       * @return {Configuration}
       * @example <meta name="cloudinary_cloud_name" content="mycloud">
       *
       */

      Configuration.prototype.fromDocument = function() {
        var el, i, len, meta_elements;
        meta_elements = typeof document !== "undefined" && document !== null ? document.querySelectorAll('meta[name^="cloudinary_"]') : void 0;
        if (meta_elements) {
          for (i = 0, len = meta_elements.length; i < len; i++) {
            el = meta_elements[i];
            this.configuration[el.getAttribute('name').replace('cloudinary_', '')] = el.getAttribute('content');
          }
        }
        return this;
      };


      /**
       * Initialize Cloudinary from the `CLOUDINARY_URL` environment variable.
       *
       * This function will only run under Node.js environment.
       * @function Configuration#fromEnvironment
       * @requires Node.js
       */

      Configuration.prototype.fromEnvironment = function() {
        var cloudinary_url, k, ref1, ref2, uri, v;
        cloudinary_url = typeof process !== "undefined" && process !== null ? (ref1 = process.env) != null ? ref1.CLOUDINARY_URL : void 0 : void 0;
        if (cloudinary_url != null) {
          uri = require('url').parse(cloudinary_url, true);
          this.configuration = {
            cloud_name: uri.host,
            api_key: uri.auth && uri.auth.split(":")[0],
            api_secret: uri.auth && uri.auth.split(":")[1],
            private_cdn: uri.pathname != null,
            secure_distribution: uri.pathname && uri.pathname.substring(1)
          };
          if (uri.query != null) {
            ref2 = uri.query;
            for (k in ref2) {
              v = ref2[k];
              this.configuration[k] = v;
            }
          }
        }
        return this;
      };


      /**
      * Create or modify the Cloudinary client configuration
      *
      * Warning: `config()` returns the actual internal configuration object. modifying it will change the configuration.
      *
      * This is a backward compatibility method. For new code, use get(), merge() etc.
      * @function Configuration#config
      * @param {hash|string|boolean} new_config
      * @param {string} new_value
      * @returns {*} configuration, or value
      *
      * @see {@link fromEnvironment} for initialization using environment variables
      * @see {@link fromDocument} for initialization using HTML meta tags
       */

      Configuration.prototype.config = function(new_config, new_value) {
        switch (false) {
          case new_value === void 0:
            this.set(new_config, new_value);
            return this.configuration;
          case !Util.isString(new_config):
            return this.get(new_config);
          case !Util.isPlainObject(new_config):
            this.merge(new_config);
            return this.configuration;
          default:
            return this.configuration;
        }
      };


      /**
       * Returns a copy of the configuration parameters
       * @function Configuration#toOptions
       * @returns {Object} a key:value collection of the configuration parameters
       */

      Configuration.prototype.toOptions = function() {
        return Util.cloneDeep(this.configuration);
      };

      return Configuration;

    })();
    return Configuration;
  });

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('parameters',['util', 'transformation', 'require'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('util'), require('transformation'), require);
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary.parameters = factory(root.cloudinary.Util, root.cloudinary.Transformation, function() {
        return cloudinary.Transformation;
      });
    }
  })(this, function(Util, Transformation, require) {
    var ArrayParam, Param, RangeParam, RawParam, TransformationParam, parameters;
    Param = (function() {

      /**
       * Represents a single parameter
       * @class Param
       * @param {string} name - The name of the parameter in snake_case
       * @param {string} short - The name of the serialized form of the parameter.
       *                         If a value is not provided, the parameter will not be serialized.
       * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
       * @ignore
       */
      function Param(name, short, process) {
        if (process == null) {
          process = Util.identity;
        }

        /**
         * The name of the parameter in snake_case
         * @member {string} Param#name
         */
        this.name = name;

        /**
         * The name of the serialized form of the parameter
         * @member {string} Param#short
         */
        this.short = short;

        /**
         * Manipulate origValue when value is called
         * @member {function} Param#process
         */
        this.process = process;
      }


      /**
       * Set a (unprocessed) value for this parameter
       * @function Param#set
       * @param {*} origValue - the value of the parameter
       * @return {Param} self for chaining
       */

      Param.prototype.set = function(origValue) {
        this.origValue = origValue;
        return this;
      };


      /**
       * Generate the serialized form of the parameter
       * @function Param#serialize
       * @return {string} the serialized form of the parameter
       */

      Param.prototype.serialize = function() {
        var val, valid;
        val = this.value();
        valid = Util.isArray(val) || Util.isPlainObject(val) || Util.isString(val) ? !Util.isEmpty(val) : val != null;
        if ((this.short != null) && valid) {
          return this.short + "_" + val;
        } else {
          return '';
        }
      };


      /**
       * Return the processed value of the parameter
       * @function Param#value
       */

      Param.prototype.value = function() {
        return this.process(this.origValue);
      };

      Param.norm_color = function(value) {
        return value != null ? value.replace(/^#/, 'rgb:') : void 0;
      };

      Param.prototype.build_array = function(arg) {
        if (arg == null) {
          arg = [];
        }
        if (Util.isArray(arg)) {
          return arg;
        } else {
          return [arg];
        }
      };


      /**
      * Covert value to video codec string.
      *
      * If the parameter is an object,
      * @param {(string|Object)} param - the video codec as either a String or a Hash
      * @return {string} the video codec string in the format codec:profile:level
      * @example
      * vc_[ :profile : [level]]
      * or
        { codec: 'h264', profile: 'basic', level: '3.1' }
      * @ignore
       */

      Param.process_video_params = function(param) {
        var video;
        switch (param.constructor) {
          case Object:
            video = "";
            if ('codec' in param) {
              video = param['codec'];
              if ('profile' in param) {
                video += ":" + param['profile'];
                if ('level' in param) {
                  video += ":" + param['level'];
                }
              }
            }
            return video;
          case String:
            return param;
          default:
            return null;
        }
      };

      return Param;

    })();
    ArrayParam = (function(superClass) {
      extend(ArrayParam, superClass);


      /**
       * A parameter that represents an array
       * @param {string} name - The name of the parameter in snake_case
       * @param {string} short - The name of the serialized form of the parameter
       *                         If a value is not provided, the parameter will not be serialized.
       * @param {string} [sep='.'] - The separator to use when joining the array elements together
       * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
       * @class ArrayParam
       * @extends Param
       * @ignore
       */

      function ArrayParam(name, short, sep, process) {
        if (sep == null) {
          sep = '.';
        }
        this.sep = sep;
        ArrayParam.__super__.constructor.call(this, name, short, process);
      }

      ArrayParam.prototype.serialize = function() {
        var array, flat, t;
        if (this.short != null) {
          array = this.value();
          if (Util.isEmpty(array)) {
            return '';
          } else {
            flat = (function() {
              var i, len, ref, results;
              ref = this.value();
              results = [];
              for (i = 0, len = ref.length; i < len; i++) {
                t = ref[i];
                if (Util.isFunction(t.serialize)) {
                  results.push(t.serialize());
                } else {
                  results.push(t);
                }
              }
              return results;
            }).call(this);
            return this.short + "_" + (flat.join(this.sep));
          }
        } else {
          return '';
        }
      };

      ArrayParam.prototype.set = function(origValue) {
        if ((origValue == null) || Util.isArray(origValue)) {
          return ArrayParam.__super__.set.call(this, origValue);
        } else {
          return ArrayParam.__super__.set.call(this, [origValue]);
        }
      };

      return ArrayParam;

    })(Param);
    TransformationParam = (function(superClass) {
      extend(TransformationParam, superClass);


      /**
       * A parameter that represents a transformation
       * @param {string} name - The name of the parameter in snake_case
       * @param {string} [short='t'] - The name of the serialized form of the parameter
       * @param {string} [sep='.'] - The separator to use when joining the array elements together
       * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
       * @class TransformationParam
       * @extends Param
       * @ignore
       */

      function TransformationParam(name, short, sep, process) {
        if (short == null) {
          short = "t";
        }
        if (sep == null) {
          sep = '.';
        }
        this.sep = sep;
        TransformationParam.__super__.constructor.call(this, name, short, process);
      }

      TransformationParam.prototype.serialize = function() {
        var joined, result, t;
        if (Util.isEmpty(this.value())) {
          return '';
        } else if (Util.allStrings(this.value())) {
          joined = this.value().join(this.sep);
          if (!Util.isEmpty(joined)) {
            return this.short + "_" + joined;
          } else {
            return '';
          }
        } else {
          result = (function() {
            var i, len, ref, results;
            ref = this.value();
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              t = ref[i];
              if (t != null) {
                if (Util.isString(t) && !Util.isEmpty(t)) {
                  results.push(this.short + "_" + t);
                } else if (Util.isFunction(t.serialize)) {
                  results.push(t.serialize());
                } else if (Util.isPlainObject(t) && !Util.isEmpty(t)) {
                  Transformation || (Transformation = require('transformation'));
                  results.push(new Transformation(t).serialize());
                } else {
                  results.push(void 0);
                }
              }
            }
            return results;
          }).call(this);
          return Util.compact(result);
        }
      };

      TransformationParam.prototype.set = function(origValue1) {
        this.origValue = origValue1;
        if (Util.isArray(this.origValue)) {
          return TransformationParam.__super__.set.call(this, this.origValue);
        } else {
          return TransformationParam.__super__.set.call(this, [this.origValue]);
        }
      };

      return TransformationParam;

    })(Param);
    RangeParam = (function(superClass) {
      extend(RangeParam, superClass);


      /**
       * A parameter that represents a range
       * @param {string} name - The name of the parameter in snake_case
       * @param {string} short - The name of the serialized form of the parameter
       *                         If a value is not provided, the parameter will not be serialized.
       * @param {function} [process=norm_range_value ] - Manipulate origValue when value is called
       * @class RangeParam
       * @extends Param
       * @ignore
       */

      function RangeParam(name, short, process) {
        if (process == null) {
          process = this.norm_range_value;
        }
        RangeParam.__super__.constructor.call(this, name, short, process);
      }

      RangeParam.norm_range_value = function(value) {
        var modifier, offset;
        offset = String(value).match(new RegExp('^' + offset_any_pattern + '$'));
        if (offset) {
          modifier = offset[5] != null ? 'p' : '';
          value = (offset[1] || offset[4]) + modifier;
        }
        return value;
      };

      return RangeParam;

    })(Param);
    RawParam = (function(superClass) {
      extend(RawParam, superClass);

      function RawParam(name, short, process) {
        if (process == null) {
          process = Util.identity;
        }
        RawParam.__super__.constructor.call(this, name, short, process);
      }

      RawParam.prototype.serialize = function() {
        return this.value();
      };

      return RawParam;

    })(Param);
    parameters = {};
    parameters.Param = Param;
    parameters.ArrayParam = ArrayParam;
    parameters.RangeParam = RangeParam;
    parameters.RawParam = RawParam;
    parameters.TransformationParam = TransformationParam;
    return parameters;
  });

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('transformation',['configuration', 'parameters', 'util'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('configuration'), require('parameters'), require('util'));
    } else {
      return root.cloudinary.Transformation = factory(root.cloudinary.Configuration, root.cloudinary.parameters, root.cloudinary.Util);
    }
  })(this, function(Configuration, parameters, Util) {
    var ArrayParam, Param, RangeParam, RawParam, Transformation, TransformationBase, TransformationParam;
    Param = parameters.Param;
    ArrayParam = parameters.ArrayParam;
    RangeParam = parameters.RangeParam;
    RawParam = parameters.RawParam;
    TransformationParam = parameters.TransformationParam;
    TransformationBase = (function() {
      var lastArgCallback;

      lastArgCallback = function(args) {
        var callback;
        callback = args != null ? args[args.length - 1] : void 0;
        if (Util.isFunction(callback)) {
          return callback;
        } else {
          return void 0;
        }
      };


      /**
       * The base class for transformations.
       * Members of this class are documented as belonging to the {@link Transformation} class for convenience.
       * @class TransformationBase
       */

      function TransformationBase(options) {
        var chainedTo, m, trans;
        if (options == null) {
          options = {};
        }

        /** @private */
        chainedTo = void 0;

        /** @private */
        trans = {};

        /**
         * Return an options object that can be used to create an identical Transformation
         * @function Transformation#toOptions
         * @return {Object} Returns a plain object representing this transformation
         */
        this.toOptions = function() {
          var key, opt, ref, value;
          opt = {};
          for (key in trans) {
            value = trans[key];
            opt[key] = value.origValue;
          }
          ref = this.otherOptions;
          for (key in ref) {
            value = ref[key];
            if (value !== void 0) {
              opt[key] = value;
            }
          }
          return opt;
        };

        /**
         * Set a parent for this object for chaining purposes.
         *
         * @function Transformation#setParent
         * @param {Object} object - the parent to be assigned to
         * @returns {Transformation} Returns this instance for chaining purposes.
         */
        this.setParent = function(object) {
          chainedTo = object;
          this.fromOptions(typeof object.toOptions === "function" ? object.toOptions() : void 0);
          return this;
        };

        /**
         * Returns the parent of this object in the chain
         * @function Transformation#getParent
         * @protected
         * @return {Object} Returns the parent of this object if there is any
         */
        this.getParent = function() {
          return chainedTo;
        };

        /** @protected */
        this.param = function(value, name, abbr, defaultValue, process) {
          if (process == null) {
            if (Util.isFunction(defaultValue)) {
              process = defaultValue;
            } else {
              process = Util.identity;
            }
          }
          trans[name] = new Param(name, abbr, process).set(value);
          return this;
        };

        /** @protected */
        this.rawParam = function(value, name, abbr, defaultValue, process) {
          if (process == null) {
            process = Util.identity;
          }
          process = lastArgCallback(arguments);
          trans[name] = new RawParam(name, abbr, process).set(value);
          return this;
        };

        /** @protected */
        this.rangeParam = function(value, name, abbr, defaultValue, process) {
          if (process == null) {
            process = Util.identity;
          }
          process = lastArgCallback(arguments);
          trans[name] = new RangeParam(name, abbr, process).set(value);
          return this;
        };

        /** @protected */
        this.arrayParam = function(value, name, abbr, sep, defaultValue, process) {
          if (sep == null) {
            sep = ":";
          }
          if (defaultValue == null) {
            defaultValue = [];
          }
          if (process == null) {
            process = Util.identity;
          }
          process = lastArgCallback(arguments);
          trans[name] = new ArrayParam(name, abbr, sep, process).set(value);
          return this;
        };

        /** @protected */
        this.transformationParam = function(value, name, abbr, sep, defaultValue, process) {
          if (sep == null) {
            sep = ".";
          }
          if (process == null) {
            process = Util.identity;
          }
          process = lastArgCallback(arguments);
          trans[name] = new TransformationParam(name, abbr, sep, process).set(value);
          return this;
        };

        /**
         * Get the value associated with the given name.
         * @function Transformation#getValue
         * @param {string} name - the name of the parameter
         * @return {*} the processed value associated with the given name
         * @description Use {@link get}.origValue for the value originally provided for the parameter
         */
        this.getValue = function(name) {
          var ref, ref1;
          return (ref = (ref1 = trans[name]) != null ? ref1.value() : void 0) != null ? ref : this.otherOptions[name];
        };

        /**
         * Get the parameter object for the given parameter name
         * @function Transformation#get
         * @param {string} name the name of the transformation parameter
         * @returns {Param} the param object for the given name, or undefined
         */
        this.get = function(name) {
          return trans[name];
        };

        /**
         * Remove a transformation option from the transformation.
         * @function Transformation#remove
         * @param {string} name - the name of the option to remove
         * @return {*} Returns the option that was removed or null if no option by that name was found. The type of the
         *              returned value depends on the value.
         */
        this.remove = function(name) {
          var temp;
          switch (false) {
            case trans[name] == null:
              temp = trans[name];
              delete trans[name];
              return temp.origValue;
            case this.otherOptions[name] == null:
              temp = this.otherOptions[name];
              delete this.otherOptions[name];
              return temp;
            default:
              return null;
          }
        };

        /**
         * Return an array of all the keys (option names) in the transformation.
         * @return {Array<string>} the keys in snakeCase format
         */
        this.keys = function() {
          var key;
          return ((function() {
            var results;
            results = [];
            for (key in trans) {
              results.push(Util.snakeCase(key));
            }
            return results;
          })()).sort();
        };

        /**
         * Returns a plain object representation of the transformation. Values are processed.
         * @function Transformation#toPlainObject
         * @return {Object} the transformation options as plain object
         */
        this.toPlainObject = function() {
          var hash, key;
          hash = {};
          for (key in trans) {
            hash[key] = trans[key].value();
            if (Util.isPlainObject(hash[key])) {
              hash[key] = Util.cloneDeep(hash[key]);
            }
          }
          return hash;
        };

        /**
         * Complete the current transformation and chain to a new one.
         * In the URL, transformations are chained together by slashes.
         * @function Transformation#chain
         * @return {Transformation} Returns this transformation for chaining
         * @example
         * var tr = cloudinary.Transformation.new();
         * tr.width(10).crop('fit').chain().angle(15).serialize()
         * // produces "c_fit,w_10/a_15"
         */
        this.chain = function() {
          var tr;
          tr = new this.constructor(this.toOptions());
          trans = [];
          return this.set("transformation", tr);
        };
        this.otherOptions = {};

        /**
         * Transformation Class methods.
         * This is a list of the parameters defined in Transformation.
         * Values are camelCased.
         * @private
         * @ignore
         * @type {Array<string>}
         */
        this.methods = Util.difference(Util.functions(Transformation.prototype), Util.functions(TransformationBase.prototype));

        /**
         * Parameters that are filtered out before passing the options to an HTML tag.
         *
         * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
         * @const {Array<string>} Transformation.PARAM_NAMES
         * @private
         * @ignore
         * @see toHtmlAttributes
         */
        this.PARAM_NAMES = ((function() {
          var i, len, ref, results;
          ref = this.methods;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            m = ref[i];
            results.push(Util.snakeCase(m));
          }
          return results;
        }).call(this)).concat(Configuration.CONFIG_PARAMS);
        if (!Util.isEmpty(options)) {
          this.fromOptions(options);
        }
      }


      /**
       * Merge the provided options with own's options
       * @param {Object} [options={}] key-value list of options
       * @returns {Transformation} Returns this instance for chaining
       */

      TransformationBase.prototype.fromOptions = function(options) {
        var key, opt;
        options || (options = {});
        if (Util.isString(options) || Util.isArray(options) || options instanceof Transformation) {
          options = {
            transformation: options
          };
        }
        options = Util.cloneDeep(options, function(value) {
          if (value instanceof Transformation) {
            return new value.constructor(value.toOptions());
          }
        });
        for (key in options) {
          opt = options[key];
          this.set(key, opt);
        }
        return this;
      };


      /**
       * Set a parameter.
       * The parameter name `key` is converted to
       * @param {string} key - the name of the parameter
       * @param {*} value - the value of the parameter
       * @returns {Transformation} Returns this instance for chaining
       */

      TransformationBase.prototype.set = function(key, value) {
        var camelKey;
        camelKey = Util.camelCase(key);
        if (Util.contains(this.methods, camelKey)) {
          this[camelKey](value);
        } else {
          this.otherOptions[key] = value;
        }
        return this;
      };

      TransformationBase.prototype.hasLayer = function() {
        return this.getValue("overlay") || this.getValue("underlay");
      };


      /**
       * Generate a string representation of the transformation.
       * @function Transformation#serialize
       * @return {string} Returns the transformation as a string
       */

      TransformationBase.prototype.serialize = function() {
        var paramList, ref, resultArray, t, transformationList, transformationString, transformations, value;
        resultArray = [];
        paramList = this.keys();
        transformations = (ref = this.get("transformation")) != null ? ref.serialize() : void 0;
        paramList = Util.without(paramList, "transformation");
        transformationList = (function() {
          var i, len, ref1, results;
          results = [];
          for (i = 0, len = paramList.length; i < len; i++) {
            t = paramList[i];
            results.push((ref1 = this.get(t)) != null ? ref1.serialize() : void 0);
          }
          return results;
        }).call(this);
        switch (false) {
          case !Util.isString(transformations):
            transformationList.push(transformations);
            break;
          case !Util.isArray(transformations):
            resultArray = transformations;
        }
        transformationString = ((function() {
          var i, len, results;
          results = [];
          for (i = 0, len = transformationList.length; i < len; i++) {
            value = transformationList[i];
            if (Util.isArray(value) && !Util.isEmpty(value) || !Util.isArray(value) && value) {
              results.push(value);
            }
          }
          return results;
        })()).sort().join(',');
        if (!Util.isEmpty(transformationString)) {
          resultArray.push(transformationString);
        }
        return Util.compact(resultArray).join('/');
      };


      /**
       * Provide a list of all the valid transformation option names
       * @function Transformation#listNames
       * @private
       * @return {Array<string>} a array of all the valid option names
       */

      TransformationBase.prototype.listNames = function() {
        return this.methods;
      };


      /**
       * Returns attributes for an HTML tag.
       * @function Cloudinary.toHtmlAttributes
       * @return PlainObject
       */

      TransformationBase.prototype.toHtmlAttributes = function() {
        var height, i, j, k, key, len, len1, options, ref, ref1, ref2, ref3, ref4, value, width;
        options = {};
        ref = this.otherOptions;
        for (key in ref) {
          value = ref[key];
          if (!Util.contains(this.PARAM_NAMES, key)) {
            options[key] = value;
          }
        }
        ref1 = Util.difference(this.keys(), this.PARAM_NAMES);
        for (i = 0, len = ref1.length; i < len; i++) {
          key = ref1[i];
          options[key] = this.get(key).value;
        }
        ref2 = this.keys();
        for (j = 0, len1 = ref2.length; j < len1; j++) {
          k = ref2[j];
          if (/^html_/.exec(k)) {
            options[k.substr(5)] = this.getValue(k);
          }
        }
        if (!(this.hasLayer() || this.getValue("angle") || Util.contains(["fit", "limit", "lfill"], this.getValue("crop")))) {
          width = (ref3 = this.get("width")) != null ? ref3.origValue : void 0;
          height = (ref4 = this.get("height")) != null ? ref4.origValue : void 0;
          if (parseFloat(width) >= 1.0) {
            if (options['width'] == null) {
              options['width'] = width;
            }
          }
          if (parseFloat(height) >= 1.0) {
            if (options['height'] == null) {
              options['height'] = height;
            }
          }
        }
        return options;
      };

      TransformationBase.prototype.isValidParamName = function(name) {
        return this.methods.indexOf(Util.camelCase(name)) >= 0;
      };


      /**
       * Delegate to the parent (up the call chain) to produce HTML
       * @function Transformation#toHtml
       * @return {string} HTML representation of the parent if possible.
       * @example
       * tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo"})
       * // ImageTag {name: "img", publicId: "sample"}
       * tag.toHtml()
       * // <img src="http://res.cloudinary.com/demo/image/upload/sample">
       * tag.transformation().crop("fit").width(300).toHtml()
       * // <img src="http://res.cloudinary.com/demo/image/upload/c_fit,w_300/sample">
       */

      TransformationBase.prototype.toHtml = function() {
        var ref;
        return (ref = this.getParent()) != null ? typeof ref.toHtml === "function" ? ref.toHtml() : void 0 : void 0;
      };

      TransformationBase.prototype.toString = function() {
        return this.serialize();
      };

      return TransformationBase;

    })();
    return Transformation = (function(superClass) {
      extend(Transformation, superClass);


      /**
       *  Represents a single transformation.
       *  @class Transformation
       *  @example
       *  t = new cloudinary.Transformation();
       * t.angle(20).crop("scale").width("auto");
       *
       * // or
       *
       * t = new cloudinary.Transformation( {angle: 20, crop: "scale", width: "auto"});
       */

      function Transformation(options) {
        if (options == null) {
          options = {};
        }
        Transformation.__super__.constructor.call(this, options);
      }


      /**
       * Convenience constructor
       * @param {Object} options
       * @return {Transformation}
       * @example cl = cloudinary.Transformation.new( {angle: 20, crop: "scale", width: "auto"})
       */

      Transformation["new"] = function(args) {
        return new Transformation(args);
      };


      /*
        Transformation Parameters
       */

      Transformation.prototype.angle = function(value) {
        return this.arrayParam(value, "angle", "a", ".");
      };

      Transformation.prototype.audioCodec = function(value) {
        return this.param(value, "audio_codec", "ac");
      };

      Transformation.prototype.audioFrequency = function(value) {
        return this.param(value, "audio_frequency", "af");
      };

      Transformation.prototype.aspectRatio = function(value) {
        return this.param(value, "aspect_ratio", "ar");
      };

      Transformation.prototype.background = function(value) {
        return this.param(value, "background", "b", Param.norm_color);
      };

      Transformation.prototype.bitRate = function(value) {
        return this.param(value, "bit_rate", "br");
      };

      Transformation.prototype.border = function(value) {
        return this.param(value, "border", "bo", function(border) {
          if (Util.isPlainObject(border)) {
            border = Util.assign({}, {
              color: "black",
              width: 2
            }, border);
            return border.width + "px_solid_" + (Param.norm_color(border.color));
          } else {
            return border;
          }
        });
      };

      Transformation.prototype.color = function(value) {
        return this.param(value, "color", "co", Param.norm_color);
      };

      Transformation.prototype.colorSpace = function(value) {
        return this.param(value, "color_space", "cs");
      };

      Transformation.prototype.crop = function(value) {
        return this.param(value, "crop", "c");
      };

      Transformation.prototype.defaultImage = function(value) {
        return this.param(value, "default_image", "d");
      };

      Transformation.prototype.delay = function(value) {
        return this.param(value, "delay", "l");
      };

      Transformation.prototype.density = function(value) {
        return this.param(value, "density", "dn");
      };

      Transformation.prototype.duration = function(value) {
        return this.rangeParam(value, "duration", "du");
      };

      Transformation.prototype.dpr = function(value) {
        return this.param(value, "dpr", "dpr", function(dpr) {
          dpr = dpr.toString();
          if (dpr === "auto") {
            return "1.0";
          } else if (dpr != null ? dpr.match(/^\d+$/) : void 0) {
            return dpr + ".0";
          } else {
            return dpr;
          }
        });
      };

      Transformation.prototype.effect = function(value) {
        return this.arrayParam(value, "effect", "e", ":");
      };

      Transformation.prototype.endOffset = function(value) {
        return this.rangeParam(value, "end_offset", "eo");
      };

      Transformation.prototype.fallbackContent = function(value) {
        return this.param(value, "fallback_content");
      };

      Transformation.prototype.fetchFormat = function(value) {
        return this.param(value, "fetch_format", "f");
      };

      Transformation.prototype.format = function(value) {
        return this.param(value, "format");
      };

      Transformation.prototype.flags = function(value) {
        return this.arrayParam(value, "flags", "fl", ".");
      };

      Transformation.prototype.gravity = function(value) {
        return this.param(value, "gravity", "g");
      };

      Transformation.prototype.height = function(value) {
        return this.param(value, "height", "h", (function(_this) {
          return function() {
            if (_this.getValue("crop") || _this.getValue("overlay") || _this.getValue("underlay")) {
              return value;
            } else {
              return null;
            }
          };
        })(this));
      };

      Transformation.prototype.htmlHeight = function(value) {
        return this.param(value, "html_height");
      };

      Transformation.prototype.htmlWidth = function(value) {
        return this.param(value, "html_width");
      };

      Transformation.prototype.offset = function(value) {
        var end_o, ref, start_o;
        ref = Util.isFunction(value != null ? value.split : void 0) ? value.split('..') : Util.isArray(value) ? value : [null, null], start_o = ref[0], end_o = ref[1];
        if (start_o != null) {
          this.startOffset(start_o);
        }
        if (end_o != null) {
          return this.endOffset(end_o);
        }
      };

      Transformation.prototype.opacity = function(value) {
        return this.param(value, "opacity", "o");
      };

      Transformation.prototype.overlay = function(value) {
        return this.param(value, "overlay", "l");
      };

      Transformation.prototype.page = function(value) {
        return this.param(value, "page", "pg");
      };

      Transformation.prototype.poster = function(value) {
        return this.param(value, "poster");
      };

      Transformation.prototype.prefix = function(value) {
        return this.param(value, "prefix", "p");
      };

      Transformation.prototype.quality = function(value) {
        return this.param(value, "quality", "q");
      };

      Transformation.prototype.radius = function(value) {
        return this.param(value, "radius", "r");
      };

      Transformation.prototype.rawTransformation = function(value) {
        return this.rawParam(value, "raw_transformation");
      };

      Transformation.prototype.size = function(value) {
        var height, ref, width;
        if (Util.isFunction(value != null ? value.split : void 0)) {
          ref = value.split('x'), width = ref[0], height = ref[1];
          this.width(width);
          return this.height(height);
        }
      };

      Transformation.prototype.sourceTypes = function(value) {
        return this.param(value, "source_types");
      };

      Transformation.prototype.sourceTransformation = function(value) {
        return this.param(value, "source_transformation");
      };

      Transformation.prototype.startOffset = function(value) {
        return this.rangeParam(value, "start_offset", "so");
      };

      Transformation.prototype.transformation = function(value) {
        return this.transformationParam(value, "transformation", "t");
      };

      Transformation.prototype.underlay = function(value) {
        return this.param(value, "underlay", "u");
      };

      Transformation.prototype.videoCodec = function(value) {
        return this.param(value, "video_codec", "vc", Param.process_video_params);
      };

      Transformation.prototype.videoSampling = function(value) {
        return this.param(value, "video_sampling", "vs");
      };

      Transformation.prototype.width = function(value) {
        return this.param(value, "width", "w", (function(_this) {
          return function() {
            if (_this.getValue("crop") || _this.getValue("overlay") || _this.getValue("underlay")) {
              return value;
            } else {
              return null;
            }
          };
        })(this));
      };

      Transformation.prototype.x = function(value) {
        return this.param(value, "x", "x");
      };

      Transformation.prototype.y = function(value) {
        return this.param(value, "y", "y");
      };

      Transformation.prototype.zoom = function(value) {
        return this.param(value, "zoom", "z");
      };

      return Transformation;

    })(TransformationBase);
  });

}).call(this);

(function() {
  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('tags/htmltag',['transformation', 'util'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('transformation'), require('util'));
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary.HtmlTag = factory(root.cloudinary.Transformation, root.cloudinary.Util);
    }
  })(this, function(Transformation, Util) {
    var HtmlTag;
    return HtmlTag = (function() {

      /**
       * Represents an HTML (DOM) tag
       * @constructor HtmlTag
       * @param {string} name - the name of the tag
       * @param {string} [publicId]
       * @param {Object} options
       * @example tag = new HtmlTag( 'div', { 'width': 10})
       */
      var toAttribute;

      function HtmlTag(name, publicId, options) {
        var transformation;
        this.name = name;
        this.publicId = publicId;
        if (options == null) {
          if (Util.isPlainObject(publicId)) {
            options = publicId;
            this.publicId = void 0;
          } else {
            options = {};
          }
        }
        transformation = new Transformation(options);
        transformation.setParent(this);
        this.transformation = function() {
          return transformation;
        };
      }


      /**
       * Convenience constructor
       * Creates a new instance of an HTML (DOM) tag
       * @function HtmlTag.new
       * @param {string} name - the name of the tag
       * @param {string} [publicId]
       * @param {Object} options
       * @return {HtmlTag}
       * @example tag = HtmlTag.new( 'div', { 'width': 10})
       */

      HtmlTag["new"] = function(name, publicId, options) {
        return new this(name, publicId, options);
      };


      /**
       * Represent the given key and value as an HTML attribute.
       * @function HtmlTag#toAttribute
       * @protected
       * @param {string} key - attribute name
       * @param {*|boolean} value - the value of the attribute. If the value is boolean `true`, return the key only.
       * @returns {string} the attribute
       *
       */

      toAttribute = function(key, value) {
        if (!value) {
          return void 0;
        } else if (value === true) {
          return key;
        } else {
          return key + "=\"" + value + "\"";
        }
      };


      /**
       * combine key and value from the `attr` to generate an HTML tag attributes string.
       * `Transformation::toHtmlTagOptions` is used to filter out transformation and configuration keys.
       * @protected
       * @param {Object} attrs
       * @return {string} the attributes in the format `'key1="value1" key2="value2"'`
       * @ignore
       */

      HtmlTag.prototype.htmlAttrs = function(attrs) {
        var key, pairs, value;
        return pairs = ((function() {
          var results;
          results = [];
          for (key in attrs) {
            value = attrs[key];
            if (value) {
              results.push(toAttribute(key, value));
            }
          }
          return results;
        })()).sort().join(' ');
      };


      /**
       * Get all options related to this tag.
       * @function HtmlTag#getOptions
       * @returns {Object} the options
       *
       */

      HtmlTag.prototype.getOptions = function() {
        return this.transformation().toOptions();
      };


      /**
       * Get the value of option `name`
       * @function HtmlTag#getOption
       * @param {string} name - the name of the option
       * @returns {*} Returns the value of the option
       *
       */

      HtmlTag.prototype.getOption = function(name) {
        return this.transformation().getValue(name);
      };


      /**
       * Get the attributes of the tag.
       * @function HtmlTag#attributes
       * @returns {Object} attributes
       */

      HtmlTag.prototype.attributes = function() {
        return this.transformation().toHtmlAttributes();
      };


      /**
       * Set a tag attribute named `name` to `value`
       * @function HtmlTag#setAttr
       * @param {string} name - the name of the attribute
       * @param {string} value - the value of the attribute
       */

      HtmlTag.prototype.setAttr = function(name, value) {
        this.transformation().set("html_" + name, value);
        return this;
      };


      /**
       * Get the value of the tag attribute `name`
       * @function HtmlTag#getAttr
       * @param {string} name - the name of the attribute
       * @returns {*}
       */

      HtmlTag.prototype.getAttr = function(name) {
        return this.attributes()["html_" + name] || this.attributes()[name];
      };


      /**
       * Remove the tag attributed named `name`
       * @function HtmlTag#removeAttr
       * @param {string} name - the name of the attribute
       * @returns {*}
       */

      HtmlTag.prototype.removeAttr = function(name) {
        var ref;
        return (ref = this.transformation().remove("html_" + name)) != null ? ref : this.transformation().remove(name);
      };


      /**
       * @function HtmlTag#content
       * @protected
       * @ignore
       */

      HtmlTag.prototype.content = function() {
        return "";
      };


      /**
       * @function HtmlTag#openTag
       * @protected
       * @ignore
       */

      HtmlTag.prototype.openTag = function() {
        return "<" + this.name + " " + (this.htmlAttrs(this.attributes())) + ">";
      };


      /**
       * @function HtmlTag#closeTag
       * @protected
       * @ignore
       */

      HtmlTag.prototype.closeTag = function() {
        return "</" + this.name + ">";
      };


      /**
       * Generates an HTML representation of the tag.
       * @function HtmlTag#toHtml
       * @returns {string} Returns HTML in string format
       */

      HtmlTag.prototype.toHtml = function() {
        return this.openTag() + this.content() + this.closeTag();
      };


      /**
       * Creates a DOM object representing the tag.
       * @function HtmlTag#toDOM
       * @returns {Element}
       */

      HtmlTag.prototype.toDOM = function() {
        var element, name, ref, value;
        if (!Util.isFunction(typeof document !== "undefined" && document !== null ? document.createElement : void 0)) {
          throw "Can't create DOM if document is not present!";
        }
        element = document.createElement(this.name);
        ref = this.attributes();
        for (name in ref) {
          value = ref[name];
          element[name] = value;
        }
        return element;
      };

      return HtmlTag;

    })();
  });

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('tags/videotag',['tags/htmltag', 'util', 'cloudinary', 'require'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('tags/htmltag'), require('util'), require('cloudinary'), require);
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary.VideoTag = factory(root.cloudinary.HtmlTag, root.cloudinary.Util, root.cloudinary.Cloudinary, function() {
        return root.cloudinary.Cloudinary;
      });
    }
  })(this, function(HtmlTag, Util, Cloudinary, require) {
    var VideoTag;
    return VideoTag = (function(superClass) {
      var DEFAULT_POSTER_OPTIONS, DEFAULT_VIDEO_SOURCE_TYPES, VIDEO_TAG_PARAMS;

      extend(VideoTag, superClass);

      VIDEO_TAG_PARAMS = ['source_types', 'source_transformation', 'fallback_content', 'poster'];

      DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];

      DEFAULT_POSTER_OPTIONS = {
        format: 'jpg',
        resource_type: 'video'
      };


      /**
       * Creates an HTML (DOM) Video tag using Cloudinary as the source.
       * @constructor VideoTag
       * @extends HtmlTag
       * @param {string} [publicId]
       * @param {Object} [options]
       */

      function VideoTag(publicId, options) {
        if (options == null) {
          options = {};
        }
        Cloudinary || (Cloudinary = require('cloudinary'));
        options = Util.defaults({}, options, Cloudinary.DEFAULT_VIDEO_PARAMS);
        VideoTag.__super__.constructor.call(this, "video", publicId.replace(/\.(mp4|ogv|webm)$/, ''), options);
      }


      /**
       * Set the transformation to apply on each source
       * @function VideoTag#setSourceTransformation
       * @param {Object} an object with pairs of source type and source transformation
       * @returns {VideoTag} Returns this instance for chaining purposes.
       */

      VideoTag.prototype.setSourceTransformation = function(value) {
        this.transformation().sourceTransformation(value);
        return this;
      };


      /**
       * Set the source types to include in the video tag
       * @function VideoTag#setSourceTypes
       * @param {Array<string>} an array of source types
       * @returns {VideoTag} Returns this instance for chaining purposes.
       */

      VideoTag.prototype.setSourceTypes = function(value) {
        this.transformation().sourceTypes(value);
        return this;
      };


      /**
       * Set the poster to be used in the video tag
       * @function VideoTag#setPoster
       * @param {string|Object} value
       * - string: a URL to use for the poster
       * - Object: transformation parameters to apply to the poster. May optionally include a public_id to use instead of the video public_id.
       * @returns {VideoTag} Returns this instance for chaining purposes.
       */

      VideoTag.prototype.setPoster = function(value) {
        this.transformation().poster(value);
        return this;
      };


      /**
       * Set the content to use as fallback in the video tag
       * @function VideoTag#setFallbackContent
       * @param {string} value - the content to use, in HTML format
       * @returns {VideoTag} Returns this instance for chaining purposes.
       */

      VideoTag.prototype.setFallbackContent = function(value) {
        this.transformation().fallbackContent(value);
        return this;
      };

      VideoTag.prototype.content = function() {
        var cld, fallback, innerTags, mimeType, sourceTransformation, sourceTypes, src, srcType, transformation, videoType;
        sourceTypes = this.transformation().getValue('source_types');
        sourceTransformation = this.transformation().getValue('source_transformation');
        fallback = this.transformation().getValue('fallback_content');
        Cloudinary || (Cloudinary = require('cloudinary'));
        if (Util.isArray(sourceTypes)) {
          cld = new Cloudinary(this.getOptions());
          innerTags = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = sourceTypes.length; i < len; i++) {
              srcType = sourceTypes[i];
              transformation = sourceTransformation[srcType] || {};
              src = cld.url("" + this.publicId, Util.defaults({}, transformation, {
                resource_type: 'video',
                format: srcType
              }));
              videoType = srcType === 'ogv' ? 'ogg' : srcType;
              mimeType = 'video/' + videoType;
              results.push("<source " + (this.htmlAttrs({
                src: src,
                type: mimeType
              })) + ">");
            }
            return results;
          }).call(this);
        } else {
          innerTags = [];
        }
        return innerTags.join('') + fallback;
      };

      VideoTag.prototype.attributes = function() {
        var a, attr, defaults, i, len, poster, ref, ref1, sourceTypes;
        Cloudinary || (Cloudinary = require('cloudinary'));
        sourceTypes = this.getOption('source_types');
        poster = (ref = this.getOption('poster')) != null ? ref : {};
        if (Util.isPlainObject(poster)) {
          defaults = poster.public_id != null ? Cloudinary.DEFAULT_IMAGE_PARAMS : DEFAULT_POSTER_OPTIONS;
          poster = new Cloudinary(this.getOptions()).url((ref1 = poster.public_id) != null ? ref1 : this.publicId, Util.defaults({}, poster, defaults));
        }
        attr = VideoTag.__super__.attributes.call(this) || [];
        for (i = 0, len = attr.length; i < len; i++) {
          a = attr[i];
          if (!Util.contains(VIDEO_TAG_PARAMS)) {
            attr = a;
          }
        }
        if (!Util.isArray(sourceTypes)) {
          attr["src"] = new Cloudinary(this.getOptions()).url(this.publicId, {
            resource_type: 'video',
            format: sourceTypes
          });
        }
        if (poster != null) {
          attr["poster"] = poster;
        }
        return attr;
      };

      return VideoTag;

    })(HtmlTag);
  });

}).call(this);

(function() {
  (function(root, factory) {
    var require;
    if ((typeof define === 'function') && define.amd) {
      return define('cloudinary',['utf8_encode', 'crc32', 'util', 'transformation', 'configuration', 'tags/imagetag', 'tags/videotag', 'require'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('utf8_encode'), require('crc32'), require('util'), require('transformation'), require('configuration'), require('tags/imagetag'), require('tags/videotag'), require);
    } else {
      root.cloudinary || (root.cloudinary = {});

      /**
       * Resolves circular dependency
       * @private
       */
      require = function(name) {
        switch (name) {
          case 'tags/imagetag':
            return root.cloudinary.ImageTag;
          case 'tags/videotag':
            return root.cloudinary.VideoTag;
        }
      };
      return root.cloudinary.Cloudinary = factory(root.cloudinary.utf8_encode, root.cloudinary.crc32, root.cloudinary.Util, root.cloudinary.Transformation, root.cloudinary.Configuration, root.cloudinary.ImageTag, root.cloudinary.VideoTag, require);
    }
  })(this, function(utf8_encode, crc32, Util, Transformation, Configuration, ImageTag, VideoTag, require) {

    /**
     * Main Cloudinary class
     */
    var Cloudinary;
    return Cloudinary = (function() {
      var AKAMAI_SHARED_CDN, CF_SHARED_CDN, DEFAULT_POSTER_OPTIONS, DEFAULT_VIDEO_SOURCE_TYPES, OLD_AKAMAI_SHARED_CDN, SHARED_CDN, VERSION, absolutize, cdnSubdomainNumber, closestAbove, cloudinaryUrlPrefix, defaultBreakpoints, devicePixelRatioCache, finalizeResourceType, responsiveConfig, responsiveResizeInitialized;

      VERSION = "2.0.0";

      CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";

      OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";

      AKAMAI_SHARED_CDN = "res.cloudinary.com";

      SHARED_CDN = AKAMAI_SHARED_CDN;

      DEFAULT_POSTER_OPTIONS = {
        format: 'jpg',
        resource_type: 'video'
      };

      DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];

      devicePixelRatioCache = {};

      responsiveConfig = {};

      responsiveResizeInitialized = false;


      /**
      * @const {Object} Cloudinary.DEFAULT_IMAGE_PARAMS
      * Defaults values for image parameters.
      *
      * (Previously defined using option_consume() )
       */

      Cloudinary.DEFAULT_IMAGE_PARAMS = {
        resource_type: "image",
        transformation: [],
        type: 'upload'
      };


      /**
      * Defaults values for video parameters.
      * @const {Object} Cloudinary.DEFAULT_VIDEO_PARAMS
      * (Previously defined using option_consume() )
       */

      Cloudinary.DEFAULT_VIDEO_PARAMS = {
        fallback_content: '',
        resource_type: "video",
        source_transformation: {},
        source_types: DEFAULT_VIDEO_SOURCE_TYPES,
        transformation: [],
        type: 'upload'
      };


      /**
       * Main Cloudinary class
       * @class Cloudinary
       * @param {Object} options - options to configure Cloudinary
       * @see Configuration for more details
       * @example
       *var cl = new cloudinary.Cloudinary( { cloud_name: "mycloud"});
       *var imgTag = cl.image("myPicID");
       */

      function Cloudinary(options) {
        var configuration;
        configuration = new cloudinary.Configuration(options);
        this.config = function(newConfig, newValue) {
          return configuration.config(newConfig, newValue);
        };

        /**
         * Use \<meta\> tags in the document to configure this Cloudinary instance.
         * @return {Cloudinary} this for chaining
         */
        this.fromDocument = function() {
          configuration.fromDocument();
          return this;
        };

        /**
         * Use environment variables to configure this Cloudinary instance.
         * @return {Cloudinary} this for chaining
         */
        this.fromEnvironment = function() {
          configuration.fromEnvironment();
          return this;
        };

        /**
         * Initialize configuration.
         * @function Cloudinary#init
         * @see Configuration#init
         * @return {Cloudinary} this for chaining
         */
        this.init = function() {
          configuration.init();
          return this;
        };
      }


      /**
       * Convenience constructor
       * @param {Object} options
       * @return {Cloudinary}
       * @example cl = cloudinary.Cloudinary.new( { cloud_name: "mycloud"})
       */

      Cloudinary["new"] = function(options) {
        return new this(options);
      };


      /**
       * Return the resource type and action type based on the given configuration
       * @function Cloudinary#finalizeResourceType
       * @param {Object|string} resourceType
       * @param {string} [type='upload']
       * @param {string} [urlSuffix]
       * @param {boolean} [useRootPath]
       * @param {boolean} [shorten]
       * @returns {string} resource_type/type
       * @ignore
       */

      finalizeResourceType = function(resourceType, type, urlSuffix, useRootPath, shorten) {
        var options;
        if (Util.isPlainObject(resourceType)) {
          options = resourceType;
          resourceType = options.resource_type;
          type = options.type;
          urlSuffix = options.url_suffix;
          useRootPath = options.use_root_path;
          shorten = options.shorten;
        }
        if (type == null) {
          type = 'upload';
        }
        if (urlSuffix != null) {
          if (resourceType === 'image' && type === 'upload') {
            resourceType = "images";
            type = null;
          } else if (resourceType === 'raw' && type === 'upload') {
            resourceType = 'files';
            type = null;
          } else {
            throw new Error("URL Suffix only supported for image/upload and raw/upload");
          }
        }
        if (useRootPath) {
          if (resourceType === 'image' && type === 'upload' || resourceType === "images") {
            resourceType = null;
            type = null;
          } else {
            throw new Error("Root path only supported for image/upload");
          }
        }
        if (shorten && resourceType === 'image' && type === 'upload') {
          resourceType = 'iu';
          type = null;
        }
        return [resourceType, type].join("/");
      };

      absolutize = function(url) {
        var prefix;
        if (!url.match(/^https?:\//)) {
          prefix = document.location.protocol + '//' + document.location.host;
          if (url[0] === '?') {
            prefix += document.location.pathname;
          } else if (url[0] !== '/') {
            prefix += document.location.pathname.replace(/\/[^\/]*$/, '/');
          }
          url = prefix + url;
        }
        return url;
      };


      /**
       * Generate an resource URL.
       * @function Cloudinary#url
       * @param {string} publicId - the public ID of the resource
       * @param {Object} [options] - options for the tag and transformations, possible values include all {@link Transformation} parameters
       *                          and {@link Configuration} parameters
       * @param {string} [options.type='upload'] - the classification of the resource
       * @param {Object} [options.resource_type='image'] - the type of the resource
       * @return {string} The resource URL
       */

      Cloudinary.prototype.url = function(publicId, options) {
        var prefix, ref, resourceTypeAndType, transformation, transformationString, url, version;
        if (options == null) {
          options = {};
        }
        if (!publicId) {
          return publicId;
        }
        options = Util.defaults({}, options, this.config(), Cloudinary.DEFAULT_IMAGE_PARAMS);
        if (options.type === 'fetch') {
          options.fetch_format = options.fetch_format || options.format;
          publicId = absolutize(publicId);
        }
        transformation = new Transformation(options);
        transformationString = transformation.serialize();
        if (!options.cloud_name) {
          throw 'Unknown cloud_name';
        }
        if (options.url_suffix && !options.private_cdn) {
          throw 'URL Suffix only supported in private CDN';
        }
        if (publicId.search('/') >= 0 && !publicId.match(/^v[0-9]+/) && !publicId.match(/^https?:\//) && !((ref = options.version) != null ? ref.toString() : void 0)) {
          options.version = 1;
        }
        if (publicId.match(/^https?:/)) {
          if (options.type === 'upload' || options.type === 'asset') {
            url = publicId;
          } else {
            publicId = encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');
          }
        } else {
          publicId = encodeURIComponent(decodeURIComponent(publicId)).replace(/%3A/g, ':').replace(/%2F/g, '/');
          if (options.url_suffix) {
            if (options.url_suffix.match(/[\.\/]/)) {
              throw 'url_suffix should not include . or /';
            }
            publicId = publicId + '/' + options.url_suffix;
          }
          if (options.format) {
            if (!options.trust_public_id) {
              publicId = publicId.replace(/\.(jpg|png|gif|webp)$/, '');
            }
            publicId = publicId + '.' + options.format;
          }
        }
        prefix = cloudinaryUrlPrefix(publicId, options);
        resourceTypeAndType = finalizeResourceType(options.resource_type, options.type, options.url_suffix, options.use_root_path, options.shorten);
        version = options.version ? 'v' + options.version : '';
        return url || Util.compact([prefix, resourceTypeAndType, transformationString, version, publicId]).join('/').replace(/([^:])\/+/g, '$1/');
      };


      /**
       * Generate an video resource URL.
       * @function Cloudinary#video_url
       * @param {string} publicId - the public ID of the resource
       * @param {Object} [options] - options for the tag and transformations, possible values include all {@link Transformation} parameters
       *                          and {@link Configuration} parameters
       * @param {string} [options.type='upload'] - the classification of the resource
       * @return {string} The video URL
       */

      Cloudinary.prototype.video_url = function(publicId, options) {
        options = Util.assign({
          resource_type: 'video'
        }, options);
        return this.url(publicId, options);
      };


      /**
       * Generate an video thumbnail URL.
       * @function Cloudinary#video_thumbnail_url
       * @param {string} publicId - the public ID of the resource
       * @param {Object} [options] - options for the tag and transformations, possible values include all {@link Transformation} parameters
       *                          and {@link Configuration} parameters
       * @param {string} [options.type='upload'] - the classification of the resource
       * @return {string} The video thumbnail URL
       */

      Cloudinary.prototype.video_thumbnail_url = function(publicId, options) {
        options = Util.assign({}, DEFAULT_POSTER_OPTIONS, options);
        return this.url(publicId, options);
      };


      /**
       * Generate a string representation of the provided transformation options.
       * @function Cloudinary#transformation_string
       * @param {Object} options - the transformation options
       * @returns {string} The transformation string
       */

      Cloudinary.prototype.transformation_string = function(options) {
        return new Transformation(options).serialize();
      };


      /**
       * Generate an image tag.
       * @function Cloudinary#image
       * @param {string} publicId - the public ID of the image
       * @param {Object} [options] - options for the tag and transformations
       * @return {HTMLImageElement} an image tag element
       */

      Cloudinary.prototype.image = function(publicId, options) {
        var img, tag_options;
        if (options == null) {
          options = {};
        }
        tag_options = Util.assign({
          src: ''
        }, options);
        img = this.imageTag(publicId, tag_options).toDOM();
        Util.setData(img, 'src-cache', this.url(publicId, options));
        this.cloudinary_update(img, options);
        return img;
      };


      /**
       * Creates a new ImageTag instance, configured using this own's configuration.
       * @function Cloudinary#imageTag
       * @param {string} publicId - the public ID of the resource
       * @param {Object} options - additional options to pass to the new ImageTag instance
       * @return {ImageTag} An ImageTag that is attached (chained) to this Cloudinary instance
       */

      Cloudinary.prototype.imageTag = function(publicId, options) {
        options = Util.defaults({}, options, this.config());
        ImageTag || (ImageTag = require('tags/imagetag'));
        return new ImageTag(publicId, options);
      };


      /**
       * Generate an image tag for the video thumbnail.
       * @function Cloudinary#video_thumbnail
       * @param {string} publicId - the public ID of the video
       * @param {Object} [options] - options for the tag and transformations
       * @return {HTMLImageElement} An image tag element
       */

      Cloudinary.prototype.video_thumbnail = function(publicId, options) {
        return this.image(publicId, Util.merge({}, DEFAULT_POSTER_OPTIONS, options));
      };


      /**
       * @function Cloudinary#facebook_profile_image
       * @param {string} publicId - the public ID of the image
       * @param {Object} [options] - options for the tag and transformations
       * @return {HTMLImageElement} an image tag element
       */

      Cloudinary.prototype.facebook_profile_image = function(publicId, options) {
        return this.image(publicId, Util.assign({
          type: 'facebook'
        }, options));
      };


      /**
       * @function Cloudinary#twitter_profile_image
       * @param {string} publicId - the public ID of the image
       * @param {Object} [options] - options for the tag and transformations
       * @return {HTMLImageElement} an image tag element
       */

      Cloudinary.prototype.twitter_profile_image = function(publicId, options) {
        return this.image(publicId, Util.assign({
          type: 'twitter'
        }, options));
      };


      /**
       * @function Cloudinary#twitter_name_profile_image
       * @param {string} publicId - the public ID of the image
       * @param {Object} [options] - options for the tag and transformations
       * @return {HTMLImageElement} an image tag element
       */

      Cloudinary.prototype.twitter_name_profile_image = function(publicId, options) {
        return this.image(publicId, Util.assign({
          type: 'twitter_name'
        }, options));
      };


      /**
       * @function Cloudinary#gravatar_image
       * @param {string} publicId - the public ID of the image
       * @param {Object} [options] - options for the tag and transformations
       * @return {HTMLImageElement} an image tag element
       */

      Cloudinary.prototype.gravatar_image = function(publicId, options) {
        return this.image(publicId, Util.assign({
          type: 'gravatar'
        }, options));
      };


      /**
       * @function Cloudinary#fetch_image
       * @param {string} publicId - the public ID of the image
       * @param {Object} [options] - options for the tag and transformations
       * @return {HTMLImageElement} an image tag element
       */

      Cloudinary.prototype.fetch_image = function(publicId, options) {
        return this.image(publicId, Util.assign({
          type: 'fetch'
        }, options));
      };


      /**
       * @function Cloudinary#video
       * @param {string} publicId - the public ID of the image
       * @param {Object} [options] - options for the tag and transformations
       * @return {HTMLImageElement} an image tag element
       */

      Cloudinary.prototype.video = function(publicId, options) {
        if (options == null) {
          options = {};
        }
        return this.videoTag(publicId, options).toHtml();
      };


      /**
       * Creates a new VideoTag instance, configured using this own's configuration.
       * @function Cloudinary#videoTag
       * @param {string} publicId - the public ID of the resource
       * @param {Object} options - additional options to pass to the new VideoTag instance
       * @return {VideoTag} A VideoTag that is attached (chained) to this Cloudinary instance
       */

      Cloudinary.prototype.videoTag = function(publicId, options) {
        VideoTag || (VideoTag = require('tags/videotag'));
        options = Util.defaults({}, options, this.config());
        return new VideoTag(publicId, options);
      };


      /**
       * Generate the URL of the sprite image
       * @function Cloudinary#sprite_css
       * @param {string} publicId - the public ID of the resource
       * @param {Object} [options] - options for the tag and transformations
       * @see {@link http://cloudinary.com/documentation/sprite_generation Sprite generation}
       */

      Cloudinary.prototype.sprite_css = function(publicId, options) {
        options = Util.assign({
          type: 'sprite'
        }, options);
        if (!publicId.match(/.css$/)) {
          options.format = 'css';
        }
        return this.url(publicId, options);
      };


      /**
       * @function Cloudinary#responsive
       */

      Cloudinary.prototype.responsive = function(options) {
        var ref, ref1, responsiveResize, timeout;
        responsiveConfig = Util.merge(responsiveConfig || {}, options);
        this.cloudinary_update('img.cld-responsive, img.cld-hidpi', responsiveConfig);
        responsiveResize = (ref = (ref1 = responsiveConfig['responsive_resize']) != null ? ref1 : this.config('responsive_resize')) != null ? ref : true;
        if (responsiveResize && !responsiveResizeInitialized) {
          responsiveConfig.resizing = responsiveResizeInitialized = true;
          timeout = null;
          return window.addEventListener('resize', (function(_this) {
            return function() {
              var debounce, ref2, ref3, reset, run, wait;
              debounce = (ref2 = (ref3 = responsiveConfig['responsive_debounce']) != null ? ref3 : _this.config('responsive_debounce')) != null ? ref2 : 100;
              reset = function() {
                if (timeout) {
                  clearTimeout(timeout);
                  return timeout = null;
                }
              };
              run = function() {
                return _this.cloudinary_update('img.cld-responsive', responsiveConfig);
              };
              wait = function() {
                reset();
                return setTimeout((function() {
                  reset();
                  return run();
                }), debounce);
              };
              if (debounce) {
                return wait();
              } else {
                return run();
              }
            };
          })(this));
        }
      };


      /**
       * @function Cloudinary#calc_breakpoint
       * @private
       * @ignore
       */

      Cloudinary.prototype.calc_breakpoint = function(element, width) {
        var breakpoints, point;
        breakpoints = Util.getData(element, 'breakpoints') || Util.getData(element, 'stoppoints') || this.config('breakpoints') || this.config('stoppoints') || defaultBreakpoints;
        if (Util.isFunction(breakpoints)) {
          return breakpoints(width);
        } else {
          if (Util.isString(breakpoints)) {
            breakpoints = ((function() {
              var j, len, ref, results;
              ref = breakpoints.split(',');
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                point = ref[j];
                results.push(parseInt(point));
              }
              return results;
            })()).sort(function(a, b) {
              return a - b;
            });
          }
          return closestAbove(breakpoints, width);
        }
      };


      /**
       * @function Cloudinary#calc_stoppoint
       * @deprecated Use {@link calc_breakpoint} instead.
       * @private
       * @ignore
       */

      Cloudinary.prototype.calc_stoppoint = Cloudinary.prototype.calc_breakpoint;


      /**
       * @function Cloudinary#device_pixel_ratio
       */

      Cloudinary.prototype.device_pixel_ratio = function() {
        var dpr, dprString, dprUsed;
        dpr = (typeof window !== "undefined" && window !== null ? window.devicePixelRatio : void 0) || 1;
        dprString = devicePixelRatioCache[dpr];
        if (!dprString) {
          dprUsed = closestAbove(this.supported_dpr_values, dpr);
          dprString = dprUsed.toString();
          if (dprString.match(/^\d+$/)) {
            dprString += '.0';
          }
          devicePixelRatioCache[dpr] = dprString;
        }
        return dprString;
      };

      Cloudinary.prototype.supported_dpr_values = [0.75, 1.0, 1.3, 1.5, 2.0, 3.0];

      defaultBreakpoints = function(width) {
        return 10 * Math.ceil(width / 10);
      };

      closestAbove = function(list, value) {
        var i;
        i = list.length - 2;
        while (i >= 0 && list[i] >= value) {
          i--;
        }
        return list[i + 1];
      };

      cdnSubdomainNumber = function(publicId) {
        return crc32(publicId) % 5 + 1;
      };

      cloudinaryUrlPrefix = function(publicId, options) {
        var cdnPart, host, path, protocol, ref, ref1, subdomain;
        if (((ref = options.cloud_name) != null ? ref.indexOf("/") : void 0) === 0) {
          return '/res' + options.cloud_name;
        }
        protocol = "http://";
        cdnPart = "";
        subdomain = "res";
        host = ".cloudinary.com";
        path = "/" + options.cloud_name;
        if (options.protocol) {
          protocol = options.protocol + '//';
        } else if ((typeof window !== "undefined" && window !== null ? (ref1 = window.location) != null ? ref1.protocol : void 0 : void 0) === 'file:') {
          protocol = 'file://';
        }
        if (options.private_cdn) {
          cdnPart = options.cloud_name + "-";
          path = "";
        }
        if (options.cdn_subdomain) {
          subdomain = "res-" + cdnSubdomainNumber(publicId);
        }
        if (options.secure) {
          protocol = "https://";
          if (options.secure_cdn_subdomain === false) {
            subdomain = "res";
          }
          if ((options.secure_distribution != null) && options.secure_distribution !== OLD_AKAMAI_SHARED_CDN && options.secure_distribution !== SHARED_CDN) {
            cdnPart = "";
            subdomain = "";
            host = options.secure_distribution;
          }
        } else if (options.cname) {
          protocol = "http://";
          cdnPart = "";
          subdomain = options.cdn_subdomain ? 'a' + ((crc32(publicId) % 5) + 1) + '.' : '';
          host = options.cname;
        }
        return [protocol, cdnPart, subdomain, host, path].join("");
      };


      /**
      * Finds all `img` tags under each node and sets it up to provide the image through Cloudinary
      * @function Cloudinary#processImageTags
       */

      Cloudinary.prototype.processImageTags = function(nodes, options) {
        var images, imgOptions, node, publicId, url;
        if (options == null) {
          options = {};
        }
        options = Util.defaults({}, options, this.config());
        images = (function() {
          var j, len, ref, results;
          results = [];
          for (j = 0, len = nodes.length; j < len; j++) {
            node = nodes[j];
            if (!(((ref = node.tagName) != null ? ref.toUpperCase() : void 0) === 'IMG')) {
              continue;
            }
            imgOptions = Util.assign({
              width: node.getAttribute('width'),
              height: node.getAttribute('height'),
              src: node.getAttribute('src')
            }, options);
            publicId = imgOptions['source'] || imgOptions['src'];
            delete imgOptions['source'];
            delete imgOptions['src'];
            url = this.url(publicId, imgOptions);
            imgOptions = new Transformation(imgOptions).toHtmlAttributes();
            Util.setData(node, 'src-cache', url);
            node.setAttribute('width', imgOptions.width);
            results.push(node.setAttribute('height', imgOptions.height));
          }
          return results;
        }).call(this);
        this.cloudinary_update(images, options);
        return this;
      };


      /**
      * Update hidpi (dpr_auto) and responsive (w_auto) fields according to the current container size and the device pixel ratio.
      * Only images marked with the cld-responsive class have w_auto updated.
      * @function Cloudinary#cloudinary_update
      * @param {(Array|string|NodeList)} elements - the elements to modify
      * @param {Object} options
      * @param {boolean|string} [options.responsive_use_breakpoints='resize']
      *  - when `true`, always use breakpoints for width
      * - when `"resize"` use exact width on first render and breakpoints on resize (default)
      * - when `false` always use exact width
      * @param {boolean} [options.responsive] - if `true`, enable responsive on this element. Can be done by adding cld-responsive.
      * @param {boolean} [options.responsive_preserve_height] - if set to true, original css height is preserved.
      *   Should only be used if the transformation supports different aspect ratios.
       */

      Cloudinary.prototype.cloudinary_update = function(elements, options) {
        var attrs, container, containerWidth, currentWidth, exact, j, len, ref, ref1, ref2, ref3, ref4, requestedWidth, responsive, responsive_use_breakpoints, src, tag;
        if (options == null) {
          options = {};
        }
        elements = (function() {
          switch (false) {
            case !Util.isArray(elements):
              return elements;
            case elements.constructor.name !== "NodeList":
              return elements;
            case !Util.isString(elements):
              return document.querySelectorAll(elements);
            default:
              return [elements];
          }
        })();
        responsive_use_breakpoints = (ref = (ref1 = (ref2 = (ref3 = options['responsive_use_breakpoints']) != null ? ref3 : options['responsive_use_stoppoints']) != null ? ref2 : this.config('responsive_use_breakpoints')) != null ? ref1 : this.config('responsive_use_stoppoints')) != null ? ref : 'resize';
        exact = !responsive_use_breakpoints || responsive_use_breakpoints === 'resize' && !options.resizing;
        for (j = 0, len = elements.length; j < len; j++) {
          tag = elements[j];
          if (!((ref4 = tag.tagName) != null ? ref4.match(/img/i) : void 0)) {
            continue;
          }
          if (options.responsive) {
            Util.addClass(tag, "cld-responsive");
          }
          attrs = {};
          src = Util.getData(tag, 'src-cache') || Util.getData(tag, 'src');
          if (!src) {
            return;
          }
          responsive = Util.hasClass(tag, 'cld-responsive') && src.match(/\bw_auto\b/);
          if (responsive) {
            container = tag.parentNode;
            containerWidth = 0;
            while (container && containerWidth === 0) {
              containerWidth = Util.width(container);
              container = container.parentNode;
            }
            if (containerWidth === 0) {
              return;
            }
            requestedWidth = exact ? containerWidth : this.calc_breakpoint(tag, containerWidth);
            currentWidth = Util.getData(tag, 'width') || 0;
            if (requestedWidth > currentWidth) {
              Util.setData(tag, 'width', requestedWidth);
            } else {
              requestedWidth = currentWidth;
            }
            src = src.replace(/\bw_auto\b/g, 'w_' + requestedWidth);
            attrs.width = null;
            if (!options.responsive_preserve_height) {
              attrs.height = null;
            }
          }
          attrs.src = src.replace(/\bdpr_(1\.0|auto)\b/g, 'dpr_' + this.device_pixel_ratio());
          Util.setAttributes(tag, attrs);
        }
        return this;
      };


      /**
      * Provide a transformation object, initialized with own's options, for chaining purposes.
      * @function Cloudinary#transformation
      * @param {Object} options
      * @return {Transformation}
       */

      Cloudinary.prototype.transformation = function(options) {
        return Transformation["new"](this.config()).fromOptions(options).setParent(this);
      };

      return Cloudinary;

    })();
  });

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('tags/imagetag',['tags/htmltag', 'cloudinary', 'require'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('tags/htmltag'), require('cloudinary'), require);
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary.ImageTag = factory(root.cloudinary.HtmlTag, root.cloudinary.Cloudinary, function() {
        return root.cloudinary.Cloudinary;
      });
    }
  })(this, function(HtmlTag, Cloudinary, require) {
    var ImageTag;
    return ImageTag = (function(superClass) {
      extend(ImageTag, superClass);


      /**
       * Creates an HTML (DOM) Image tag using Cloudinary as the source.
       * @constructor ImageTag
       * @extends HtmlTag
       * @param {string} [publicId]
       * @param {Object} [options]
       */

      function ImageTag(publicId, options) {
        if (options == null) {
          options = {};
        }
        ImageTag.__super__.constructor.call(this, "img", publicId, options);
      }


      /** @override */

      ImageTag.prototype.closeTag = function() {
        return "";
      };


      /** @override */

      ImageTag.prototype.attributes = function() {
        var attr;
        Cloudinary || (Cloudinary = require('cloudinary'));
        attr = ImageTag.__super__.attributes.call(this) || [];
        if (attr['src'] == null) {
          attr['src'] = new Cloudinary(this.getOptions()).url(this.publicId);
        }
        return attr;
      };

      return ImageTag;

    })(HtmlTag);
  });

}).call(this);


/**
 * Creates the namespace for Cloudinary
 */

(function() {
  (function(root, factory) {
    if ((typeof define === 'function') && define.amd) {
      return define('cloudinary-core-shrinkwrap-full',['utf8_encode', 'crc32', 'util', 'transformation', 'configuration', 'tags/htmltag', 'tags/imagetag', 'tags/videotag', 'cloudinary'], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory(require('utf8_encode'), require('crc32'), require('util'), require('transformation'), require('configuration'), require('tags/htmltag'), require('tags/imagetag'), require('tags/videotag'), require('cloudinary'));
    } else {
      root.cloudinary || (root.cloudinary = {});
      return root.cloudinary = factory(root.cloudinary.utf8_encode, root.cloudinary.crc32, root.cloudinary.Util, root.cloudinary.Transformation, root.cloudinary.Configuration, root.cloudinary.HtmlTag, root.cloudinary.ImageTag, root.cloudinary.VideoTag, root.cloudinary.Cloudinary);
    }
  })(this, function(utf8_encode, crc32, Util, Transformation, Configuration, HtmlTag, ImageTag, VideoTag, Cloudinary) {
    return {
      utf8_encode: utf8_encode,
      crc32: crc32,
      Util: Util,
      Transformation: Transformation,
      Configuration: Configuration,
      HtmlTag: HtmlTag,
      ImageTag: ImageTag,
      VideoTag: VideoTag,
      Cloudinary: Cloudinary
    };
  });

}).call(this);

}());