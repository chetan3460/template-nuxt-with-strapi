import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { LRUCache } from 'lru-cache';
import { createGenerator } from '@unocss/core';
import presetWind from '@unocss/preset-wind';
import { parse } from 'devalue';
import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { promises, existsSync } from 'node:fs';
import { dirname as dirname$1, resolve as resolve$2, join } from 'node:path';
import { toValue } from 'vue';
import { createConsola as createConsola$1 } from 'consola/core';
import { fileURLToPath } from 'node:url';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'ipx';

const empty = Object.freeze(
  Object.create(null, {
    __unenv__: { get: () => true }
  })
);

const empty$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: empty
});

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withProtocol(input, protocol) {
  let match = input.match(PROTOCOL_REGEX);
  if (!match) {
    match = input.match(/^\/{2,}/);
  }
  if (!match) {
    return protocol + input;
  }
  return protocol + input.slice(match[0].length);
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class WordArray {
  constructor(words, sigBytes) {
    __publicField$1(this, "words");
    __publicField$1(this, "sigBytes");
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    __publicField$1(this, "_data", new WordArray());
    __publicField$1(this, "_nDataBytes", 0);
    __publicField$1(this, "_minBufferSize", 0);
    __publicField$1(this, "blockSize", 512 / 32);
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => {
  __defNormalProp$3(obj, key + "" , value);
  return value;
};
const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    __publicField$3(this, "_hash", new WordArray([...H]));
  }
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function useBase(base, handler) {
  base = withoutTrailingSlash(base);
  if (!base || base === "/") {
    return handler;
  }
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _path = event._path || event.node.req.url || "/";
    event._path = withoutBase(event.path || "/", base);
    event.node.req.url = event._path;
    try {
      return await handler(event);
    } finally {
      event._path = event.node.req.url = _path;
    }
  });
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) {
      params[key] = decode(params[key]);
    }
  }
  return params;
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
const getHeader = getRequestHeader;
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError$1({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch$1({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController$1 = globalThis.AbortController || i;
const ofetch = createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });
const $fetch = ofetch;

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.unhandled || error.fatal) ? [] : (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('../_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive$1(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive$1(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive$1(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive$1(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      stack.push(entry);
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined") {
          siteConfig[k] = val;
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function useSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

const _U1nCZ08IZ3 = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const basicReporter = {
  log(logObj) {
    (console[logObj.type] || console.log)(...logObj.args);
  }
};
function createConsola(options = {}) {
  return createConsola$1({
    reporters: [basicReporter],
    ...options
  });
}
const consola = createConsola();
consola.consola = consola;

const logger$1 = createConsola({
  defaults: { tag: "@nuxtjs/robots" }
});

async function resolveRobotsTxtContext(e, nitro = useNitroApp()) {
  const { groups, sitemap: sitemaps } = useRuntimeConfig(e)["nuxt-robots"];
  const generateRobotsTxtCtx = {
    event: e,
    context: e ? "robots.txt" : "init",
    ...JSON.parse(JSON.stringify({ groups, sitemaps }))
  };
  await nitro.hooks.callHook("robots:config", generateRobotsTxtCtx);
  nitro._robots.ctx = generateRobotsTxtCtx;
  return generateRobotsTxtCtx;
}

const _gTAbDQfC2u = defineNitroPlugin(async (nitroApp) => {
  const { usingNuxtContent, robotsDisabledValue } = useRuntimeConfig()["nuxt-robots"];
  nitroApp._robots = {};
  await resolveRobotsTxtContext(void 0, nitroApp);
  const nuxtContentUrls = /* @__PURE__ */ new Set();
  if (usingNuxtContent) {
    let urls;
    try {
      urls = await (await nitroApp.localFetch("/__robots__/nuxt-content.json", {})).json();
    } catch (e) {
      logger$1.error("Failed to read robot rules from content files.", e);
    }
    if (urls && Array.isArray(urls) && urls.length) {
      urls.forEach((url) => nuxtContentUrls.add(withoutTrailingSlash(url)));
    }
  }
  if (nuxtContentUrls.size) {
    nitroApp._robots.nuxtContentUrls = nuxtContentUrls;
  }
});

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function pascalCase(str, opts) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => upperFirst(p)).join("") : "";
}
function camelCase(str, opts) {
  return lowerFirst(pascalCase(str || ""));
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}
const titleCaseExceptions = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;
function titleCase(str, opts) {
  return (Array.isArray(str) ? str : splitByCase(str)).filter(Boolean).map(
    (p) => titleCaseExceptions.test(p) ? p.toLowerCase() : upperFirst(p)
  ).join(" ");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "731b6728-fb6d-4753-add3-b7f7043fd644",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/sitemap.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "redirect": {
          "to": "/sitemap_index.xml",
          "statusCode": 307
        }
      },
      "/sitemap_index.xml": {
        "swr": 600,
        "cache": {
          "swr": true,
          "maxAge": 600,
          "varies": [
            "X-Forwarded-Host",
            "X-Forwarded-Proto",
            "Host"
          ]
        }
      },
      "/__sitemap__/0.xml": {
        "swr": 600,
        "cache": {
          "swr": true,
          "maxAge": 600,
          "varies": [
            "X-Forwarded-Host",
            "X-Forwarded-Proto",
            "Host"
          ]
        }
      },
      "/_nuxt": {
        "robots": "noindex",
        "headers": {
          "X-Robots-Tag": "noindex"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable",
          "X-Robots-Tag": "noindex"
        },
        "robots": "noindex"
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "strapiBaseUrl": "http://localhost:1337",
    "seo-utils": {
      "canonicalQueryWhitelist": [
        "page",
        "sort",
        "filter",
        "search",
        "q",
        "category",
        "tag"
      ]
    }
  },
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": true,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 600,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "minify": false,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "sitemapsPathPrefix": "/__sitemap__/",
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "7.0.2",
    "sitemaps": {
      "0": {
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "path": "/sitemap.xml",
        "routes": [
          "/api/sitemaps",
          "/api/blogs"
        ],
        "sitemapName": "0",
        "_route": "/__sitemap__/0.xml"
      },
      "index": {
        "sitemapName": "index",
        "_route": "sitemap_index.xml",
        "sitemaps": [],
        "include": [],
        "exclude": []
      }
    }
  },
  "nuxt-schema-org": {
    "reactive": false,
    "minify": true,
    "scriptAttributes": {
      "data-nuxt-schema-org": true
    },
    "identity": "",
    "version": "4.0.4"
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "agon-nuxt",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt-app"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "http://localhost:3000/",
        "name": "My Awesome Website"
      },
      {
        "_context": "buildEnv",
        "_priority": -1,
        "url": "http://localhost:1337",
        "name": "Agon"
      }
    ],
    "version": "3.0.6",
    "debug": false
  },
  "nuxt-robots": {
    "version": "5.1.0",
    "usingNuxtContent": false,
    "debug": false,
    "credits": true,
    "groups": [
      {
        "userAgent": [
          "*"
        ],
        "disallow": [
          ""
        ],
        "allow": [],
        "_indexable": true,
        "_rules": []
      }
    ],
    "sitemap": [
      "/sitemap_index.xml"
    ],
    "header": true,
    "robotsEnabledValue": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "robotsDisabledValue": "noindex, nofollow",
    "cacheControl": "max-age=14400, must-revalidate"
  },
  "nuxt-og-image": {
    "version": "4.0.2",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "renderer": "satori",
      "component": "NuxtSeo",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": false,
    "baseCacheKey": "/cache/nuxt-og-image/4.0.2",
    "fonts": [
      {
        "cacheKey": "Inter:400",
        "style": "normal",
        "weight": 400,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-400.ttf.base64"
      },
      {
        "cacheKey": "Inter:700",
        "style": "normal",
        "weight": 700,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-700.ttf.base64"
      }
    ],
    "hasNuxtIcon": false,
    "colorPreference": "light",
    "hasNuxtContent": false,
    "strictNuxtContentPaths": "",
    "isNuxtContentDocumentDriven": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": "../public"
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function defineNitroPlugin(def) {
  return def;
}

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === "undefined") {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$2 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$2,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter(
        (key) => key.startsWith(base) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {
  ["nuxt-og-image:fonts:Inter-400.ttf.base64"]: {
    import: () => import('../raw/Inter-400.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"652cc-qEeSD1DXCSV8gPP2rnBA6ePGdZ4\"","mtime":"2025-01-17T16:23:11.220Z"}
  },
  ["nuxt-og-image:fonts:Inter-700.ttf.base64"]: {
    import: () => import('../raw/Inter-700.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"674f0-FZReUXHhPTnY0HmYVn2iPpKm9ds\"","mtime":"2025-01-17T16:23:11.220Z"}
  }
};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$2(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$2(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME$1 = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME$1, "base");
  }
  opts.base = resolve$2(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME$1,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME$1,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/chetandhargalkar/Desktop/github/template-nuxt-with-strapi/agon-nuxt/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function baseURL() {
  return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const defineSitemapEventHandler = defineEventHandler;

function getSiteIndexable(e) {
  const { env, indexable } = useSiteConfig(e);
  if (typeof indexable !== "undefined")
    return String(indexable) === "true";
  return env === "production";
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  let protocol = cert && key || !false ? "https" : "http";
  if (e) {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  return !!(lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}
function withSiteUrl(e, path, options = {}) {
  const siteConfig = e.context.siteConfig?.get();
  let siteUrl = e.context.siteConfigNitroOrigin;
  if ((options.canonical !== false || false) && siteConfig.url)
    siteUrl = siteConfig.url;
  return resolveSitePath(path, {
    absolute: true,
    siteUrl,
    trailingSlash: siteConfig.trailingSlash,
    base: e.context.nitro.baseURL,
    withBase: options.withBase
  });
}

function matches(pattern, path) {
  const pathLength = path.length;
  const patternLength = pattern.length;
  const matchingLengths = Array.from({ length: pathLength + 1 }).fill(0);
  let numMatchingLengths = 1;
  let p = 0;
  while (p < patternLength) {
    if (pattern[p] === "$" && p + 1 === patternLength) {
      return matchingLengths[numMatchingLengths - 1] === pathLength;
    }
    if (pattern[p] === "*") {
      numMatchingLengths = pathLength - matchingLengths[0] + 1;
      for (let i = 1; i < numMatchingLengths; i++) {
        matchingLengths[i] = matchingLengths[i - 1] + 1;
      }
    } else {
      let numMatches = 0;
      for (let i = 0; i < numMatchingLengths; i++) {
        const matchLength = matchingLengths[i];
        if (matchLength < pathLength && path[matchLength] === pattern[p]) {
          matchingLengths[numMatches++] = matchLength + 1;
        }
      }
      if (numMatches === 0) {
        return false;
      }
      numMatchingLengths = numMatches;
    }
    p++;
  }
  return true;
}
function matchPathToRule(path, _rules) {
  let matchedRule = null;
  const rules = _rules.filter(Boolean);
  const rulesLength = rules.length;
  let i = 0;
  while (i < rulesLength) {
    const rule = rules[i];
    if (!matches(rule.pattern, path)) {
      i++;
      continue;
    }
    if (!matchedRule || rule.pattern.length > matchedRule.pattern.length) {
      matchedRule = rule;
    } else if (rule.pattern.length === matchedRule.pattern.length && rule.allow && !matchedRule.allow) {
      matchedRule = rule;
    }
    i++;
  }
  return matchedRule;
}
function asArray(v) {
  return typeof v === "undefined" ? [] : Array.isArray(v) ? v : [v];
}
function generateRobotsTxt({ groups, sitemaps }) {
  const lines = [];
  for (const group of groups) {
    for (const comment of group.comment || [])
      lines.push(`# ${comment}`);
    for (const userAgent of group.userAgent || ["*"])
      lines.push(`User-agent: ${userAgent}`);
    for (const allow of group.allow || [])
      lines.push(`Allow: ${allow}`);
    for (const disallow of group.disallow || [])
      lines.push(`Disallow: ${disallow}`);
    for (const cleanParam of group.cleanParam || [])
      lines.push(`Clean-param: ${cleanParam}`);
    lines.push("");
  }
  for (const sitemap of sitemaps)
    lines.push(`Sitemap: ${sitemap}`);
  return lines.join("\n");
}
function normaliseRobotsRouteRule(config) {
  let allow;
  if (typeof config.robots === "boolean")
    allow = config.robots;
  else if (typeof config.robots === "object" && typeof config.robots.indexable !== "undefined")
    allow = config.robots.indexable;
  let rule;
  if (typeof config.robots === "object" && typeof config.robots.rule !== "undefined")
    rule = config.robots.rule;
  else if (typeof config.robots === "string")
    rule = config.robots;
  if (rule && !allow)
    allow = rule !== "none" && !rule.includes("noindex");
  if (typeof allow === "undefined" && typeof rule === "undefined")
    return;
  return {
    allow,
    rule
  };
}

function withoutQuery$2(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher$2() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter$1({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery$2(path)), app.baseURL)
    ).reverse());
  };
}

function getSiteRobotConfig(e) {
  const query = getQuery(e);
  const hints = [];
  const { groups, debug } = useRuntimeConfig(e)["nuxt-robots"];
  let indexable = getSiteIndexable(e);
  const queryIndexableEnabled = String(query.mockProductionEnv) === "true" || query.mockProductionEnv === "";
  if (debug || false) {
    const { _context } = useSiteConfig(e, { debug: debug || false });
    if (queryIndexableEnabled) {
      indexable = true;
      hints.push("You are mocking a production enviroment with ?mockProductionEnv query.");
    } else if (!indexable && _context.indexable === "nuxt-robots:config") {
      hints.push("You are blocking indexing with your Nuxt Robots config.");
    } else if (!queryIndexableEnabled && !_context.indexable) {
      hints.push(`Indexing is blocked in development. You can mock a production environment with ?mockProductionEnv query.`);
    } else if (!indexable && !queryIndexableEnabled) {
      hints.push(`Indexing is blocked by site config set by ${_context.indexable}.`);
    } else if (indexable && !queryIndexableEnabled) {
      hints.push(`Indexing is enabled from ${_context.indexable}.`);
    }
  }
  if (groups.some((g) => g.userAgent.includes("*") && g.disallow.includes("/"))) {
    indexable = false;
    hints.push("You are blocking all user agents with a wildcard `Disallow /`.");
  } else if (groups.some((g) => g.disallow.includes("/"))) {
    hints.push("You are blocking specific user agents with `Disallow /`.");
  }
  return { indexable, hints };
}

function getPathRobotConfig(e, options) {
  const { robotsDisabledValue, robotsEnabledValue, usingNuxtContent } = useRuntimeConfig()["nuxt-robots"];
  if (!options?.skipSiteIndexable) {
    if (!getSiteRobotConfig(e).indexable) {
      return {
        rule: robotsDisabledValue,
        indexable: false
      };
    }
  }
  const path = options?.path || e.path;
  let userAgent = options?.userAgent;
  if (!userAgent) {
    try {
      userAgent = getRequestHeader(e, "User-Agent");
    } catch {
    }
  }
  const nitroApp = useNitroApp();
  const groups = [
    // run explicit user agent matching first
    ...nitroApp._robots.ctx.groups.filter((g) => {
      if (userAgent) {
        return g.userAgent.some((ua) => ua.toLowerCase().includes(userAgent.toLowerCase()));
      }
      return false;
    }),
    // run wildcard matches second
    ...nitroApp._robots.ctx.groups.filter((g) => g.userAgent.includes("*"))
  ];
  for (const group of groups) {
    if (!group._indexable) {
      return {
        indexable: false,
        rule: robotsDisabledValue,
        debug: {
          source: "/robots.txt",
          line: `Disallow: /`
        }
      };
    }
    const robotsTxtRule = matchPathToRule(path, group._rules);
    if (robotsTxtRule) {
      if (!robotsTxtRule.allow) {
        return {
          indexable: false,
          rule: robotsDisabledValue,
          debug: {
            source: "/robots.txt",
            line: `Disallow: ${robotsTxtRule.pattern}`
          }
        };
      }
      break;
    }
  }
  if (usingNuxtContent && nitroApp._robots?.nuxtContentUrls?.has(withoutTrailingSlash(path))) {
    return {
      indexable: false,
      rule: robotsDisabledValue,
      debug: {
        source: "Nuxt Content"
      }
    };
  }
  nitroApp._robotsRuleMactcher = nitroApp._robotsRuleMactcher || createNitroRouteRuleMatcher$2();
  const routeRules = normaliseRobotsRouteRule(nitroApp._robotsRuleMactcher(path));
  if (routeRules && (typeof routeRules.allow !== "undefined" || typeof routeRules.rule !== "undefined")) {
    return {
      indexable: routeRules.allow,
      rule: routeRules.rule || (routeRules.allow ? robotsEnabledValue : robotsDisabledValue),
      debug: {
        source: "Route Rules"
      }
    };
  }
  return {
    indexable: true,
    rule: robotsEnabledValue
  };
}

const DRIVER_NAME = "lru-cache";
const lruCacheDriver = defineDriver((opts = {}) => {
  const cache = new LRUCache({
    max: 1e3,
    sizeCalculation: opts.maxSize || opts.maxEntrySize ? (value, key) => {
      return key.length + byteLength(value);
    } : void 0,
    ...opts
  });
  return {
    name: DRIVER_NAME,
    options: opts,
    getInstance: () => cache,
    hasItem(key) {
      return cache.has(key);
    },
    getItem(key) {
      return cache.get(key) ?? null;
    },
    getItemRaw(key) {
      return cache.get(key) ?? null;
    },
    setItem(key, value) {
      cache.set(key, value);
    },
    setItemRaw(key, value) {
      cache.set(key, value);
    },
    removeItem(key) {
      cache.delete(key);
    },
    getKeys() {
      return [...cache.keys()];
    },
    clear() {
      cache.clear();
    },
    dispose() {
      cache.clear();
    }
  };
});
function byteLength(value) {
  if (typeof Buffer !== "undefined") {
    try {
      return Buffer.byteLength(value);
    } catch {
    }
  }
  try {
    return typeof value === "string" ? value.length : JSON.stringify(value).length;
  } catch {
  }
  return 0;
}

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 50 })
});
const fontCache = createStorage({
  driver: lruCacheDriver({ max: 10 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});

function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon"
  };
  for (const s in signatures) {
    if (data.indexOf(s) === 0)
      return signatures[s];
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function normaliseFontInput(fonts) {
  return fonts.map((f) => {
    if (typeof f === "string") {
      const [name, weight] = f.split(":");
      return {
        cacheKey: f,
        name,
        weight: weight || 400,
        style: "normal",
        path: void 0
      };
    }
    return {
      cacheKey: f.key || `${f.name}:${f.weight}`,
      style: "normal",
      weight: 400,
      ...f
    };
  });
}

const theme = {};

function useOgImageRuntimeConfig() {
  const c = useRuntimeConfig();
  return {
    ...c["nuxt-og-image"],
    app: {
      baseURL: c.app.baseURL
    }
  };
}

function htmlDecodeQuotes(html) {
  return html.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");
}
function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&cent;/g, "\xA2").replace(/&pound;/g, "\xA3").replace(/&yen;/g, "\xA5").replace(/&euro;/g, "\u20AC").replace(/&copy;/g, "\xA9").replace(/&reg;/g, "\xAE").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#(\d+);/g, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  });
}
function decodeObjectHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string")
      obj[key] = decodeHtml(value);
  });
  return obj;
}

function fetchIsland(e, component, props) {
  const hashId = hash([component, props]);
  return e.$fetch(`/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    }
  });
}
function withoutQuery$1(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher$1() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter$1({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery$1(path)), app.baseURL)
    ).reverse());
  };
}

const logger = createConsola({
  defaults: {
    tag: "Nuxt OG Image"
  }
});

const componentNames = [{"hash":"eQ6ZSzmuSi","pascalName":"BrandedLogo","kebabName":"branded-logo","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"urK4vBHedV","pascalName":"Frame","kebabName":"frame","category":"community","credits":"@arashsheyda <https://github.com/arashsheyda>"},{"hash":"25HYRU2CwN","pascalName":"Nuxt","kebabName":"nuxt","category":"community","credits":"NuxtLabs <https://nuxtlabs.com/>"},{"hash":"QQP0wDr3q7","pascalName":"NuxtSeo","kebabName":"nuxt-seo","category":"community","credits":"Nuxt SEO <https://nuxtseo.com/>"},{"hash":"Ti15ewGcfK","pascalName":"Pergel","kebabName":"pergel","category":"community","credits":"Pergel <https://nuxtlabs.com/>"},{"hash":"mpvrSL80TM","pascalName":"SimpleBlog","kebabName":"simple-blog","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"PdTiW3yQ0N","pascalName":"UnJs","kebabName":"un-js","category":"community","credits":"UnJS <https://unjs.io/>"},{"hash":"dxElbCCT8d","pascalName":"Wave","kebabName":"wave","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"GANho8xkgv","pascalName":"WithEmoji","kebabName":"with-emoji","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"}];

function normaliseOptions(_options) {
  const options = { ..._options };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = componentNames[0]?.pascalName;
  }
  return options;
}

const satoriRendererInstance = { instance: void 0 };
const chromiumRendererInstance = { instance: void 0 };
async function useSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await import('../_/renderer.mjs').then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function useChromiumRenderer() {
  chromiumRendererInstance.instance = chromiumRendererInstance.instance || await Promise.resolve().then(function () { return empty$1; }).then((m) => m.default);
  return chromiumRendererInstance.instance;
}

function resolvePathCacheKey(e, path) {
  const siteConfig = e.context.siteConfig.get();
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey$1(path)));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash([
      basePath,
      siteConfig.url,
      hash(getQuery(e))
    ])
  ].join(":");
}
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig();
  const resolvePathWithBase = createSitePathResolver(e, {
    absolute: false,
    withBase: true
  });
  const path = resolvePathWithBase(parseURL(e.path).pathname);
  const extension = path.split(".").pop();
  if (!extension) {
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Missing OG Image type.`
    });
  }
  if (!["png", "jpeg", "jpg", "svg", "html", "json"].includes(extension)) {
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Unknown OG Image type ${extension}.`
    });
  }
  let queryParams = { ...getQuery(e) };
  queryParams.props = JSON.parse(queryParams.props || "{}");
  queryParams = separateProps(queryParams);
  let basePath = withoutTrailingSlash(
    path.replace(`/__og-image__/image`, "").replace(`/__og-image__/static`, "").replace(`/og.${extension}`, "")
  );
  if (queryParams._query)
    basePath = withQuery(basePath, JSON.parse(queryParams._query));
  const isDebugJsonPayload = extension === "json" && runtimeConfig.debug;
  const key = resolvePathCacheKey(e, basePath);
  let options = queryParams.options;
  if (!options) {
    if (!options) {
      const payload = await fetchPathHtmlAndExtractOptions(e, basePath, key);
      if (payload instanceof Error)
        return payload;
      options = payload;
    }
  }
  delete queryParams.options;
  const routeRuleMatcher = createNitroRouteRuleMatcher$1();
  const routeRules = routeRuleMatcher(basePath);
  if (typeof routeRules.ogImage === "undefined" && !options) {
    return createError$1({
      statusCode: 400,
      statusMessage: "The route is missing the Nuxt OG Image payload or route rules."
    });
  }
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  options = defu(queryParams, options, ogImageRouteRules, runtimeConfig.defaults);
  if (!options) {
    return createError$1({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  let renderer;
  switch (options.renderer) {
    case "satori":
      renderer = await useSatoriRenderer();
      break;
    case "chromium":
      renderer = await useChromiumRenderer();
      break;
  }
  if (!renderer || renderer.__unenv__) {
    throw createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer ${options.renderer} is missing.`
    });
  }
  const unocss = await createGenerator({ theme }, {
    presets: [
      presetWind()
    ]
  });
  const ctx = {
    unocss,
    e,
    key,
    renderer,
    isDebugJsonPayload,
    runtimeConfig,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normaliseOptions(options),
    _nitro: useNitroApp()
  };
  await ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx);
  return ctx;
}
const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function getPayloadFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  return match ? match[1] : null;
}
function extractAndNormaliseOgImageOptions(html) {
  const _payload = getPayloadFromHtml(html);
  if (!_payload)
    return false;
  let options = false;
  try {
    const payload2 = parse(_payload);
    Object.entries(payload2).forEach(([key, value]) => {
      if (!value)
        delete payload2[key];
    });
    options = payload2;
  } catch (e) {
  }
  if (!options)
    return false;
  if (typeof options.props?.description === "undefined") {
    const description = html.match(/<meta[^>]+name="description"[^>]*>/)?.[0];
    if (description) {
      const [, content] = description.match(/content="([^"]+)"/) || [];
      if (content && !options.props.description)
        options.props.description = content;
    }
  }
  const payload = decodeObjectHtmlEntities(options);
  return payload;
}
async function doFetchWithErrorHandling(fetch, path) {
  const res = await fetch(path, {
    redirect: "follow",
    headers: {
      accept: "text/html"
    }
  }).catch((err) => {
    return err;
  });
  let errorDescription;
  if (res.status >= 300 && res.status < 400) {
    if (res.headers.has("location")) {
      return await doFetchWithErrorHandling(fetch, res.headers.get("location") || "");
    }
    errorDescription = `${res.status} redirected to ${res.headers.get("location") || "unknown"}`;
  } else if (res.status >= 400) {
    errorDescription = `${res.status} error: ${res.statusText}`;
  }
  if (errorDescription) {
    return [null, createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to parse \`${path}\` for og-image extraction. ${errorDescription}`
    })];
  }
  return [res._data || await res.text(), null];
}
async function fetchPathHtmlAndExtractOptions(e, path, key) {
  const cachedHtmlPayload = await htmlPayloadCache.getItem(key);
  if (cachedHtmlPayload && cachedHtmlPayload.expiresAt < Date.now())
    return cachedHtmlPayload.value;
  let _payload = null;
  let [html, err] = await doFetchWithErrorHandling(e.fetch, path);
  if (err) {
    logger.warn(err);
  } else {
    _payload = getPayloadFromHtml(html);
  }
  if (!_payload) {
    const [fallbackHtml, err2] = await doFetchWithErrorHandling(globalThis.$fetch.raw, path);
    if (err2) {
      return err2;
    }
    _payload = getPayloadFromHtml(fallbackHtml);
    if (_payload) {
      html = fallbackHtml;
    }
  }
  if (!html) {
    return createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction, returning no HTML.`
    });
  }
  if (!_payload) {
    return createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] HTML response from ${path} is missing the #nuxt-og-image-options script tag. Check you have used defined an og image for this page.`
    });
  }
  const payload = extractAndNormaliseOgImageOptions(html);
  if (payload) {
    await htmlPayloadCache.setItem(key, {
      // 60 minutes for prerender, 10 seconds for runtime
      expiresAt: Date.now() + 1e3 * (10),
      value: payload
    });
  }
  return payload;
}

const _NdDbnvBUNw = defineNitroPlugin(async (nitro) => {
  return;
});

const plugins = [
  _U1nCZ08IZ3,
_gTAbDQfC2u,
_NdDbnvBUNw
];

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-X2As+kYKTdqGyBhe9dWmrsMQ3Hc\"",
    "mtime": "2025-01-17T16:23:16.511Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2025-01-17T16:23:16.510Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/assets/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-jwNZMV6Y9x2y8pxluMI2BkKlQxw\"",
    "mtime": "2025-01-17T16:23:16.461Z",
    "size": 6148,
    "path": "../public/assets/.DS_Store"
  },
  "/_nuxt/0g1ExgQM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"88-pwuLsuckkyZVEJrOMCnNCbfXFaM\"",
    "mtime": "2025-01-17T16:23:16.437Z",
    "size": 136,
    "path": "../public/_nuxt/0g1ExgQM.js"
  },
  "/_nuxt/883TfLbd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bd0-TD646nd+cYk62/jSL7G02vSoZas\"",
    "mtime": "2025-01-17T16:23:16.437Z",
    "size": 3024,
    "path": "../public/_nuxt/883TfLbd.js"
  },
  "/_nuxt/B0dioNK6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"90d7-MDg6sbo5aKS2ltSiPlY8UBdjoiA\"",
    "mtime": "2025-01-17T16:23:16.437Z",
    "size": 37079,
    "path": "../public/_nuxt/B0dioNK6.js"
  },
  "/_nuxt/B6EAmfwl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c193-iSP31Jxaep9t+gCLjLShi/Nf8Ko\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 180627,
    "path": "../public/_nuxt/B6EAmfwl.js"
  },
  "/_nuxt/BMSQkwth.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"192ca-FmFnBd1Elz9l3EWOJBEz/cnEjzY\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 103114,
    "path": "../public/_nuxt/BMSQkwth.js"
  },
  "/_nuxt/BMu_2FUy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2253-OIEuYQcfcyljVVL6bs6fNIPkqas\"",
    "mtime": "2025-01-17T16:23:16.437Z",
    "size": 8787,
    "path": "../public/_nuxt/BMu_2FUy.js"
  },
  "/_nuxt/BS9vUCMp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4fc-mkQCvM4Cx8gGM3ewvb7LE3bq3aw\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 1276,
    "path": "../public/_nuxt/BS9vUCMp.js"
  },
  "/_nuxt/BTLhlpuh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"749-06XhP9fgGE3c1BcGhcx9sH2LkBU\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 1865,
    "path": "../public/_nuxt/BTLhlpuh.js"
  },
  "/_nuxt/BdSRZ9cX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"942-eI3sZJPn1j27O544Rwmy2ufKagY\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 2370,
    "path": "../public/_nuxt/BdSRZ9cX.js"
  },
  "/_nuxt/Bj1pOTB7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d9e-6ofUe8SIh2FoKo7E5sNNKZcIpL4\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 3486,
    "path": "../public/_nuxt/Bj1pOTB7.js"
  },
  "/_nuxt/Bs9pK5_u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"62-1ObNjm12HufB3SRHe84IqhgEmVY\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 98,
    "path": "../public/_nuxt/Bs9pK5_u.js"
  },
  "/_nuxt/CJ96Qvug.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bdc-mPDY+asTLVj1dOGO/p5eOkZbKVI\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 3036,
    "path": "../public/_nuxt/CJ96Qvug.js"
  },
  "/_nuxt/CXktLXly.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6d-tq6+stvLFZDeZo4K7ucJqlpT664\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 2669,
    "path": "../public/_nuxt/CXktLXly.js"
  },
  "/_nuxt/C_7tFiQk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"84a-agmQDCTPbJ+LLX4VvV9Hwd0U88U\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 2122,
    "path": "../public/_nuxt/C_7tFiQk.js"
  },
  "/_nuxt/CgKCc2BT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"649-uOOZ+75NZjpGDqBEqVO6VCz5lrc\"",
    "mtime": "2025-01-17T16:23:16.438Z",
    "size": 1609,
    "path": "../public/_nuxt/CgKCc2BT.js"
  },
  "/_nuxt/Chivo-400-1.CrhmSof3.woff2": {
    "type": "font/woff2",
    "etag": "\"2154-vv8O0YJpvCvaMkjYba6rLQULA00\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 8532,
    "path": "../public/_nuxt/Chivo-400-1.CrhmSof3.woff2"
  },
  "/_nuxt/Chivo-400-2.B-2le7jD.woff2": {
    "type": "font/woff2",
    "etag": "\"5780-EzaaIza3YWaSeDdiIXkrq4A2pNQ\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 22400,
    "path": "../public/_nuxt/Chivo-400-2.B-2le7jD.woff2"
  },
  "/_nuxt/Chivo-400-3.CoSD1mnE.woff2": {
    "type": "font/woff2",
    "etag": "\"79f0-RCyNmLhxkNCTffui5VtQC/yKldg\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 31216,
    "path": "../public/_nuxt/Chivo-400-3.CoSD1mnE.woff2"
  },
  "/_nuxt/D3ehjrAP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1782-56WvWrmHzc48A48cM6aEpZOGS3Q\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 6018,
    "path": "../public/_nuxt/D3ehjrAP.js"
  },
  "/_nuxt/D3xk1utv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7ee-URWQyP6Sxn0nQ+Z5ESSppJnPOWU\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 2030,
    "path": "../public/_nuxt/D3xk1utv.js"
  },
  "/_nuxt/DCETTChD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a72-1hw48JJZmiOY2GG66Z8+SMw1ibA\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 2674,
    "path": "../public/_nuxt/DCETTChD.js"
  },
  "/_nuxt/DNQBTSBF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"778-fjamERGhU12711PwchnDjXX3u3M\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 1912,
    "path": "../public/_nuxt/DNQBTSBF.js"
  },
  "/_nuxt/DNwIjKr6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2076-eP46M1o0MakBVmqfmQTLJz7NkjY\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 8310,
    "path": "../public/_nuxt/DNwIjKr6.js"
  },
  "/_nuxt/DQs6pZrZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aff-diBpzeoJTrMl3ZDjixJUO+zqsnI\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 2815,
    "path": "../public/_nuxt/DQs6pZrZ.js"
  },
  "/_nuxt/DcaVJrWq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"192-R6SQWbXHCmBLbZ5UkpYyZhVIs9M\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 402,
    "path": "../public/_nuxt/DcaVJrWq.js"
  },
  "/_nuxt/DdQ5i_lm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f208-XNybIUh6Q+FfsHuDHSa6PPjT2SY\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 127496,
    "path": "../public/_nuxt/DdQ5i_lm.js"
  },
  "/_nuxt/DhxD9Wce.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3454-ixvK7/t8wYcx+i/Z1k4UrjfDy+4\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 13396,
    "path": "../public/_nuxt/DhxD9Wce.js"
  },
  "/_nuxt/DntK8MtO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d8-BvDWdlP5Y1t504hJWQjDzI6sYSQ\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 984,
    "path": "../public/_nuxt/DntK8MtO.js"
  },
  "/_nuxt/DpU3xw49.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15e5-Cm6CPcwhBPbx7n+Dh55YOqr94MQ\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 5605,
    "path": "../public/_nuxt/DpU3xw49.js"
  },
  "/_nuxt/DyYkU_50.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"240f-b+cVBaYrryj1ja4lj5s8kKeNI7o\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 9231,
    "path": "../public/_nuxt/DyYkU_50.js"
  },
  "/_nuxt/ModalVideo.DnGWXVPb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6a6-EDX3i8d2psPIQ2rV9CfAeKj7+jg\"",
    "mtime": "2025-01-17T16:23:16.439Z",
    "size": 1702,
    "path": "../public/_nuxt/ModalVideo.DnGWXVPb.css"
  },
  "/_nuxt/Noto_Sans-400-10.DSNfmdVt.woff2": {
    "type": "font/woff2",
    "etag": "\"11418-sKTLIZoXzIBjSTe9VzwTwmyHJkY\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 70680,
    "path": "../public/_nuxt/Noto_Sans-400-10.DSNfmdVt.woff2"
  },
  "/_nuxt/Noto_Sans-400-11.B2hlT84T.woff2": {
    "type": "font/woff2",
    "etag": "\"4e70-baY9oqNAAGLzrUqjsJbSouNi6NE\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 20080,
    "path": "../public/_nuxt/Noto_Sans-400-11.B2hlT84T.woff2"
  },
  "/_nuxt/Noto_Sans-400-12.Cv-Vwajv.woff2": {
    "type": "font/woff2",
    "etag": "\"183a4-4xybtPc2JA3CMblthrRXKCl/Pxs\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 99236,
    "path": "../public/_nuxt/Noto_Sans-400-12.Cv-Vwajv.woff2"
  },
  "/_nuxt/Noto_Sans-400-13.12T8GTDR.woff2": {
    "type": "font/woff2",
    "etag": "\"2a08-+Wma/McVBYuhtGWzOXAcnaHGKwM\"",
    "mtime": "2025-01-17T16:23:16.441Z",
    "size": 10760,
    "path": "../public/_nuxt/Noto_Sans-400-13.12T8GTDR.woff2"
  },
  "/_nuxt/Noto_Sans-400-14.Ymb6dZNd.woff2": {
    "type": "font/woff2",
    "etag": "\"5510-IPC01UZm3pMiXWXoXyQsPUJD/8U\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 21776,
    "path": "../public/_nuxt/Noto_Sans-400-14.Ymb6dZNd.woff2"
  },
  "/_nuxt/Noto_Sans-400-15.DLTJy58D.woff2": {
    "type": "font/woff2",
    "etag": "\"3878-C0NkRm+MPjcZOrdEsIJKiURYMQs\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 14456,
    "path": "../public/_nuxt/Noto_Sans-400-15.DLTJy58D.woff2"
  },
  "/_nuxt/Noto_Sans-400-16.W1qJv59z.woff2": {
    "type": "font/woff2",
    "etag": "\"29018-LChaD++Z6MzFnLx3YLP5AZ337Qs\"",
    "mtime": "2025-01-17T16:23:16.441Z",
    "size": 167960,
    "path": "../public/_nuxt/Noto_Sans-400-16.W1qJv59z.woff2"
  },
  "/_nuxt/Noto_Sans-400-17.BWf1rMYL.woff2": {
    "type": "font/woff2",
    "etag": "\"8c00-D54Z7MHYl1j9WdGH81tac+SZ60U\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 35840,
    "path": "../public/_nuxt/Noto_Sans-400-17.BWf1rMYL.woff2"
  },
  "/_nuxt/PPzXPIu2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"186d-cI6v56hAj1RPFw3SHtX2d4ATYEQ\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 6253,
    "path": "../public/_nuxt/PPzXPIu2.js"
  },
  "/_nuxt/XMbOVHgP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1286-9rjB5TYjTCVnohcaN+zqievBcqY\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 4742,
    "path": "../public/_nuxt/XMbOVHgP.js"
  },
  "/_nuxt/eDDVTN_8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b77-t/Bm3lnbkVnSt8U1IO3EKaUb+BE\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 2935,
    "path": "../public/_nuxt/eDDVTN_8.js"
  },
  "/_nuxt/gGIK12fn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1115-RhNqnYtSHeeXDGlX2FNWnX8yV0o\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 4373,
    "path": "../public/_nuxt/gGIK12fn.js"
  },
  "/_nuxt/veFiVb9Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5c-64cOhEsEtGBZeHmtDnQ6BvSQPkk\"",
    "mtime": "2025-01-17T16:23:16.440Z",
    "size": 2908,
    "path": "../public/_nuxt/veFiVb9Q.js"
  },
  "/css/main.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3a-LQWZHFEeme3AhP9lide+xCa6Yg4\"",
    "mtime": "2025-01-17T16:23:16.510Z",
    "size": 58,
    "path": "../public/css/main.css"
  },
  "/css/nuxt-google-fonts.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4138-9Zb7RB+OnOvYiPhpUV34yLBYWCg\"",
    "mtime": "2025-01-17T16:23:16.430Z",
    "size": 16696,
    "path": "../public/css/nuxt-google-fonts.css"
  },
  "/fonts/Chivo-400-1.woff2": {
    "type": "font/woff2",
    "etag": "\"2154-vv8O0YJpvCvaMkjYba6rLQULA00\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 8532,
    "path": "../public/fonts/Chivo-400-1.woff2"
  },
  "/fonts/Chivo-400-2.woff2": {
    "type": "font/woff2",
    "etag": "\"5780-EzaaIza3YWaSeDdiIXkrq4A2pNQ\"",
    "mtime": "2025-01-17T16:23:16.430Z",
    "size": 22400,
    "path": "../public/fonts/Chivo-400-2.woff2"
  },
  "/fonts/Chivo-400-3.woff2": {
    "type": "font/woff2",
    "etag": "\"79f0-RCyNmLhxkNCTffui5VtQC/yKldg\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 31216,
    "path": "../public/fonts/Chivo-400-3.woff2"
  },
  "/fonts/Noto_Sans-400-10.woff2": {
    "type": "font/woff2",
    "etag": "\"11418-sKTLIZoXzIBjSTe9VzwTwmyHJkY\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 70680,
    "path": "../public/fonts/Noto_Sans-400-10.woff2"
  },
  "/fonts/Noto_Sans-400-11.woff2": {
    "type": "font/woff2",
    "etag": "\"4e70-baY9oqNAAGLzrUqjsJbSouNi6NE\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 20080,
    "path": "../public/fonts/Noto_Sans-400-11.woff2"
  },
  "/fonts/Noto_Sans-400-12.woff2": {
    "type": "font/woff2",
    "etag": "\"183a4-4xybtPc2JA3CMblthrRXKCl/Pxs\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 99236,
    "path": "../public/fonts/Noto_Sans-400-12.woff2"
  },
  "/fonts/Noto_Sans-400-13.woff2": {
    "type": "font/woff2",
    "etag": "\"2a08-+Wma/McVBYuhtGWzOXAcnaHGKwM\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 10760,
    "path": "../public/fonts/Noto_Sans-400-13.woff2"
  },
  "/fonts/Noto_Sans-400-14.woff2": {
    "type": "font/woff2",
    "etag": "\"5510-IPC01UZm3pMiXWXoXyQsPUJD/8U\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 21776,
    "path": "../public/fonts/Noto_Sans-400-14.woff2"
  },
  "/fonts/Noto_Sans-400-15.woff2": {
    "type": "font/woff2",
    "etag": "\"3878-C0NkRm+MPjcZOrdEsIJKiURYMQs\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 14456,
    "path": "../public/fonts/Noto_Sans-400-15.woff2"
  },
  "/fonts/Noto_Sans-400-16.woff2": {
    "type": "font/woff2",
    "etag": "\"29018-LChaD++Z6MzFnLx3YLP5AZ337Qs\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 167960,
    "path": "../public/fonts/Noto_Sans-400-16.woff2"
  },
  "/fonts/Noto_Sans-400-17.woff2": {
    "type": "font/woff2",
    "etag": "\"8c00-D54Z7MHYl1j9WdGH81tac+SZ60U\"",
    "mtime": "2025-01-17T16:23:16.431Z",
    "size": 35840,
    "path": "../public/fonts/Noto_Sans-400-17.woff2"
  },
  "/assets/styles/app.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"217a-z1dx6Ln4QF7LeA4CvxX8GQSOIRY\"",
    "mtime": "2025-01-17T16:23:16.461Z",
    "size": 8570,
    "path": "../public/assets/styles/app.min.css"
  },
  "/assets/styles/app.min.css.map": {
    "type": "application/json",
    "etag": "\"65a1-PEJd0dTPHQ3iqEVHgdgfOBLsGG4\"",
    "mtime": "2025-01-17T16:23:16.497Z",
    "size": 26017,
    "path": "../public/assets/styles/app.min.css.map"
  },
  "/assets/styles/tailwind.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13bdf-EKlOW4IOMxFD3PSMaai0bN2BF7I\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 80863,
    "path": "../public/assets/styles/tailwind.min.css"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-CXs89hi4CDokzh8TDNUaj5WJHVM\"",
    "mtime": "2025-01-17T16:23:16.428Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/assets/images/404.png": {
    "type": "image/png",
    "etag": "\"ff6a-GkDltYJBJeS2V/0aDJdXXRjeva8\"",
    "mtime": "2025-01-17T16:23:16.509Z",
    "size": 65386,
    "path": "../public/assets/images/404.png"
  },
  "/assets/images/Apple-button.png": {
    "type": "image/png",
    "etag": "\"8b2-FWCED9vltuuVEid/rwolM/Q4KT8\"",
    "mtime": "2025-01-17T16:23:16.509Z",
    "size": 2226,
    "path": "../public/assets/images/Apple-button.png"
  },
  "/assets/images/Section Hero.png": {
    "type": "image/png",
    "etag": "\"246512-AEaYAix1Qp7yTmUK7/PLjIotveU\"",
    "mtime": "2025-01-17T16:23:16.511Z",
    "size": 2385170,
    "path": "../public/assets/images/Section Hero.png"
  },
  "/assets/images/about-1-bg.png": {
    "type": "image/png",
    "etag": "\"2a35-Ee4MaSWUuALaK4g+aHc6Rwa5888\"",
    "mtime": "2025-01-17T16:23:16.509Z",
    "size": 10805,
    "path": "../public/assets/images/about-1-bg.png"
  },
  "/assets/images/app-block-img.png": {
    "type": "image/png",
    "etag": "\"1e899-5x9Pcva/92whfElVm6YDTtZF8Yg\"",
    "mtime": "2025-01-17T16:23:16.461Z",
    "size": 125081,
    "path": "../public/assets/images/app-block-img.png"
  },
  "/assets/images/avatar-1.png": {
    "type": "image/png",
    "etag": "\"13cc-ZNWxWf+VMPOabYj9wssN3LJdjKM\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 5068,
    "path": "../public/assets/images/avatar-1.png"
  },
  "/assets/images/avatar-10.png": {
    "type": "image/png",
    "etag": "\"2937-LUhLPRfif7vYhv/i6kezXWmD4l8\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 10551,
    "path": "../public/assets/images/avatar-10.png"
  },
  "/assets/images/avatar-11.png": {
    "type": "image/png",
    "etag": "\"2ecd-iu3vB1OvBNvCsvtr/85Yj2ZHKqw\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 11981,
    "path": "../public/assets/images/avatar-11.png"
  },
  "/assets/images/avatar-12.png": {
    "type": "image/png",
    "etag": "\"2769-dabaICuUrzD+hoM7IbLpg0ZULN4\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 10089,
    "path": "../public/assets/images/avatar-12.png"
  },
  "/assets/images/avatar-2.png": {
    "type": "image/png",
    "etag": "\"1a8e-8XhB//lJqRaLI+fAWNqZHV6rdvI\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 6798,
    "path": "../public/assets/images/avatar-2.png"
  },
  "/assets/images/avatar-3.png": {
    "type": "image/png",
    "etag": "\"172d-2MEj5R0uYuTLuGMgwdu5fVLEAZI\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 5933,
    "path": "../public/assets/images/avatar-3.png"
  },
  "/assets/images/avatar-4.png": {
    "type": "image/png",
    "etag": "\"19fc-dAXXJDvgiSQ+RoLX0bGcbvj5zIw\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 6652,
    "path": "../public/assets/images/avatar-4.png"
  },
  "/assets/images/avatar-5.png": {
    "type": "image/png",
    "etag": "\"2184-Vif8tr+NYv3avolNL9SZwxRr7xc\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 8580,
    "path": "../public/assets/images/avatar-5.png"
  },
  "/assets/images/avatar-6.png": {
    "type": "image/png",
    "etag": "\"2f44-0tpxhmlXJjDIxis6UXOQlT1dyug\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 12100,
    "path": "../public/assets/images/avatar-6.png"
  },
  "/assets/images/avatar-7.png": {
    "type": "image/png",
    "etag": "\"2a32-hXj4tACgZQVcHogpV2pjgcoEYoo\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 10802,
    "path": "../public/assets/images/avatar-7.png"
  },
  "/assets/images/avatar-8.png": {
    "type": "image/png",
    "etag": "\"2777-e6bC/9uMnqGbPdz5lRdPhy082hQ\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 10103,
    "path": "../public/assets/images/avatar-8.png"
  },
  "/assets/images/avatar-9.png": {
    "type": "image/png",
    "etag": "\"2299-l6NUL5MOwv8SLVcbSQnLIjKh2V8\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 8857,
    "path": "../public/assets/images/avatar-9.png"
  },
  "/assets/images/banner-ads.png": {
    "type": "image/png",
    "etag": "\"1bdc6-EAwGC1j2jAythtLheMStC3P7+p8\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 114118,
    "path": "../public/assets/images/banner-ads.png"
  },
  "/assets/images/bg.png": {
    "type": "image/png",
    "etag": "\"2a35-Ee4MaSWUuALaK4g+aHc6Rwa5888\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 10805,
    "path": "../public/assets/images/bg.png"
  },
  "/assets/images/blog-1-bg.png": {
    "type": "image/png",
    "etag": "\"26cc-8NnwV4GeB9oNHlwvVTMowM119yw\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 9932,
    "path": "../public/assets/images/blog-1-bg.png"
  },
  "/assets/images/bussiness-card.png": {
    "type": "image/png",
    "etag": "\"c3d5-r2gIx1HYOTxWfOIlpyFkTzpUUn4\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 50133,
    "path": "../public/assets/images/bussiness-card.png"
  },
  "/assets/images/card-1.png": {
    "type": "image/png",
    "etag": "\"13a9-8oUK7K6Qf82TNHVUZMJTrNvi+hg\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 5033,
    "path": "../public/assets/images/card-1.png"
  },
  "/assets/images/card-2.png": {
    "type": "image/png",
    "etag": "\"fa8-GksrwT62nyVRXyEn1z7k1Px3Ww8\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 4008,
    "path": "../public/assets/images/card-2.png"
  },
  "/assets/images/chart-1.png": {
    "type": "image/png",
    "etag": "\"2660-R3R1EOAdJ4miztBOUdUTmJaBfng\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 9824,
    "path": "../public/assets/images/chart-1.png"
  },
  "/assets/images/chart.png": {
    "type": "image/png",
    "etag": "\"2e4d-GtfWTs+A3U5MNQ/yKyX3bEzw1t4\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 11853,
    "path": "../public/assets/images/chart.png"
  },
  "/assets/images/circle-blur-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"255-zHgpYbKk70OVSu/o51ko1VMSsUY\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 597,
    "path": "../public/assets/images/circle-blur-1.svg"
  },
  "/assets/images/circle-blur-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"247-ufGbAvgvzMMHLPMhPKbIc04bPGA\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 583,
    "path": "../public/assets/images/circle-blur-2.svg"
  },
  "/assets/images/destination-1.png": {
    "type": "image/png",
    "etag": "\"2d3a6-cenVbv8CxzOOPGwPMxODCgB6SrQ\"",
    "mtime": "2025-01-17T16:23:16.465Z",
    "size": 185254,
    "path": "../public/assets/images/destination-1.png"
  },
  "/assets/images/destination-2.png": {
    "type": "image/png",
    "etag": "\"27d5c-hIRPHN1X3Z188/fErguEscSJ1AA\"",
    "mtime": "2025-01-17T16:23:16.464Z",
    "size": 163164,
    "path": "../public/assets/images/destination-2.png"
  },
  "/assets/images/destination-3.png": {
    "type": "image/png",
    "etag": "\"31a9f-QCUEEiy0+hKmi0BNAe2JUp57NXg\"",
    "mtime": "2025-01-17T16:23:16.465Z",
    "size": 203423,
    "path": "../public/assets/images/destination-3.png"
  },
  "/assets/images/destination-4.png": {
    "type": "image/png",
    "etag": "\"2ec9e-Im9J6r16AJ7siNdt9tlSC/2rCgA\"",
    "mtime": "2025-01-17T16:23:16.465Z",
    "size": 191646,
    "path": "../public/assets/images/destination-4.png"
  },
  "/assets/images/destination-5.png": {
    "type": "image/png",
    "etag": "\"3e5d7-I3zRXOhwoGaoFXBQQYsKfIlpH44\"",
    "mtime": "2025-01-17T16:23:16.465Z",
    "size": 255447,
    "path": "../public/assets/images/destination-5.png"
  },
  "/assets/images/destination-6.png": {
    "type": "image/png",
    "etag": "\"2799a-XfD07BzAKX/u9xAsYLvEQGKNC0w\"",
    "mtime": "2025-01-17T16:23:16.465Z",
    "size": 162202,
    "path": "../public/assets/images/destination-6.png"
  },
  "/assets/images/faqs-1-bg.png": {
    "type": "image/png",
    "etag": "\"11f787-8f2UW+pL/TbD0AzJhTWTndndlI4\"",
    "mtime": "2025-01-17T16:23:16.469Z",
    "size": 1177479,
    "path": "../public/assets/images/faqs-1-bg.png"
  },
  "/assets/images/google-play.png": {
    "type": "image/png",
    "etag": "\"12af-xAvc9HR/OMTOvgGeX1rtGu85hwE\"",
    "mtime": "2025-01-17T16:23:16.465Z",
    "size": 4783,
    "path": "../public/assets/images/google-play.png"
  },
  "/assets/images/hero-1.png": {
    "type": "image/png",
    "etag": "\"1da4e6-bLlrHxkYkikbV/SZranFENM6C90\"",
    "mtime": "2025-01-17T16:23:16.471Z",
    "size": 1942758,
    "path": "../public/assets/images/hero-1.png"
  },
  "/assets/images/hero-2.png": {
    "type": "image/png",
    "etag": "\"7bf21-+jkdPGTxrL6a4Cv2Rlr62inUiD8\"",
    "mtime": "2025-01-17T16:23:16.467Z",
    "size": 507681,
    "path": "../public/assets/images/hero-2.png"
  },
  "/assets/images/hero-4.png": {
    "type": "image/png",
    "etag": "\"9c323-ucwoQtd+JlzOoXYzmeDoEPtQKNY\"",
    "mtime": "2025-01-17T16:23:16.467Z",
    "size": 639779,
    "path": "../public/assets/images/hero-4.png"
  },
  "/assets/images/hero-5.png": {
    "type": "image/png",
    "etag": "\"2cddd-1yAgov0d8gDrUnLlSho/jLY0V4Y\"",
    "mtime": "2025-01-17T16:23:16.471Z",
    "size": 183773,
    "path": "../public/assets/images/hero-5.png"
  },
  "/assets/images/hero-6.png": {
    "type": "image/png",
    "etag": "\"8b2c4-7WXBZsYH0xQsOC4a/JEGXL9pPV4\"",
    "mtime": "2025-01-17T16:23:16.470Z",
    "size": 570052,
    "path": "../public/assets/images/hero-6.png"
  },
  "/assets/images/hero-7a.png": {
    "type": "image/png",
    "etag": "\"a2314-FAC/yoUgqOqovtSOjEf0omY2fsg\"",
    "mtime": "2025-01-17T16:23:16.471Z",
    "size": 664340,
    "path": "../public/assets/images/hero-7a.png"
  },
  "/assets/images/hero-7b.png": {
    "type": "image/png",
    "etag": "\"6d97b-QJtpxEudPLMFP3YYiFT7B9Vx/I0\"",
    "mtime": "2025-01-17T16:23:16.470Z",
    "size": 448891,
    "path": "../public/assets/images/hero-7b.png"
  },
  "/assets/images/hero-8a.png": {
    "type": "image/png",
    "etag": "\"d1f55-6i1gb3VQpVmDj0WeIX7naTg+TjY\"",
    "mtime": "2025-01-17T16:23:16.473Z",
    "size": 859989,
    "path": "../public/assets/images/hero-8a.png"
  },
  "/assets/images/hero-8b.png": {
    "type": "image/png",
    "etag": "\"d3520-BqMs7DtvwVLJOm8JASJH5qzPvzM\"",
    "mtime": "2025-01-17T16:23:16.472Z",
    "size": 865568,
    "path": "../public/assets/images/hero-8b.png"
  },
  "/assets/images/hero-8c.png": {
    "type": "image/png",
    "etag": "\"cdc52-2wCYW8gAX/Ux1vMELaPfo/KO9OQ\"",
    "mtime": "2025-01-17T16:23:16.475Z",
    "size": 842834,
    "path": "../public/assets/images/hero-8c.png"
  },
  "/assets/images/hero-about-1a.png": {
    "type": "image/png",
    "etag": "\"2ff3f-aUvUVWABa7n7aKrYfH6O0Efyy9g\"",
    "mtime": "2025-01-17T16:23:16.473Z",
    "size": 196415,
    "path": "../public/assets/images/hero-about-1a.png"
  },
  "/assets/images/hero-about-1b.png": {
    "type": "image/png",
    "etag": "\"92a89-qeb7WTWqRYoW5k/9fyFEpiE/e40\"",
    "mtime": "2025-01-17T16:23:16.475Z",
    "size": 600713,
    "path": "../public/assets/images/hero-about-1b.png"
  },
  "/assets/images/hero-about2.png": {
    "type": "image/png",
    "etag": "\"52b6f-xzUyHHa+0dUALsBLGh5eef7/fxM\"",
    "mtime": "2025-01-17T16:23:16.474Z",
    "size": 338799,
    "path": "../public/assets/images/hero-about2.png"
  },
  "/assets/images/hero-services-1.png": {
    "type": "image/png",
    "etag": "\"3cd77-7YuQsh0SSjMgHW6U6YkzVN7nogQ\"",
    "mtime": "2025-01-17T16:23:16.474Z",
    "size": 249207,
    "path": "../public/assets/images/hero-services-1.png"
  },
  "/assets/images/hero-services-2.png": {
    "type": "image/png",
    "etag": "\"18720b-j9j4yvRmjhS9lIQ3Tklc/RqJiMk\"",
    "mtime": "2025-01-17T16:23:16.479Z",
    "size": 1602059,
    "path": "../public/assets/images/hero-services-2.png"
  },
  "/assets/images/hero-single.png": {
    "type": "image/png",
    "etag": "\"18ca5d-eBPxHgAvfYPEpTd356yqawGkWBk\"",
    "mtime": "2025-01-17T16:23:16.478Z",
    "size": 1624669,
    "path": "../public/assets/images/hero-single.png"
  },
  "/assets/images/icon-caret-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c5-oIEaT8N727U4GD6dVvagc9zY+4Q\"",
    "mtime": "2025-01-17T16:23:16.474Z",
    "size": 453,
    "path": "../public/assets/images/icon-caret-down.svg"
  },
  "/assets/images/icon-caret-up.svg": {
    "type": "image/svg+xml",
    "etag": "\"167-EwLaSatn2TENc0yPGxU9RzmKl9U\"",
    "mtime": "2025-01-17T16:23:16.475Z",
    "size": 359,
    "path": "../public/assets/images/icon-caret-up.svg"
  },
  "/assets/images/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b71-OdJ71YUpyCfRyLkwsFgdckbM5co\"",
    "mtime": "2025-01-17T16:23:16.475Z",
    "size": 7025,
    "path": "../public/assets/images/logo.svg"
  },
  "/assets/images/mail.png": {
    "type": "image/png",
    "etag": "\"a99-WX2EXiaS6duaBVa0yWmVu3pj1Mc\"",
    "mtime": "2025-01-17T16:23:16.475Z",
    "size": 2713,
    "path": "../public/assets/images/mail.png"
  },
  "/assets/images/market.png": {
    "type": "image/png",
    "etag": "\"2250d-6Ko8jM1Kkw7nQBWs3kgp2fSthYo\"",
    "mtime": "2025-01-17T16:23:16.475Z",
    "size": 140557,
    "path": "../public/assets/images/market.png"
  },
  "/assets/images/medium-circle.png": {
    "type": "image/png",
    "etag": "\"57e-q22r8gLb1NajYBdXqKtow+YnOmU\"",
    "mtime": "2025-01-17T16:23:16.475Z",
    "size": 1406,
    "path": "../public/assets/images/medium-circle.png"
  },
  "/assets/images/medium_safety.png": {
    "type": "image/png",
    "etag": "\"2dc8-vrUY6rymGrl32FvrAdsBW7BdslM\"",
    "mtime": "2025-01-17T16:23:16.476Z",
    "size": 11720,
    "path": "../public/assets/images/medium_safety.png"
  },
  "/assets/images/noodles-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"f9c3-9YvBeJG4kxDn1XhuUN6Iz696jgA\"",
    "mtime": "2025-01-17T16:23:16.476Z",
    "size": 63939,
    "path": "../public/assets/images/noodles-logo.svg"
  },
  "/assets/images/partner-logo-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"ee6-b83SaTO4JCNnsIHd/NmtkrNb2rw\"",
    "mtime": "2025-01-17T16:23:16.476Z",
    "size": 3814,
    "path": "../public/assets/images/partner-logo-1.svg"
  },
  "/assets/images/partner-logo-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"38d5-M3LDRpxNU1MhFoURBmIQvh0lLEw\"",
    "mtime": "2025-01-17T16:23:16.476Z",
    "size": 14549,
    "path": "../public/assets/images/partner-logo-2.svg"
  },
  "/assets/images/partner-logo-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e30-kyu1h0d1QS+M20fEGDymZ70FD74\"",
    "mtime": "2025-01-17T16:23:16.476Z",
    "size": 11824,
    "path": "../public/assets/images/partner-logo-3.svg"
  },
  "/assets/images/partner-logo-4.svg": {
    "type": "image/svg+xml",
    "etag": "\"3113-apeQWuXeEvonFARtCTmF39H/Wg0\"",
    "mtime": "2025-01-17T16:23:16.476Z",
    "size": 12563,
    "path": "../public/assets/images/partner-logo-4.svg"
  },
  "/assets/images/partner-logo-5.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b1e-qWOXoT5dTneogbMhDRjA3o3idqc\"",
    "mtime": "2025-01-17T16:23:16.476Z",
    "size": 11038,
    "path": "../public/assets/images/partner-logo-5.svg"
  },
  "/assets/images/partner-logo-6.svg": {
    "type": "image/svg+xml",
    "etag": "\"1183-C4yrYM2Gmo5aqQuvzOq/GbYPLEg\"",
    "mtime": "2025-01-17T16:23:16.476Z",
    "size": 4483,
    "path": "../public/assets/images/partner-logo-6.svg"
  },
  "/assets/images/post-img-1.png": {
    "type": "image/png",
    "etag": "\"1401e-QWglERoq16rOF2jImjvGP6Qk9Ps\"",
    "mtime": "2025-01-17T16:23:16.477Z",
    "size": 81950,
    "path": "../public/assets/images/post-img-1.png"
  },
  "/assets/images/post-img-2.png": {
    "type": "image/png",
    "etag": "\"1de7a-2WlxjBj2CYB1q8iUDQiD+6mG/Dc\"",
    "mtime": "2025-01-17T16:23:16.477Z",
    "size": 122490,
    "path": "../public/assets/images/post-img-2.png"
  },
  "/assets/images/post-img-3.png": {
    "type": "image/png",
    "etag": "\"14095-S7DVzx4g8DZ6fAZibkfm4Be/Alw\"",
    "mtime": "2025-01-17T16:23:16.477Z",
    "size": 82069,
    "path": "../public/assets/images/post-img-3.png"
  },
  "/assets/images/pricing-2-bg.png": {
    "type": "image/png",
    "etag": "\"9f50-PdcNZ4K4MZVXIELvyMKxDXAJ0+4\"",
    "mtime": "2025-01-17T16:23:16.477Z",
    "size": 40784,
    "path": "../public/assets/images/pricing-2-bg.png"
  },
  "/assets/images/product-1.png": {
    "type": "image/png",
    "etag": "\"1d0f5-Gn6Gwo9CNGmWTEtAyctzFwo3al0\"",
    "mtime": "2025-01-17T16:23:16.477Z",
    "size": 119029,
    "path": "../public/assets/images/product-1.png"
  },
  "/assets/images/product-2.png": {
    "type": "image/png",
    "etag": "\"1e1cf-VJHO3nxmW3MRfI3qkPmX09HAGEU\"",
    "mtime": "2025-01-17T16:23:16.477Z",
    "size": 123343,
    "path": "../public/assets/images/product-2.png"
  },
  "/assets/images/product-3.png": {
    "type": "image/png",
    "etag": "\"1b796-OZQ3MPC6koDbe9IHGwOZmyzKWbI\"",
    "mtime": "2025-01-17T16:23:16.478Z",
    "size": 112534,
    "path": "../public/assets/images/product-3.png"
  },
  "/assets/images/product-4.png": {
    "type": "image/png",
    "etag": "\"19dc5-5Q63I7D8o4MLs/FBg67wVbAd9bM\"",
    "mtime": "2025-01-17T16:23:16.478Z",
    "size": 105925,
    "path": "../public/assets/images/product-4.png"
  },
  "/assets/images/product-md-1.png": {
    "type": "image/png",
    "etag": "\"191f2-sPpfS/NJWIpN7o7VgzV5d7CSiR0\"",
    "mtime": "2025-01-17T16:23:16.478Z",
    "size": 102898,
    "path": "../public/assets/images/product-md-1.png"
  },
  "/assets/images/product-md-2.png": {
    "type": "image/png",
    "etag": "\"cc21-gkB2IwfMRI25AlxLW7USrgkrKtQ\"",
    "mtime": "2025-01-17T16:23:16.479Z",
    "size": 52257,
    "path": "../public/assets/images/product-md-2.png"
  },
  "/assets/images/product-md-3.png": {
    "type": "image/png",
    "etag": "\"65c7-5caoa14BKa1dfh/XNEMl8RtoxL4\"",
    "mtime": "2025-01-17T16:23:16.479Z",
    "size": 26055,
    "path": "../public/assets/images/product-md-3.png"
  },
  "/assets/images/product-md-4.png": {
    "type": "image/png",
    "etag": "\"6124-6bIUHgbvDnXh0C3Q/m2t3t0Uth8\"",
    "mtime": "2025-01-17T16:23:16.479Z",
    "size": 24868,
    "path": "../public/assets/images/product-md-4.png"
  },
  "/assets/images/product-sm-1.png": {
    "type": "image/png",
    "etag": "\"47dc-h3yMQ8bUCZ1rkNeN6CY1kXG679I\"",
    "mtime": "2025-01-17T16:23:16.479Z",
    "size": 18396,
    "path": "../public/assets/images/product-sm-1.png"
  },
  "/assets/images/product-sm-2.png": {
    "type": "image/png",
    "etag": "\"2e30-raua7uQSafTl4WOOHwSMWU8J2Rg\"",
    "mtime": "2025-01-17T16:23:16.479Z",
    "size": 11824,
    "path": "../public/assets/images/product-sm-2.png"
  },
  "/assets/images/product-sm-3.png": {
    "type": "image/png",
    "etag": "\"84d2-alwifp3XoqYtaDWGfQYN05jafUk\"",
    "mtime": "2025-01-17T16:23:16.480Z",
    "size": 34002,
    "path": "../public/assets/images/product-sm-3.png"
  },
  "/assets/images/resource-1.png": {
    "type": "image/png",
    "etag": "\"70f60-ulyVfWzdB4JR9GXPCi1I49Q8Kjw\"",
    "mtime": "2025-01-17T16:23:16.480Z",
    "size": 462688,
    "path": "../public/assets/images/resource-1.png"
  },
  "/assets/images/resource-2.png": {
    "type": "image/png",
    "etag": "\"559d5-hj18r65v7NMHqTyKFpo6oLhv8pM\"",
    "mtime": "2025-01-17T16:23:16.480Z",
    "size": 350677,
    "path": "../public/assets/images/resource-2.png"
  },
  "/assets/images/resource-3.png": {
    "type": "image/png",
    "etag": "\"4b8ec-f2s4KTRWpDtX7tt0olpdfVDAjmY\"",
    "mtime": "2025-01-17T16:23:16.480Z",
    "size": 309484,
    "path": "../public/assets/images/resource-3.png"
  },
  "/assets/images/resource-4.png": {
    "type": "image/png",
    "etag": "\"3eb5d-eVsJfFF0M+SV19lw1TRDDHHPfgI\"",
    "mtime": "2025-01-17T16:23:16.481Z",
    "size": 256861,
    "path": "../public/assets/images/resource-4.png"
  },
  "/assets/images/service-2-bg.png": {
    "type": "image/png",
    "etag": "\"2715b0-g6IydfYyD+++zKVtbKTXTgardaI\"",
    "mtime": "2025-01-17T16:23:16.486Z",
    "size": 2561456,
    "path": "../public/assets/images/service-2-bg.png"
  },
  "/assets/images/services-1-bg.png": {
    "type": "image/png",
    "etag": "\"2480-FBxDZR1PQlKTIqQg1CD2JZBZJK0\"",
    "mtime": "2025-01-17T16:23:16.480Z",
    "size": 9344,
    "path": "../public/assets/images/services-1-bg.png"
  },
  "/assets/images/small-circle.png": {
    "type": "image/png",
    "etag": "\"418-WbnCGWwLYY5btd/kGultfsasHys\"",
    "mtime": "2025-01-17T16:23:16.480Z",
    "size": 1048,
    "path": "../public/assets/images/small-circle.png"
  },
  "/assets/images/subcribe-thumbnail.png": {
    "type": "image/png",
    "etag": "\"4e6fa-ui31pf9vV4E0yoaj8fzyO1SD2ow\"",
    "mtime": "2025-01-17T16:23:16.482Z",
    "size": 321274,
    "path": "../public/assets/images/subcribe-thumbnail.png"
  },
  "/assets/images/team-1.png": {
    "type": "image/png",
    "etag": "\"1fba8-osbfpzR+20lQwdxnF9NIFqL/YvY\"",
    "mtime": "2025-01-17T16:23:16.481Z",
    "size": 129960,
    "path": "../public/assets/images/team-1.png"
  },
  "/assets/images/team-2.png": {
    "type": "image/png",
    "etag": "\"20228-1zTxeEd/W3f4K5F9EX/6dc2j7wg\"",
    "mtime": "2025-01-17T16:23:16.481Z",
    "size": 131624,
    "path": "../public/assets/images/team-2.png"
  },
  "/assets/images/team-3.png": {
    "type": "image/png",
    "etag": "\"1df7c-mxbzq+zm9ld0M3ZI1hn3ebY2pSQ\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 122748,
    "path": "../public/assets/images/team-3.png"
  },
  "/assets/images/team-4.png": {
    "type": "image/png",
    "etag": "\"26dad-oayJEEaW4BT5Ck2qQNRbU+JoLwA\"",
    "mtime": "2025-01-17T16:23:16.482Z",
    "size": 159149,
    "path": "../public/assets/images/team-4.png"
  },
  "/assets/images/thumbnail-1.png": {
    "type": "image/png",
    "etag": "\"1616a3-9D465X1I8Xv+I/las/p9pzy6YW4\"",
    "mtime": "2025-01-17T16:23:16.485Z",
    "size": 1447587,
    "path": "../public/assets/images/thumbnail-1.png"
  },
  "/assets/images/thumbnail-10.png": {
    "type": "image/png",
    "etag": "\"be027-VcXy8Bs6X3Hz83ZeZzuUtajWQ9w\"",
    "mtime": "2025-01-17T16:23:16.483Z",
    "size": 778279,
    "path": "../public/assets/images/thumbnail-10.png"
  },
  "/assets/images/thumbnail-11.png": {
    "type": "image/png",
    "etag": "\"5904c-TImJrAPpXYw58JdH3tObcrTikCU\"",
    "mtime": "2025-01-17T16:23:16.483Z",
    "size": 364620,
    "path": "../public/assets/images/thumbnail-11.png"
  },
  "/assets/images/thumbnail-12.png": {
    "type": "image/png",
    "etag": "\"f87a4-25ykk8us2o3e4MrTNgreMyDe0Bw\"",
    "mtime": "2025-01-17T16:23:16.485Z",
    "size": 1017764,
    "path": "../public/assets/images/thumbnail-12.png"
  },
  "/assets/images/thumbnail-13.png": {
    "type": "image/png",
    "etag": "\"bc6e7-HxT3Dc50BMQ4Ei9GGzbluN+0u3U\"",
    "mtime": "2025-01-17T16:23:16.485Z",
    "size": 771815,
    "path": "../public/assets/images/thumbnail-13.png"
  },
  "/assets/images/thumbnail-14.png": {
    "type": "image/png",
    "etag": "\"71f68-pfhQZIQv/BkjnJ/BAc3RWudyb4o\"",
    "mtime": "2025-01-17T16:23:16.487Z",
    "size": 466792,
    "path": "../public/assets/images/thumbnail-14.png"
  },
  "/assets/images/thumbnail-15.png": {
    "type": "image/png",
    "etag": "\"178836-lFT2zsC6ubmmuhddZVH3MeTpCt4\"",
    "mtime": "2025-01-17T16:23:16.489Z",
    "size": 1542198,
    "path": "../public/assets/images/thumbnail-15.png"
  },
  "/assets/images/thumbnail-16.png": {
    "type": "image/png",
    "etag": "\"1b4339-jhPUpQQg6Lg/1SXB/3O5vW5qLFc\"",
    "mtime": "2025-01-17T16:23:16.491Z",
    "size": 1786681,
    "path": "../public/assets/images/thumbnail-16.png"
  },
  "/assets/images/thumbnail-17.png": {
    "type": "image/png",
    "etag": "\"88f15-7SesLwMT39CCibJkG4nfb+5Spho\"",
    "mtime": "2025-01-17T16:23:16.487Z",
    "size": 560917,
    "path": "../public/assets/images/thumbnail-17.png"
  },
  "/assets/images/thumbnail-18.png": {
    "type": "image/png",
    "etag": "\"35d32f-13FjpLCZE+WLrIgiSe96+BL0XFw\"",
    "mtime": "2025-01-17T16:23:16.497Z",
    "size": 3527471,
    "path": "../public/assets/images/thumbnail-18.png"
  },
  "/assets/images/thumbnail-19.png": {
    "type": "image/png",
    "etag": "\"1a1a0c-zMhOsZvY2GZhbI7BLO1+JRGQD0s\"",
    "mtime": "2025-01-17T16:23:16.492Z",
    "size": 1710604,
    "path": "../public/assets/images/thumbnail-19.png"
  },
  "/assets/images/thumbnail-2.png": {
    "type": "image/png",
    "etag": "\"a3224-3y0K/qAUrOKDcq3szjgCEMHOwy4\"",
    "mtime": "2025-01-17T16:23:16.491Z",
    "size": 668196,
    "path": "../public/assets/images/thumbnail-2.png"
  },
  "/assets/images/thumbnail-20.png": {
    "type": "image/png",
    "etag": "\"1a38c-RB1FB95s1rm4dbYOc4FgU6a+xNg\"",
    "mtime": "2025-01-17T16:23:16.491Z",
    "size": 107404,
    "path": "../public/assets/images/thumbnail-20.png"
  },
  "/assets/images/thumbnail-21.png": {
    "type": "image/png",
    "etag": "\"2ff3f-aUvUVWABa7n7aKrYfH6O0Efyy9g\"",
    "mtime": "2025-01-17T16:23:16.492Z",
    "size": 196415,
    "path": "../public/assets/images/thumbnail-21.png"
  },
  "/assets/images/thumbnail-22.png": {
    "type": "image/png",
    "etag": "\"1252b6-LFZnkhoMMANARU8buLs+tKERjhY\"",
    "mtime": "2025-01-17T16:23:16.493Z",
    "size": 1200822,
    "path": "../public/assets/images/thumbnail-22.png"
  },
  "/assets/images/thumbnail-23.png": {
    "type": "image/png",
    "etag": "\"1518d5-BpmXmL5VzpuZdMBTSTiI8qrYY3s\"",
    "mtime": "2025-01-17T16:23:16.495Z",
    "size": 1382613,
    "path": "../public/assets/images/thumbnail-23.png"
  },
  "/assets/images/thumbnail-24.png": {
    "type": "image/png",
    "etag": "\"beac2-xumvayHLIRSR7jxXMRMesKIUVp4\"",
    "mtime": "2025-01-17T16:23:16.496Z",
    "size": 780994,
    "path": "../public/assets/images/thumbnail-24.png"
  },
  "/assets/images/thumbnail-3.png": {
    "type": "image/png",
    "etag": "\"65335-vpryk0PVwIiIi0USaDkoKci2/wU\"",
    "mtime": "2025-01-17T16:23:16.495Z",
    "size": 414517,
    "path": "../public/assets/images/thumbnail-3.png"
  },
  "/assets/images/thumbnail-4.png": {
    "type": "image/png",
    "etag": "\"66bce-Cawo7fuBjm1cL7Di4V1lbnK6Zeg\"",
    "mtime": "2025-01-17T16:23:16.497Z",
    "size": 420814,
    "path": "../public/assets/images/thumbnail-4.png"
  },
  "/assets/images/thumbnail-5.png": {
    "type": "image/png",
    "etag": "\"39126-frDCiiQ8Ur497qN1DrWviClLvD8\"",
    "mtime": "2025-01-17T16:23:16.496Z",
    "size": 233766,
    "path": "../public/assets/images/thumbnail-5.png"
  },
  "/assets/images/thumbnail-6.png": {
    "type": "image/png",
    "etag": "\"b682f-UwRfvM6748Dd8MdgF2NaTU9Uth0\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 747567,
    "path": "../public/assets/images/thumbnail-6.png"
  },
  "/assets/images/thumbnail-7.png": {
    "type": "image/png",
    "etag": "\"b6920-ahzYjJTELnaQpoEmX3oYNVXY1DA\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 747808,
    "path": "../public/assets/images/thumbnail-7.png"
  },
  "/assets/images/thumbnail-8.png": {
    "type": "image/png",
    "etag": "\"190ae-C16LJKLiHiIasdNUohbCyVKLe5w\"",
    "mtime": "2025-01-17T16:23:16.497Z",
    "size": 102574,
    "path": "../public/assets/images/thumbnail-8.png"
  },
  "/assets/images/thumbnail-9.png": {
    "type": "image/png",
    "etag": "\"1c5e3-Bhq6aqT0FaDWNCIJidMQcJGbLQ8\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 116195,
    "path": "../public/assets/images/thumbnail-9.png"
  },
  "/assets/images/video-bg.png": {
    "type": "image/png",
    "etag": "\"d4cc-K2YQCBodBRjZIknL7nXPpzF4g4Y\"",
    "mtime": "2025-01-17T16:23:16.497Z",
    "size": 54476,
    "path": "../public/assets/images/video-bg.png"
  },
  "/assets/styles/css/app.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26e7-5A6tFQtGLjA9rQrgrNx9ANak4k4\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 9959,
    "path": "../public/assets/styles/css/app.css"
  },
  "/assets/styles/css/app.css.map": {
    "type": "application/json",
    "etag": "\"8ff-sK4YFX1YUh/WuYQqtmUF2tccGtg\"",
    "mtime": "2025-01-17T16:23:16.462Z",
    "size": 2303,
    "path": "../public/assets/styles/css/app.css.map"
  },
  "/assets/styles/sass/app.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2787-YKbDhT1Qayrx3ijoBfoGa7GvHNg\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 10119,
    "path": "../public/assets/styles/sass/app.css"
  },
  "/assets/styles/sass/app.css.map": {
    "type": "application/json",
    "etag": "\"ffe-CboNT2lAM7uBpynmtlInBQNm04I\"",
    "mtime": "2025-01-17T16:23:16.462Z",
    "size": 4094,
    "path": "../public/assets/styles/sass/app.css.map"
  },
  "/assets/styles/sass/app.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"193-/zFTXLfP5+Zct7akXlpA0YcTji0\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 403,
    "path": "../public/assets/styles/sass/app.scss"
  },
  "/_nuxt/builds/meta/731b6728-fb6d-4753-add3-b7f7043fd644.json": {
    "type": "application/json",
    "etag": "\"bb-FUCwLeblis4vGdx8D5wx2cKUzcc\"",
    "mtime": "2025-01-17T16:23:16.426Z",
    "size": 187,
    "path": "../public/_nuxt/builds/meta/731b6728-fb6d-4753-add3-b7f7043fd644.json"
  },
  "/assets/images/icons/Icon-google.svg": {
    "type": "image/svg+xml",
    "etag": "\"4c4-nsP33ChLoCGWKQH9MzZbNQvW5Bk\"",
    "mtime": "2025-01-17T16:23:16.462Z",
    "size": 1220,
    "path": "../public/assets/images/icons/Icon-google.svg"
  },
  "/assets/images/icons/icon-account.svg": {
    "type": "image/svg+xml",
    "etag": "\"337-aagHeHIo2JlGVukgSOCv0TrNXRY\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 823,
    "path": "../public/assets/images/icons/icon-account.svg"
  },
  "/assets/images/icons/icon-anchor.svg": {
    "type": "image/svg+xml",
    "etag": "\"6b5-cDqv9glO9bxHgYTabsas3LdOK3I\"",
    "mtime": "2025-01-17T16:23:16.497Z",
    "size": 1717,
    "path": "../public/assets/images/icons/icon-anchor.svg"
  },
  "/assets/images/icons/icon-angle-down-fill.svg": {
    "type": "image/svg+xml",
    "etag": "\"3c6-uVyTqItxPnX4xqqxgNWOsnas8sQ\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 966,
    "path": "../public/assets/images/icons/icon-angle-down-fill.svg"
  },
  "/assets/images/icons/icon-angle-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"fb-+0QcvT/hcn0Ncr+AOfbMzSWTgss\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 251,
    "path": "../public/assets/images/icons/icon-angle-down.svg"
  },
  "/assets/images/icons/icon-angle-left.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ce-QsTp4pu+3JqKMj1Iv9Vgwha5HTI\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 718,
    "path": "../public/assets/images/icons/icon-angle-left.svg"
  },
  "/assets/images/icons/icon-angle-right-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"291-YmsPTkSEVZvxzRZgZXvXhc+josA\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 657,
    "path": "../public/assets/images/icons/icon-angle-right-gray.svg"
  },
  "/assets/images/icons/icon-angle-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"2da-w1HIGxmPOL36JA+gXNwE1G6qmmU\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 730,
    "path": "../public/assets/images/icons/icon-angle-right.svg"
  },
  "/assets/images/icons/icon-angle-up-fill.svg": {
    "type": "image/svg+xml",
    "etag": "\"3c0-UUfbDRuByS9Ll8DK4Mfno1N10bw\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 960,
    "path": "../public/assets/images/icons/icon-angle-up-fill.svg"
  },
  "/assets/images/icons/icon-animal.svg": {
    "type": "image/svg+xml",
    "etag": "\"8eb-VmLYNGTvPAAW/qEr/R58Y3JYRhA\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 2283,
    "path": "../public/assets/images/icons/icon-animal.svg"
  },
  "/assets/images/icons/icon-arrow-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"180d-mOdq3bsV7NZHd4VfqrVxtwDfaug\"",
    "mtime": "2025-01-17T16:23:16.498Z",
    "size": 6157,
    "path": "../public/assets/images/icons/icon-arrow-1.svg"
  },
  "/assets/images/icons/icon-arrow-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"17e9-GCMv+mwlNVdVfxnt5DF3MhLbXA0\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 6121,
    "path": "../public/assets/images/icons/icon-arrow-2.svg"
  },
  "/assets/images/icons/icon-arrow-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"21d3-t9cUKZUKHLPQ9I8EiNgFTRqfMYI\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 8659,
    "path": "../public/assets/images/icons/icon-arrow-3.svg"
  },
  "/assets/images/icons/icon-arrow-4.svg": {
    "type": "image/svg+xml",
    "etag": "\"1818-VPmqKlLHPphci69fkyACfr34wxk\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 6168,
    "path": "../public/assets/images/icons/icon-arrow-4.svg"
  },
  "/assets/images/icons/icon-arrow-left.svg": {
    "type": "image/svg+xml",
    "etag": "\"174-Bsh87udUSfvZH9HiBuRdSdfLEJE\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 372,
    "path": "../public/assets/images/icons/icon-arrow-left.svg"
  },
  "/assets/images/icons/icon-arrow-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"157-NRP8Ug9md7Kh5r6k44zf7Qd78Ps\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 343,
    "path": "../public/assets/images/icons/icon-arrow-right.svg"
  },
  "/assets/images/icons/icon-ball.svg": {
    "type": "image/svg+xml",
    "etag": "\"d3b-l53rVoaSlFUhUipphBYta5G2+SI\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 3387,
    "path": "../public/assets/images/icons/icon-ball.svg"
  },
  "/assets/images/icons/icon-book.svg": {
    "type": "image/svg+xml",
    "etag": "\"1882-/lV3U0wGnooFe3nsU15iA7R95Aw\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 6274,
    "path": "../public/assets/images/icons/icon-book.svg"
  },
  "/assets/images/icons/icon-briefcase.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d8-Q1HvF4qsSLK0tDb1O08AYnzQqd8\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 472,
    "path": "../public/assets/images/icons/icon-briefcase.svg"
  },
  "/assets/images/icons/icon-business.svg": {
    "type": "image/svg+xml",
    "etag": "\"5de-ZGciTzdRc7kMk4odTTt7WjD9Zow\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 1502,
    "path": "../public/assets/images/icons/icon-business.svg"
  },
  "/assets/images/icons/icon-button.svg": {
    "type": "image/svg+xml",
    "etag": "\"308-lKTpDhbnF6rNO1Msp38owUQffsE\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 776,
    "path": "../public/assets/images/icons/icon-button.svg"
  },
  "/assets/images/icons/icon-calendar.svg": {
    "type": "image/svg+xml",
    "etag": "\"996-s45BvPMssik+Hco2bH08xHx++A4\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 2454,
    "path": "../public/assets/images/icons/icon-calendar.svg"
  },
  "/assets/images/icons/icon-cards.svg": {
    "type": "image/svg+xml",
    "etag": "\"71e-1Rel8fg3h2Pmcyu54CUS4cuhqn0\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 1822,
    "path": "../public/assets/images/icons/icon-cards.svg"
  },
  "/assets/images/icons/icon-caret-down-green.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c5-Sz3DUCBD717b7ViMv2OAgh4D5Eg\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 453,
    "path": "../public/assets/images/icons/icon-caret-down-green.svg"
  },
  "/assets/images/icons/icon-caret-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"3c6-vhEcN3Q10Ib7hBZEcI0yfAsfuBo\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 966,
    "path": "../public/assets/images/icons/icon-caret-down.svg"
  },
  "/assets/images/icons/icon-caret-up-green.svg": {
    "type": "image/svg+xml",
    "etag": "\"168-uNyTt1C/ER31AotjPMHdireKNyI\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 360,
    "path": "../public/assets/images/icons/icon-caret-up-green.svg"
  },
  "/assets/images/icons/icon-caret-up.svg": {
    "type": "image/svg+xml",
    "etag": "\"3bf-QtE+qQfXaEdiegSYpx/it8pJlfc\"",
    "mtime": "2025-01-17T16:23:16.499Z",
    "size": 959,
    "path": "../public/assets/images/icons/icon-caret-up.svg"
  },
  "/assets/images/icons/icon-caret.svg": {
    "type": "image/svg+xml",
    "etag": "\"291-KpWEW8SZnSnUdnAIEscGSjOi9Cg\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 657,
    "path": "../public/assets/images/icons/icon-caret.svg"
  },
  "/assets/images/icons/icon-cart.svg": {
    "type": "image/svg+xml",
    "etag": "\"52b-i+XxsPRCDpiCENJcr3nN0AUD3n8\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 1323,
    "path": "../public/assets/images/icons/icon-cart.svg"
  },
  "/assets/images/icons/icon-check-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"114-xPaMsMn1iRtYLJQvZFt69ZJJuAc\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 276,
    "path": "../public/assets/images/icons/icon-check-gray.svg"
  },
  "/assets/images/icons/icon-check-green-sqr.svg": {
    "type": "image/svg+xml",
    "etag": "\"181-ASU+ztmO4hzS7hJNy3N/3RHRevM\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 385,
    "path": "../public/assets/images/icons/icon-check-green-sqr.svg"
  },
  "/assets/images/icons/icon-check-green.svg": {
    "type": "image/svg+xml",
    "etag": "\"10c-U9G70/xqYQglMIIi4GlunGPeKSM\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 268,
    "path": "../public/assets/images/icons/icon-check-green.svg"
  },
  "/assets/images/icons/icon-check-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"f7-UjnPiGfXrzu6hW+E0Z1FQBbZ//8\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 247,
    "path": "../public/assets/images/icons/icon-check-white.svg"
  },
  "/assets/images/icons/icon-checkbox.svg": {
    "type": "image/svg+xml",
    "etag": "\"9b-pWTgYtnAtaC8k0SXsbukC8ph3dU\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 155,
    "path": "../public/assets/images/icons/icon-checkbox.svg"
  },
  "/assets/images/icons/icon-checkmark.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a3-ohdXj29chyR0AAE601B7DBC8ahA\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 931,
    "path": "../public/assets/images/icons/icon-checkmark.svg"
  },
  "/assets/images/icons/icon-close-small.svg": {
    "type": "image/svg+xml",
    "etag": "\"14e-szBgpJwNCTZHpha21SmwsveIWgU\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 334,
    "path": "../public/assets/images/icons/icon-close-small.svg"
  },
  "/assets/images/icons/icon-close.svg": {
    "type": "image/svg+xml",
    "etag": "\"7d6-n3TA+WFEzRdumtLoN5+AG9x1St4\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 2006,
    "path": "../public/assets/images/icons/icon-close.svg"
  },
  "/assets/images/icons/icon-colon.svg": {
    "type": "image/svg+xml",
    "etag": "\"ca-VeGnFqgskPl+uK0CTeRoaz/wuYg\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 202,
    "path": "../public/assets/images/icons/icon-colon.svg"
  },
  "/assets/images/icons/icon-computer.svg": {
    "type": "image/svg+xml",
    "etag": "\"62a-WEfWOuKjbV0Bz7QOGWETb7B8yDw\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 1578,
    "path": "../public/assets/images/icons/icon-computer.svg"
  },
  "/assets/images/icons/icon-contact-black.svg": {
    "type": "image/svg+xml",
    "etag": "\"60e-onArsbDhrxxs/JBJBd5Mf4i8txw\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 1550,
    "path": "../public/assets/images/icons/icon-contact-black.svg"
  },
  "/assets/images/icons/icon-database.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a1-6HA4zohNRweGRoQWstASR9hrfHk\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 673,
    "path": "../public/assets/images/icons/icon-database.svg"
  },
  "/assets/images/icons/icon-destination.svg": {
    "type": "image/svg+xml",
    "etag": "\"770-2AVPp1QHJumfvxwJ4TLs4rwAq3I\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 1904,
    "path": "../public/assets/images/icons/icon-destination.svg"
  },
  "/assets/images/icons/icon-dharma-wheel.svg": {
    "type": "image/svg+xml",
    "etag": "\"f07-2WB+GwkbPYRUfJpc8MPz9RnGAZo\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 3847,
    "path": "../public/assets/images/icons/icon-dharma-wheel.svg"
  },
  "/assets/images/icons/icon-document-signed.svg": {
    "type": "image/svg+xml",
    "etag": "\"35b-uK/wOpmF9w7XPXJGKAsxiW/mLa4\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 859,
    "path": "../public/assets/images/icons/icon-document-signed.svg"
  },
  "/assets/images/icons/icon-edit.svg": {
    "type": "image/svg+xml",
    "etag": "\"338-3jBUr1R6nQcESS+JKiSQ747rPE4\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 824,
    "path": "../public/assets/images/icons/icon-edit.svg"
  },
  "/assets/images/icons/icon-envelope.svg": {
    "type": "image/svg+xml",
    "etag": "\"43d-CALdOomfTPoX1j3b6El5YOVvpw0\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 1085,
    "path": "../public/assets/images/icons/icon-envelope.svg"
  },
  "/assets/images/icons/icon-exclamation.svg": {
    "type": "image/svg+xml",
    "etag": "\"171-8howbTk3S+EsHw8Nql1UZFmUmvg\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 369,
    "path": "../public/assets/images/icons/icon-exclamation.svg"
  },
  "/assets/images/icons/icon-eye-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ec-SbwVSVkJe3hNai4SiIHtxhy+D3s\"",
    "mtime": "2025-01-17T16:23:16.500Z",
    "size": 492,
    "path": "../public/assets/images/icons/icon-eye-gray.svg"
  },
  "/assets/images/icons/icon-eye.svg": {
    "type": "image/svg+xml",
    "etag": "\"791-P6PJ0N1wqM2aIPvLcyNnFzcT6/4\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 1937,
    "path": "../public/assets/images/icons/icon-eye.svg"
  },
  "/assets/images/icons/icon-facebook-color.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ed-6N1UwRWkICN5n01KOoYKM2hOrmg\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 493,
    "path": "../public/assets/images/icons/icon-facebook-color.svg"
  },
  "/assets/images/icons/icon-facebook-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"260-md6vekjgdti+fAC1p+KnMB4ZNgQ\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 608,
    "path": "../public/assets/images/icons/icon-facebook-gray.svg"
  },
  "/assets/images/icons/icon-facebook-green.svg": {
    "type": "image/svg+xml",
    "etag": "\"218-oX4eU7+9s30Djg72flTZ2/f6NcA\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 536,
    "path": "../public/assets/images/icons/icon-facebook-green.svg"
  },
  "/assets/images/icons/icon-fb.svg": {
    "type": "image/svg+xml",
    "etag": "\"1f8-ROatQG3RQv3BY3HZTYiM9EjtRTA\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 504,
    "path": "../public/assets/images/icons/icon-fb.svg"
  },
  "/assets/images/icons/icon-filter.svg": {
    "type": "image/svg+xml",
    "etag": "\"388-aVoVFCz2Lufy06cie2kzX33of2I\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 904,
    "path": "../public/assets/images/icons/icon-filter.svg"
  },
  "/assets/images/icons/icon-fingerprint.svg": {
    "type": "image/svg+xml",
    "etag": "\"4da-tg9kOqjG/rCFl9NpZKzT03g1OBg\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 1242,
    "path": "../public/assets/images/icons/icon-fingerprint.svg"
  },
  "/assets/images/icons/icon-flower-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"e7d-5vrN055k1c9C+pOCUiRQhB3xZNM\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 3709,
    "path": "../public/assets/images/icons/icon-flower-white.svg"
  },
  "/assets/images/icons/icon-flower.svg": {
    "type": "image/svg+xml",
    "etag": "\"f27-d5G0f3VCoTp1Rgm9dhUz9QELxZc\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 3879,
    "path": "../public/assets/images/icons/icon-flower.svg"
  },
  "/assets/images/icons/icon-gem.svg": {
    "type": "image/svg+xml",
    "etag": "\"32f-iMZTwvRte/0HlYoIn4NpKeuqfj4\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 815,
    "path": "../public/assets/images/icons/icon-gem.svg"
  },
  "/assets/images/icons/icon-grid.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d7-m1B//Cn46V+ItnraZG8LdMW2d6Y\"",
    "mtime": "2025-01-17T16:23:16.501Z",
    "size": 1495,
    "path": "../public/assets/images/icons/icon-grid.svg"
  },
  "/assets/images/icons/icon-hat.svg": {
    "type": "image/svg+xml",
    "etag": "\"55f-u0yYLtN624AB6bGO7VEhbL75ia0\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1375,
    "path": "../public/assets/images/icons/icon-hat.svg"
  },
  "/assets/images/icons/icon-headphone.svg": {
    "type": "image/svg+xml",
    "etag": "\"c1e-MHW/629Oik+2jgmMexsyNCDHlpU\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 3102,
    "path": "../public/assets/images/icons/icon-headphone.svg"
  },
  "/assets/images/icons/icon-headphones.svg": {
    "type": "image/svg+xml",
    "etag": "\"9fa-yr5C8ZQq2zi50CPa7GoA15WPVPA\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 2554,
    "path": "../public/assets/images/icons/icon-headphones.svg"
  },
  "/assets/images/icons/icon-headset.svg": {
    "type": "image/svg+xml",
    "etag": "\"163-j2GlPfVTj4WNoEPBMGARmG9OGsY\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 355,
    "path": "../public/assets/images/icons/icon-headset.svg"
  },
  "/assets/images/icons/icon-heart.svg": {
    "type": "image/svg+xml",
    "etag": "\"551-3wYhi6EfQ87x/x9tQA0BnpaknR0\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1361,
    "path": "../public/assets/images/icons/icon-heart.svg"
  },
  "/assets/images/icons/icon-home-fill.svg": {
    "type": "image/svg+xml",
    "etag": "\"411-RofCzkhBYPwaGrYzhOf3OmeZkMg\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1041,
    "path": "../public/assets/images/icons/icon-home-fill.svg"
  },
  "/assets/images/icons/icon-home-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"653-V5O6dxXsuqsNil5IfjKs3cTv5Dk\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1619,
    "path": "../public/assets/images/icons/icon-home-gray.svg"
  },
  "/assets/images/icons/icon-home.svg": {
    "type": "image/svg+xml",
    "etag": "\"211-FoYPLG6MbFVF7RMiaSaQJYZlqqs\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 529,
    "path": "../public/assets/images/icons/icon-home.svg"
  },
  "/assets/images/icons/icon-human-dolly.svg": {
    "type": "image/svg+xml",
    "etag": "\"7de-x09s8xa17QkX209Exfk17Bbzr2E\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 2014,
    "path": "../public/assets/images/icons/icon-human-dolly.svg"
  },
  "/assets/images/icons/icon-instagram-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"d61-ASTLhnGSv1RvIRBzT6fBx9MV1eM\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 3425,
    "path": "../public/assets/images/icons/icon-instagram-gray.svg"
  },
  "/assets/images/icons/icon-instagram-green.svg": {
    "type": "image/svg+xml",
    "etag": "\"c12-HIjpgmZ10hQ+4cWVm0/i7uAGc4Y\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 3090,
    "path": "../public/assets/images/icons/icon-instagram-green.svg"
  },
  "/assets/images/icons/icon-job-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"6f5-CSp3HjbbvMBt02TODY2HX95ZnKk\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1781,
    "path": "../public/assets/images/icons/icon-job-1.svg"
  },
  "/assets/images/icons/icon-job-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"cf3-7RIWQWMqgyC4FTirh4GuwC9ZlbE\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 3315,
    "path": "../public/assets/images/icons/icon-job-2.svg"
  },
  "/assets/images/icons/icon-job-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"7ff-YG5/HflwIdtxFM9Mo7vmbULFy5Q\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 2047,
    "path": "../public/assets/images/icons/icon-job-3.svg"
  },
  "/assets/images/icons/icon-job-4.svg": {
    "type": "image/svg+xml",
    "etag": "\"ea9-pZAxU7yk1nzklpod+SdaTA0c+HQ\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 3753,
    "path": "../public/assets/images/icons/icon-job-4.svg"
  },
  "/assets/images/icons/icon-job-5.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b9-ZTm/+ksAk2EaMzVDsL3dFZxGqq8\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1209,
    "path": "../public/assets/images/icons/icon-job-5.svg"
  },
  "/assets/images/icons/icon-job-6.svg": {
    "type": "image/svg+xml",
    "etag": "\"5c7-oJ5nmMHqtyrD7YKWeIwdMyJ+7tU\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1479,
    "path": "../public/assets/images/icons/icon-job-6.svg"
  },
  "/assets/images/icons/icon-job-7.svg": {
    "type": "image/svg+xml",
    "etag": "\"418-oWhR8n6OgZGtMlH8urhiw/hp9cw\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1048,
    "path": "../public/assets/images/icons/icon-job-7.svg"
  },
  "/assets/images/icons/icon-laptop.svg": {
    "type": "image/svg+xml",
    "etag": "\"43e-kHmg6vsnpGdZi38gisTXdIEXZbI\"",
    "mtime": "2025-01-17T16:23:16.502Z",
    "size": 1086,
    "path": "../public/assets/images/icons/icon-laptop.svg"
  },
  "/assets/images/icons/icon-leaf.svg": {
    "type": "image/svg+xml",
    "etag": "\"776-1vawqZLkRtKaXGtXfOx1RSlCRHE\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 1910,
    "path": "../public/assets/images/icons/icon-leaf.svg"
  },
  "/assets/images/icons/icon-left-quote.svg": {
    "type": "image/svg+xml",
    "etag": "\"4c8-zws7VE6VevAVSgrDZTeJ9htqafg\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 1224,
    "path": "../public/assets/images/icons/icon-left-quote.svg"
  },
  "/assets/images/icons/icon-linkedin-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"46c-9/F8qkqRoPjJoxdaRDK9IMSaB4k\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 1132,
    "path": "../public/assets/images/icons/icon-linkedin-gray.svg"
  },
  "/assets/images/icons/icon-linkedin-green.svg": {
    "type": "image/svg+xml",
    "etag": "\"36a-w3cn8kvGzlaUaIR7kheK13PSvGk\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 874,
    "path": "../public/assets/images/icons/icon-linkedin-green.svg"
  },
  "/assets/images/icons/icon-location-black.svg": {
    "type": "image/svg+xml",
    "etag": "\"78f-f9aQQl3m0xmX3QaPachYJjf/ufE\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 1935,
    "path": "../public/assets/images/icons/icon-location-black.svg"
  },
  "/assets/images/icons/icon-location.svg": {
    "type": "image/svg+xml",
    "etag": "\"2cb-Udq7camXWaaDIIe1gelfjEc58hQ\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 715,
    "path": "../public/assets/images/icons/icon-location.svg"
  },
  "/assets/images/icons/icon-mail.svg": {
    "type": "image/svg+xml",
    "etag": "\"389-i7BBFp0b6CesO8ztKp/3jXQ6E1g\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 905,
    "path": "../public/assets/images/icons/icon-mail.svg"
  },
  "/assets/images/icons/icon-map-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"957-QGmVdX5FuXzcNP6/qHim2Ldv/qY\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 2391,
    "path": "../public/assets/images/icons/icon-map-white.svg"
  },
  "/assets/images/icons/icon-map.svg": {
    "type": "image/svg+xml",
    "etag": "\"96d-YJqdr6WERZQo0zkJ/9QeuSeLhLk\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 2413,
    "path": "../public/assets/images/icons/icon-map.svg"
  },
  "/assets/images/icons/icon-media.svg": {
    "type": "image/svg+xml",
    "etag": "\"33a-RzOArKAgRygq91SA5r1kDivPoDQ\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 826,
    "path": "../public/assets/images/icons/icon-media.svg"
  },
  "/assets/images/icons/icon-mobile.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d2-BAScpchi3W/bd+Lp1EdPX2SJatI\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 1490,
    "path": "../public/assets/images/icons/icon-mobile.svg"
  },
  "/assets/images/icons/icon-mouse.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b7-+cUfaoskszht4dTmvHc/Vdfy0og\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 695,
    "path": "../public/assets/images/icons/icon-mouse.svg"
  },
  "/assets/images/icons/icon-next.svg": {
    "type": "image/svg+xml",
    "etag": "\"2da-uvij9mDtE1TqfD8nl0JzvObgP/U\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 730,
    "path": "../public/assets/images/icons/icon-next.svg"
  },
  "/assets/images/icons/icon-paperplane.svg": {
    "type": "image/svg+xml",
    "etag": "\"47a-UbIykDEetpH2RCN7PqWS/DzDRFY\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 1146,
    "path": "../public/assets/images/icons/icon-paperplane.svg"
  },
  "/assets/images/icons/icon-pattern.svg": {
    "type": "image/svg+xml",
    "etag": "\"25e-GxSQENoH+Zo8tpgpvzjoKFyiqjo\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 606,
    "path": "../public/assets/images/icons/icon-pattern.svg"
  },
  "/assets/images/icons/icon-pi.svg": {
    "type": "image/svg+xml",
    "etag": "\"64b-L8Ykfj2dYNJzW18WYUdu5GV6pXA\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 1611,
    "path": "../public/assets/images/icons/icon-pi.svg"
  },
  "/assets/images/icons/icon-pine-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"332-1YwDyfLNsJDOiwXBES8dCqWHaec\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 818,
    "path": "../public/assets/images/icons/icon-pine-white.svg"
  },
  "/assets/images/icons/icon-pine.svg": {
    "type": "image/svg+xml",
    "etag": "\"32c-L8e8fNtquImrXdsMhHZwkVEJkRU\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 812,
    "path": "../public/assets/images/icons/icon-pine.svg"
  },
  "/assets/images/icons/icon-pinterest-color.svg": {
    "type": "image/svg+xml",
    "etag": "\"5bb-BxWUKPN23HKWwu5zf28fe+UPGWk\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 1467,
    "path": "../public/assets/images/icons/icon-pinterest-color.svg"
  },
  "/assets/images/icons/icon-plane-header.svg": {
    "type": "image/svg+xml",
    "etag": "\"30a-2ZEcZ6d5wZu1jS+b4CfNuEnfnwI\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 778,
    "path": "../public/assets/images/icons/icon-plane-header.svg"
  },
  "/assets/images/icons/icon-plane.svg": {
    "type": "image/svg+xml",
    "etag": "\"bab-+9f5ajPgrhsuAjXQ0W7Bi2y0+Pw\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 2987,
    "path": "../public/assets/images/icons/icon-plane.svg"
  },
  "/assets/images/icons/icon-play.svg": {
    "type": "image/svg+xml",
    "etag": "\"155-dAt11iOVzg4v4e1I4IqZQdB2nws\"",
    "mtime": "2025-01-17T16:23:16.503Z",
    "size": 341,
    "path": "../public/assets/images/icons/icon-play.svg"
  },
  "/assets/images/icons/icon-prev.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ce-QsTp4pu+3JqKMj1Iv9Vgwha5HTI\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 718,
    "path": "../public/assets/images/icons/icon-prev.svg"
  },
  "/assets/images/icons/icon-printer.svg": {
    "type": "image/svg+xml",
    "etag": "\"979-qO5y2ECGr6ysZ1gvn3NrAaJ81pY\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 2425,
    "path": "../public/assets/images/icons/icon-printer.svg"
  },
  "/assets/images/icons/icon-question-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"a91-/vUhV2/G8aXk0hBxMW1G154BRCE\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 2705,
    "path": "../public/assets/images/icons/icon-question-gray.svg"
  },
  "/assets/images/icons/icon-question.svg": {
    "type": "image/svg+xml",
    "etag": "\"475-6oh8pG4wv9FTzov9Vj08jP5erzc\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 1141,
    "path": "../public/assets/images/icons/icon-question.svg"
  },
  "/assets/images/icons/icon-resources.svg": {
    "type": "image/svg+xml",
    "etag": "\"928-+RnwrEHAPeDaHA7dd2gcFLgGtZw\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 2344,
    "path": "../public/assets/images/icons/icon-resources.svg"
  },
  "/assets/images/icons/icon-right-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"312-7uake/iwiY+TyNa+wUZ1SZ/IUhI\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 786,
    "path": "../public/assets/images/icons/icon-right-arrow.svg"
  },
  "/assets/images/icons/icon-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"37c-GcRsE9aKODzSjND8gdGgGdqZ91g\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 892,
    "path": "../public/assets/images/icons/icon-right.svg"
  },
  "/assets/images/icons/icon-scanner.svg": {
    "type": "image/svg+xml",
    "etag": "\"e0a-yQahsEkG1vTvrKnETDGis/YP7Pk\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 3594,
    "path": "../public/assets/images/icons/icon-scanner.svg"
  },
  "/assets/images/icons/icon-search.svg": {
    "type": "image/svg+xml",
    "etag": "\"261-LL4jZHFu5dVmob7fsYfans4NpgE\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 609,
    "path": "../public/assets/images/icons/icon-search.svg"
  },
  "/assets/images/icons/icon-seeding.svg": {
    "type": "image/svg+xml",
    "etag": "\"21f-9JGbSAvdzwnuN16RwCiHsYFVBqU\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 543,
    "path": "../public/assets/images/icons/icon-seeding.svg"
  },
  "/assets/images/icons/icon-settings.svg": {
    "type": "image/svg+xml",
    "etag": "\"4cb-DRaBWd133Ec6SBX1ZAUifQ8cws4\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 1227,
    "path": "../public/assets/images/icons/icon-settings.svg"
  },
  "/assets/images/icons/icon-shield.svg": {
    "type": "image/svg+xml",
    "etag": "\"d68-BEJkhHNjy8xVinclmFbDwgm2AGc\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 3432,
    "path": "../public/assets/images/icons/icon-shield.svg"
  },
  "/assets/images/icons/icon-shuffle.svg": {
    "type": "image/svg+xml",
    "etag": "\"521-PBgwdWbiI3J0NDkLVtkW/YcrBxE\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 1313,
    "path": "../public/assets/images/icons/icon-shuffle.svg"
  },
  "/assets/images/icons/icon-sort.svg": {
    "type": "image/svg+xml",
    "etag": "\"545-k2wQ5C6hrzlFYMCfxS28Q13SA0w\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 1349,
    "path": "../public/assets/images/icons/icon-sort.svg"
  },
  "/assets/images/icons/icon-star-blur.svg": {
    "type": "image/svg+xml",
    "etag": "\"365-lh65FNacgefu/C0PilLIE/Mcwsw\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 869,
    "path": "../public/assets/images/icons/icon-star-blur.svg"
  },
  "/assets/images/icons/icon-star-header.svg": {
    "type": "image/svg+xml",
    "etag": "\"334-Er//xsQw0rJIidru6hWqM4R9G5o\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 820,
    "path": "../public/assets/images/icons/icon-star-header.svg"
  },
  "/assets/images/icons/icon-star-yellow.svg": {
    "type": "image/svg+xml",
    "etag": "\"34a-PYvvt9lmXTvvM1oiEwiMetMGiKQ\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 842,
    "path": "../public/assets/images/icons/icon-star-yellow.svg"
  },
  "/assets/images/icons/icon-star.svg": {
    "type": "image/svg+xml",
    "etag": "\"352-eJszTwRcNy+WNy/IqNWywWFQ2cg\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 850,
    "path": "../public/assets/images/icons/icon-star.svg"
  },
  "/assets/images/icons/icon-stats.svg": {
    "type": "image/svg+xml",
    "etag": "\"86a-VLODkQ53+BQX+M3wVEQrrCeujEA\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 2154,
    "path": "../public/assets/images/icons/icon-stats.svg"
  },
  "/assets/images/icons/icon-sun.svg": {
    "type": "image/svg+xml",
    "etag": "\"ebe-RtlpaDkWS51hg0+O7aFFERGTjro\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 3774,
    "path": "../public/assets/images/icons/icon-sun.svg"
  },
  "/assets/images/icons/icon-tablet.svg": {
    "type": "image/svg+xml",
    "etag": "\"79b-SmILxqQZ0f6Ee6syMwhcE7IjTt0\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 1947,
    "path": "../public/assets/images/icons/icon-tablet.svg"
  },
  "/assets/images/icons/icon-temple.svg": {
    "type": "image/svg+xml",
    "etag": "\"653-mwRO+usqlVWVY79pwHsfwA/477g\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 1619,
    "path": "../public/assets/images/icons/icon-temple.svg"
  },
  "/assets/images/icons/icon-tick-active.svg": {
    "type": "image/svg+xml",
    "etag": "\"313-0GPm38is0GUqrPiHuBr1waBL0PY\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 787,
    "path": "../public/assets/images/icons/icon-tick-active.svg"
  },
  "/assets/images/icons/icon-tick-orange.svg": {
    "type": "image/svg+xml",
    "etag": "\"313-0GPm38is0GUqrPiHuBr1waBL0PY\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 787,
    "path": "../public/assets/images/icons/icon-tick-orange.svg"
  },
  "/assets/images/icons/icon-tick.svg": {
    "type": "image/svg+xml",
    "etag": "\"315-+t46tvlfipv9XjXJo41JRgsYyKo\"",
    "mtime": "2025-01-17T16:23:16.504Z",
    "size": 789,
    "path": "../public/assets/images/icons/icon-tick.svg"
  },
  "/assets/images/icons/icon-trees.svg": {
    "type": "image/svg+xml",
    "etag": "\"583-Xw06nTWc7bjjUGebU3203hKIRHs\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 1411,
    "path": "../public/assets/images/icons/icon-trees.svg"
  },
  "/assets/images/icons/icon-twitter-black.svg": {
    "type": "image/svg+xml",
    "etag": "\"547-k6b4yu7CND7WRC/Gj7p1TcGidxs\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 1351,
    "path": "../public/assets/images/icons/icon-twitter-black.svg"
  },
  "/assets/images/icons/icon-twitter-color.svg": {
    "type": "image/svg+xml",
    "etag": "\"61b-OGGBIWJWd6eRXNB2zQK44rvox9Q\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 1563,
    "path": "../public/assets/images/icons/icon-twitter-color.svg"
  },
  "/assets/images/icons/icon-twitter-gray.svg": {
    "type": "image/svg+xml",
    "etag": "\"61a-ENpe5zmLMbUl3Cub0F2YncvgIXw\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 1562,
    "path": "../public/assets/images/icons/icon-twitter-gray.svg"
  },
  "/assets/images/icons/icon-twitter-green.svg": {
    "type": "image/svg+xml",
    "etag": "\"503-btI4UZ9LFBCVe31OojaEUxAcaKw\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 1283,
    "path": "../public/assets/images/icons/icon-twitter-green.svg"
  },
  "/assets/images/icons/icon-up.svg": {
    "type": "image/svg+xml",
    "etag": "\"18c-peYi58TwsI4+oi5/VhMCbFBb+qY\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 396,
    "path": "../public/assets/images/icons/icon-up.svg"
  },
  "/assets/images/icons/icon-usb.svg": {
    "type": "image/svg+xml",
    "etag": "\"dc4-I5EIRmvsL+cDsk4IuZMCQvfdtk8\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 3524,
    "path": "../public/assets/images/icons/icon-usb.svg"
  },
  "/assets/images/icons/icon-user-add.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ac-rJHj4OTjFiNZIP30Xy9v20GQt84\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 428,
    "path": "../public/assets/images/icons/icon-user-add.svg"
  },
  "/assets/images/icons/icon-user.svg": {
    "type": "image/svg+xml",
    "etag": "\"720-wTCjneD1MXvgYLmbty4tS0oFzyU\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 1824,
    "path": "../public/assets/images/icons/icon-user.svg"
  },
  "/assets/images/icons/icon-watch.svg": {
    "type": "image/svg+xml",
    "etag": "\"e67-pfEp5R9keu51izLZQ0Fou9ECmwk\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 3687,
    "path": "../public/assets/images/icons/icon-watch.svg"
  },
  "/assets/images/icons/icon-wave.svg": {
    "type": "image/svg+xml",
    "etag": "\"108c-Lb2CuwjyQ4vTibYP1HMO8ywgcsk\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 4236,
    "path": "../public/assets/images/icons/icon-wave.svg"
  },
  "/assets/images/icons/icon-waves.svg": {
    "type": "image/svg+xml",
    "etag": "\"a33-rRxUtkDupIycKqLRth/9ntTEkUQ\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 2611,
    "path": "../public/assets/images/icons/icon-waves.svg"
  },
  "/assets/images/icons/icon-x-green.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a9-eJp8gluiWso1g65ANQ+niFDKieM\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 425,
    "path": "../public/assets/images/icons/icon-x-green.svg"
  },
  "/assets/images/icons/icon-zoom-in.svg": {
    "type": "image/svg+xml",
    "etag": "\"8e8-PDxljfvA9ec6eRP/H2IyOPqoUuo\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 2280,
    "path": "../public/assets/images/icons/icon-zoom-in.svg"
  },
  "/assets/images/icons/line-chart.svg": {
    "type": "image/svg+xml",
    "etag": "\"252-WBiC4Lt0+7pTcXvfxXJJ/FZnKmk\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 594,
    "path": "../public/assets/images/icons/line-chart.svg"
  },
  "/assets/images/icons/pattern-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"25d-HgoTGWZWRknw2XZItXkcE5mKZRU\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 605,
    "path": "../public/assets/images/icons/pattern-1.svg"
  },
  "/assets/images/icons/pattern-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b4-bn7fZAfJFFraFQoXGdG9pK8EOzI\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 692,
    "path": "../public/assets/images/icons/pattern-2.svg"
  },
  "/assets/images/icons/pattern-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"1bd-Uq/KjL4cPGoR/I3l47mHe8mW4/4\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 445,
    "path": "../public/assets/images/icons/pattern-3.svg"
  },
  "/assets/images/icons/pattern-4.svg": {
    "type": "image/svg+xml",
    "etag": "\"15f-3Vm1c/1AFPJY0Lx7PJGugUCUH8g\"",
    "mtime": "2025-01-17T16:23:16.505Z",
    "size": 351,
    "path": "../public/assets/images/icons/pattern-4.svg"
  },
  "/assets/styles/sass/components/_faq.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"270-4aObvVtR8GpKx97dXsN1HaedVOY\"",
    "mtime": "2025-01-17T16:23:16.462Z",
    "size": 624,
    "path": "../public/assets/styles/sass/components/_faq.scss"
  },
  "/assets/styles/sass/components/_header.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"c57-+6LpcDF0R+oV4gfA2bRA5EBQkm4\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 3159,
    "path": "../public/assets/styles/sass/components/_header.scss"
  },
  "/assets/styles/sass/components/_package.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"5df-KapkghLQpLjMESmgsRBqXv05UIE\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 1503,
    "path": "../public/assets/styles/sass/components/_package.scss"
  },
  "/assets/styles/sass/components/_partner.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"45-Cf4tHRTVhsdZR0tgAVYU7r9D9O4\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 69,
    "path": "../public/assets/styles/sass/components/_partner.scss"
  },
  "/assets/styles/sass/components/_slider.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"e73-OjP45y/AHG+2JJG0WG1G+B/KBkc\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 3699,
    "path": "../public/assets/styles/sass/components/_slider.scss"
  },
  "/assets/styles/sass/components/_tab.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"128-j/zhAATS7EC1Gg/d05sChWuDc3U\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 296,
    "path": "../public/assets/styles/sass/components/_tab.scss"
  },
  "/assets/styles/sass/components/_toggle.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"37-j7J/qD+BQeBPmZUo0ihl6qlgaS8\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 55,
    "path": "../public/assets/styles/sass/components/_toggle.scss"
  },
  "/assets/styles/sass/layout/_about.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2025-01-17T16:23:16.462Z",
    "size": 0,
    "path": "../public/assets/styles/sass/layout/_about.scss"
  },
  "/assets/styles/sass/base/_global.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"1ce-+4xIEBPnoI/5S1tf/VQwsbxxNbQ\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 462,
    "path": "../public/assets/styles/sass/base/_global.scss"
  },
  "/assets/styles/sass/base/_reset.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"3b-MCyPCwOvcgqlD7UZej3w0eb89O0\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 59,
    "path": "../public/assets/styles/sass/base/_reset.scss"
  },
  "/assets/styles/sass/abstracts/_mixin.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2025-01-17T16:23:16.462Z",
    "size": 0,
    "path": "../public/assets/styles/sass/abstracts/_mixin.scss"
  },
  "/assets/styles/sass/abstracts/_utils.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"d9-sWKJD5Fl91f6F2h/HJYi8cF9JjE\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 217,
    "path": "../public/assets/styles/sass/abstracts/_utils.scss"
  },
  "/assets/styles/sass/abstracts/_variables.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"113-GeeI2dOi1nGGP7vGiNK6h1xFL8c\"",
    "mtime": "2025-01-17T16:23:16.506Z",
    "size": 275,
    "path": "../public/assets/styles/sass/abstracts/_variables.scss"
  },
  "/assets/styles/sass/pages/_home.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"467-QRHW7efQmeLHCN7JowuR2h/0ksI\"",
    "mtime": "2025-01-17T16:23:16.462Z",
    "size": 1127,
    "path": "../public/assets/styles/sass/pages/_home.scss"
  },
  "/assets/styles/sass/themes/_theme.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2025-01-17T16:23:16.463Z",
    "size": 0,
    "path": "../public/assets/styles/sass/themes/_theme.scss"
  },
  "/assets/styles/sass/vendors/_bootstrap.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2025-01-17T16:23:16.467Z",
    "size": 0,
    "path": "../public/assets/styles/sass/vendors/_bootstrap.scss"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve$1 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _MlqaGk = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _CsZ8Jb = defineEventHandler(async (e) => {
  if (e.context.siteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
});

const _w7zIfE = defineEventHandler(async (e) => {
  const nitro = useNitroApp();
  const { indexable, hints } = getSiteRobotConfig(e);
  const { credits, usingNuxtContent, cacheControl } = useRuntimeConfig(e)["nuxt-robots"];
  let robotsTxtCtx = {
    errors: [],
    sitemaps: [],
    groups: [
      {
        allow: [],
        comment: [],
        userAgent: ["*"],
        disallow: ["/"]
      }
    ]
  };
  if (indexable) {
    robotsTxtCtx = await resolveRobotsTxtContext(e);
    robotsTxtCtx.sitemaps = [...new Set(
      asArray(robotsTxtCtx.sitemaps).map((s) => !s.startsWith("http") ? withSiteUrl(e, s, { withBase: true, absolute: true }) : s)
    )];
    if (usingNuxtContent) {
      const contentWithRobotRules = await e.$fetch("/__robots__/nuxt-content.json", {
        headers: {
          Accept: "application/json"
        }
      });
      if (String(contentWithRobotRules).trim().startsWith("<!DOCTYPE")) {
        logger$1.error("Invalid HTML returned from /__robots__/nuxt-content.json, skipping.");
      } else {
        for (const group of robotsTxtCtx.groups) {
          if (group.userAgent.includes("*")) {
            group.disallow.push(...contentWithRobotRules);
            group.disallow = group.disallow.filter(Boolean);
          }
        }
      }
    }
  }
  let robotsTxt = generateRobotsTxt(robotsTxtCtx);
  if (credits) {
    robotsTxt = [
      `# START nuxt-robots (${indexable ? "indexable" : "indexing disabled"})`,
      robotsTxt,
      "# END nuxt-robots"
    ].filter(Boolean).join("\n");
  }
  setHeader(e, "Content-Type", "text/plain; charset=utf-8");
  setHeader(e, "Cache-Control", globalThis._importMeta_.test || !cacheControl ? "no-store" : cacheControl);
  const hookCtx = { robotsTxt, e };
  await nitro.hooks.callHook("robots:robots-txt", hookCtx);
  return hookCtx.robotsTxt;
});

const _pPPbbB = defineEventHandler(async (e) => {
  if (e.path === "/robots.txt" || e.path.startsWith("/__") || e.path.startsWith("/api") || e.path.startsWith("/_nuxt"))
    return;
  const robotConfig = getPathRobotConfig(e);
  const nuxtRobotsConfig = useRuntimeConfig(e)["nuxt-robots"];
  if (nuxtRobotsConfig) {
    const { header } = nuxtRobotsConfig;
    if (header) {
      setHeader(e, "X-Robots-Tag", robotConfig.rule);
    }
    e.context.robots = robotConfig;
  }
});

createConsola({
  defaults: {
    tag: "@nuxt/sitemap"
  }
});
const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter$1({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSimpleSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _j3C6JQ = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSimpleSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const referrerPath = parseURL(referrer).pathname;
  const isNotIndexButHasIndex = referrerPath !== "/sitemap.xml" && referrerPath !== "/sitemap_index.xml" && referrerPath.endsWith(".xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery$1(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter$1({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [path === "/" ? path : withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, app.baseURL).pathname;
    const pathWithoutQuery = withoutQuery(path);
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(pathWithoutQuery === "/" ? pathWithoutQuery : withoutTrailingSlash(pathWithoutQuery), app.baseURL)
    ).reverse());
  };
}

function resolve(s, resolvers) {
  if (typeof s === "undefined" || !resolvers)
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function removeTrailingSlash(s) {
  return s.replace(/\/(\?|#|$)/, "$1");
}
function preNormalizeEntry(_e, resolvers) {
  const e = typeof _e === "string" ? { loc: _e } : { ..._e };
  if (e.url && !e.loc) {
    e.loc = e.url;
    delete e.url;
  }
  if (typeof e.loc !== "string") {
    e.loc = "";
  }
  e.loc = removeTrailingSlash(e.loc);
  e._abs = hasProtocol(e.loc, { acceptRelative: false, strict: false });
  try {
    e._path = e._abs ? parseURL(e.loc) : parsePath(e.loc);
  } catch (e2) {
    e2._path = null;
  }
  if (e._path) {
    const query = parseQuery(e._path.search);
    const qs = stringifyQuery(query);
    e._relativeLoc = `${encodePath(e._path?.pathname)}${qs.length ? `?${qs}` : ""}`;
    if (e._path.host) {
      e.loc = stringifyParsedURL(e._path);
    } else {
      e.loc = e._relativeLoc;
    }
  } else if (!isEncoded(e.loc)) {
    e.loc = encodeURI(e.loc);
  }
  if (e.loc === "")
    e.loc = `/`;
  e.loc = resolve(e.loc, resolvers);
  e._key = `${e._sitemap || ""}${withoutTrailingSlash(e.loc)}`;
  return e;
}
function isEncoded(url) {
  try {
    return url !== decodeURIComponent(url);
  } catch {
    return false;
  }
}
function normaliseEntry(_e, defaults, resolvers) {
  const e = defu(_e, defaults);
  if (e.lastmod) {
    const date = normaliseDate(e.lastmod);
    if (date)
      e.lastmod = date;
    else
      delete e.lastmod;
  }
  if (!e.lastmod)
    delete e.lastmod;
  e.loc = resolve(e.loc, resolvers);
  if (e.alternatives) {
    e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
      const a = { ...e2 };
      if (typeof a.href === "string")
        a.href = resolve(a.href, resolvers);
      else if (typeof a.href === "object" && a.href)
        a.href = resolve(a.href.href, resolvers);
      return a;
    }), "hreflang");
  }
  if (e.images) {
    e.images = mergeOnKey(e.images.map((i) => {
      i = { ...i };
      i.loc = resolve(i.loc, resolvers);
      return i;
    }), "loc");
  }
  if (e.videos) {
    e.videos = e.videos.map((v) => {
      v = { ...v };
      if (v.content_loc)
        v.content_loc = resolve(v.content_loc, resolvers);
      return v;
    });
  }
  return e;
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isHtmlResponse = false;
  try {
    const fetchContainer = url.startsWith("/") && event ? event : globalThis;
    const urls = await fetchContainer.$fetch(url, {
      ...options,
      responseType: "json",
      signal: timeoutController.signal,
      headers: defu(options?.headers, {
        Accept: "application/json"
      }, event ? { Host: getRequestHost(event, { xForwardedHost: true }) } : {}),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isHtmlResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    if (abortRequestTimeout) {
      clearTimeout(abortRequestTimeout);
    }
  }
}
function globalSitemapSources() {
  return import('../virtual/global-sources.mjs').then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? import('../virtual/child-sources.mjs').then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    // news & others?
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  if (options.minify)
    return input.join("").replace(/(?<!<[^>]*)\s(?![^<]*>)/g, "");
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function resolveSitemapEntries(sitemap, sources, runtimeConfig, resolvers) {
  const {
    autoI18n,
    isI18nMapped
  } = runtimeConfig;
  const filterPath = createPathFilter({
    include: sitemap.include,
    exclude: sitemap.exclude
  });
  const _urls = sources.flatMap((e) => e.urls).map((_e) => {
    const e = preNormalizeEntry(_e, resolvers);
    if (!e.loc || !filterPath(e.loc))
      return false;
    return e;
  }).filter(Boolean);
  let validI18nUrlsForTransform = [];
  const withoutPrefixPaths = {};
  if (autoI18n && autoI18n.strategy !== "no_prefix") {
    const localeCodes = autoI18n.locales.map((l) => l.code);
    validI18nUrlsForTransform = _urls.map((_e, i) => {
      if (_e._abs)
        return false;
      const split = splitForLocales(_e._relativeLoc, localeCodes);
      let localeCode = split[0];
      const pathWithoutPrefix = split[1];
      if (!localeCode)
        localeCode = autoI18n.defaultLocale;
      const e = _e;
      e._pathWithoutPrefix = pathWithoutPrefix;
      const locale = autoI18n.locales.find((l) => l.code === localeCode);
      if (!locale)
        return false;
      e._locale = locale;
      e._index = i;
      e._key = `${e._sitemap || ""}${e._path?.pathname || "/"}${e._path.search}`;
      withoutPrefixPaths[pathWithoutPrefix] = withoutPrefixPaths[pathWithoutPrefix] || [];
      if (!withoutPrefixPaths[pathWithoutPrefix].some((e2) => e2._locale.code === locale.code))
        withoutPrefixPaths[pathWithoutPrefix].push(e);
      return e;
    }).filter(Boolean);
    for (const e of validI18nUrlsForTransform) {
      if (!e._i18nTransform && !e.alternatives?.length) {
        const alternatives = withoutPrefixPaths[e._pathWithoutPrefix].map((u) => {
          const entries = [];
          if (u._locale.code === autoI18n.defaultLocale) {
            entries.push({
              href: u.loc,
              hreflang: "x-default"
            });
          }
          entries.push({
            href: u.loc,
            hreflang: u._locale._hreflang || autoI18n.defaultLocale
          });
          return entries;
        }).flat().filter(Boolean);
        if (alternatives.length)
          e.alternatives = alternatives;
      } else if (e._i18nTransform) {
        delete e._i18nTransform;
        if (autoI18n.strategy === "no_prefix") ;
        if (autoI18n.differentDomains) {
          e.alternatives = [
            {
              // apply default locale domain
              ...autoI18n.locales.find((l) => [l.code, l.language].includes(autoI18n.defaultLocale)),
              code: "x-default"
            },
            ...autoI18n.locales.filter((l) => !!l.domain)
          ].map((locale) => {
            return {
              hreflang: locale._hreflang,
              href: joinURL(withHttps(locale.domain), e._pathWithoutPrefix)
            };
          });
        } else {
          for (const l of autoI18n.locales) {
            let loc = joinURL(`/${l.code}`, e._pathWithoutPrefix);
            if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
              loc = e._pathWithoutPrefix;
            const _sitemap = isI18nMapped ? l._sitemap : void 0;
            const newEntry = preNormalizeEntry({
              _sitemap,
              ...e,
              _index: void 0,
              _key: `${_sitemap || ""}${loc || "/"}${e._path.search}`,
              _locale: l,
              loc,
              alternatives: [{ code: "x-default", _hreflang: "x-default" }, ...autoI18n.locales].map((locale) => {
                const code = locale.code === "x-default" ? autoI18n.defaultLocale : locale.code;
                const isDefault = locale.code === "x-default" || locale.code === autoI18n.defaultLocale;
                let href = "";
                if (autoI18n.strategy === "prefix") {
                  href = joinURL("/", code, e._pathWithoutPrefix);
                } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
                  if (isDefault) {
                    href = e._pathWithoutPrefix;
                  } else {
                    href = joinURL("/", code, e._pathWithoutPrefix);
                  }
                }
                if (!filterPath(href))
                  return false;
                return {
                  hreflang: locale._hreflang,
                  href
                };
              }).filter(Boolean)
            }, resolvers);
            if (e._locale.code === newEntry._locale.code) {
              _urls[e._index] = newEntry;
              e._index = void 0;
            } else {
              _urls.push(newEntry);
            }
          }
        }
      }
      if (isI18nMapped) {
        e._sitemap = e._sitemap || e._locale._sitemap;
        e._key = `${e._sitemap || ""}${e.loc || "/"}${e._path.search}`;
      }
      if (e._index)
        _urls[e._index] = e;
    }
  }
  return _urls;
}
async function buildSitemapUrls(sitemap, resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  function maybeSlice(urls) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.language, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: _tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sources = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sources.push(...await childSitemapSources(sitemap));
  const resolvedSources = await resolveSitemapSources(sources, resolvers.event);
  const enhancedUrls = resolveSitemapEntries(sitemap, resolvedSources, { autoI18n, isI18nMapped }, resolvers);
  const filteredUrls = enhancedUrls.filter((e) => {
    if (isMultiSitemap && e._sitemap && sitemap.sitemapName)
      return e._sitemap === sitemap.sitemapName;
    return true;
  });
  const sortedUrls = maybeSort(filteredUrls);
  return maybeSlice(sortedUrls);
}
function urlsToXml(urls, resolvers, { version, xsl, credits, minify }) {
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits, minify });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || !false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(event, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  const resolvers = useNitroUrlResolvers(event);
  let sitemapUrls = await buildSitemapUrls(definition, resolvers, runtimeConfig);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const { autoI18n } = runtimeConfig;
  sitemapUrls = sitemapUrls.map((u) => {
    const path = u._path?.pathname || u.loc;
    if (!getPathRobotConfig(event, { path, skipSiteIndexable: true }).indexable)
      return false;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.robots !== "undefined" && !routeRules.robots) {
      return false;
    }
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase().includes("noindex"));
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu(u, routeRules.sitemap) : u;
  }).filter(Boolean);
  const resolvedCtx = {
    urls: sitemapUrls,
    sitemapName
  };
  await nitro.hooks.callHook("sitemap:resolved", resolvedCtx);
  const maybeSort = (urls2) => runtimeConfig.sortEntries ? sortSitemapUrls(urls2) : urls2;
  const normalizedPreDedupe = resolvedCtx.urls.map((e) => normaliseEntry(e, definition.defaults, resolvers));
  const urls = maybeSort(mergeOnKey(normalizedPreDedupe, "_key").map((e) => normaliseEntry(e, definition.defaults, resolvers)));
  const sitemap = urlsToXml(urls, resolvers, runtimeConfig);
  const ctx = { sitemap, sitemapName };
  await nitro.hooks.callHook("sitemap:output", ctx);
  setHeader(event, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(event, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(event, "Cache-Control", `no-cache, no-store`);
  event.context._isSitemap = true;
  return ctx.sitemap;
}

const _wp1wkJ = defineEventHandler(async (e) => {
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const _rqigLN = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_wVpSrh = () => import('../routes/api/sitemap.mjs');
const _lazy_YS40FE = () => import('../routes/renderer.mjs');
const _lazy_i3JBjN = () => import('../routes/sitemap_index.xml.mjs');
const _lazy_vSf6Nm = () => import('../routes/__sitemap__/_sitemap_.xml.mjs');
const _lazy_MBLbBI = () => import('../routes/__og-image__/font/font.mjs');
const _lazy_NMiOKu = () => import('../routes/__og-image__/image/image.mjs');

const handlers = [
  { route: '', handler: _MlqaGk, lazy: false, middleware: true, method: undefined },
  { route: '/api/sitemap', handler: _lazy_wVpSrh, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_YS40FE, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _CsZ8Jb, lazy: false, middleware: true, method: undefined },
  { route: '/robots.txt', handler: _w7zIfE, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _pPPbbB, lazy: false, middleware: true, method: undefined },
  { route: '/sitemap_index.xml', handler: _lazy_i3JBjN, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/0.xml', handler: _lazy_vSf6Nm, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/**:sitemap', handler: _lazy_vSf6Nm, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _j3C6JQ, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _wp1wkJ, lazy: false, middleware: false, method: undefined },
  { route: '/__og-image__/font/**', handler: _lazy_MBLbBI, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/image/**', handler: _lazy_NMiOKu, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/static/**', handler: _lazy_NMiOKu, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _rqigLN, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_YS40FE, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch as $, withoutLeadingSlash as A, withoutTrailingSlash as B, getRouterParam as C, createSitemap as D, prefixStorage as E, useStorage as F, useNitroOrigin as G, emojiCache as H, useOgImageRuntimeConfig as I, fetchIsland as J, normaliseFontInput as K, theme as L, withTrailingSlash as M, handleCacheHeaders as N, setHeaders as O, hash as P, parseURL as Q, setResponseHeader as R, proxyRequest as S, sendRedirect as T, resolveContext as U, H3Error as V, baseURL as W, hasProtocol as X, isScriptProtocol as Y, withQuery as Z, sanitizeStatusCode as _, defineRenderHandler as a, getContext as a0, createHooks as a1, titleCase as a2, toRouteMatcher as a3, createRouter$1 as a4, camelCase as a5, withoutBase as a6, stringifyQuery as a7, withLeadingSlash as a8, withBase as a9, decodeHtml as aa, logger as ab, toBase64Image as ac, createConsola as ad, htmlDecodeQuotes as ae, fontCache as af, parseQuery as ag, encodeParam as ah, encodePath as ai, nodeServer as aj, empty$1 as ak, buildAssetsURL as b, createError$1 as c, defineSitemapEventHandler as d, getRouteRules as e, getResponseStatus as f, getQuery as g, getResponseStatusText as h, destr as i, useNitroApp as j, resolveSitemapSources as k, globalSitemapSources as l, resolveSitemapEntries as m, defu as n, joinURL as o, publicAssetsURL as p, normaliseDate as q, readBody as r, escapeValueForXml as s, sortSitemapUrls as t, useRuntimeConfig as u, defineEventHandler as v, wrapSitemapXml as w, useSimpleSitemapRuntimeConfig as x, useNitroUrlResolvers as y, setHeader as z };
//# sourceMappingURL=nitro.mjs.map
