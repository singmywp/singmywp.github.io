(function (exports) {
    'raw js';
    'use strict';

    function arrayPop(array) {
        if (array.length === 0) {
            return null;
        }
        return array.pop();
    }
    function arrayShift(array) {
        if (array.length === 0) {
            return null;
        }
        return array.shift();
    }
    function arrayFind(array, predicate) {
        const index = array.findIndex(predicate);
        if (index < 0) {
            return null;
        }
        return array[index];
    }
    function arrayFindLast(array, predicate) {
        const index = array.findLastIndex(predicate);
        if (index < 0) {
            return null;
        }
        return array[index];
    }
    function arrayAt(array, index) {
        if (index < -array.length || index >= array.length) {
            return null;
        }
        return array.at(index);
    }

    /**
     * copy from @uts/shared
     */
    const UTS_CLASS_METADATA_KIND_LIST = [0, 1, 2];

    function getType(val) {
        return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
    }
    function isPlainObject(val) {
        if (val == null || typeof val !== 'object') {
            return false;
        }
        const proto = Object.getPrototypeOf(val);
        return proto === Object.prototype || proto === null;
    }

    // TODO 实现UTSError
    class UTSError extends Error {
        constructor(message) {
            super(message);
        }
    }

    function isUTSMetadata(metadata) {
        return !!(metadata &&
            UTS_CLASS_METADATA_KIND_LIST.includes(metadata.kind) &&
            metadata.interfaces);
    }
    function isNativeType(proto) {
        return !proto || proto === Object.prototype;
    }
    const utsMetadataKey = "$UTSMetadata$" /* IDENTIFIER.UTS_METADATA */;
    /**
     * 处理复杂的继承关系。
     * 例如：
     * class A extends abstract class B，abstract class B implements interface C
     * new A() instanceof C -> true
     */
    function getParentTypeList(type) {
        const metadata = utsMetadataKey in type ? type[utsMetadataKey] : {};
        let interfaces = [];
        if (!isUTSMetadata(metadata)) {
            interfaces = [];
        }
        else {
            interfaces = metadata.interfaces || [];
        }
        const proto = Object.getPrototypeOf(type);
        if (!isNativeType(proto)) {
            interfaces.push(proto.constructor);
        }
        return interfaces;
    }
    function isImplementationOf(leftType, rightType, visited = []) {
        if (isNativeType(leftType)) {
            return false;
        }
        if (leftType === rightType) {
            return true;
        }
        visited.push(leftType);
        const parentTypeList = getParentTypeList(leftType);
        return parentTypeList.some((parentType) => {
            if (visited.includes(parentType)) {
                return false;
            }
            return isImplementationOf(parentType, rightType, visited);
        });
    }
    function isInstanceOf(value, type) {
        if (type === UTSValueIterable) {
            return value && value[Symbol.iterator];
        }
        const isNativeInstanceofType = value instanceof type;
        if (isNativeInstanceofType || typeof value !== 'object' || value === null) {
            return isNativeInstanceofType;
        }
        const proto = Object.getPrototypeOf(value).constructor;
        return isImplementationOf(proto, type);
    }
    function isBaseType(type) {
        return type === Number || type === String || type === Boolean;
    }
    function isUnknownType(type) {
        return type === 'Unknown';
    }
    function isAnyType(type) {
        return type === 'Any';
    }
    function isUTSType(type) {
        return type && type.prototype && type.prototype instanceof UTSType;
    }
    function normalizeGenericValue(value, genericType, isJSONParse = false) {
        return value == null
            ? null
            : isBaseType(genericType) ||
                isUnknownType(genericType) ||
                isAnyType(genericType)
                ? value
                : genericType === Array
                    ? new Array(...value)
                    : new genericType(value, undefined, isJSONParse);
    }
    class UTSType {
        static get$UTSMetadata$(...args) {
            return {
                name: '',
                kind: 2 /* UTS_CLASS_METADATA_KIND.TYPE */,
                interfaces: [],
                fields: {},
            };
        }
        get $UTSMetadata$() {
            return UTSType.get$UTSMetadata$();
        }
        // TODO 缓存withGenerics结果
        static withGenerics(parent, generics, isJSONParse = false) {
            // 仅JSON.parse uni.request内报错，其他地方不报错
            // generic类型为UTSType子类或Array或基础类型，否则报错
            if (isJSONParse) {
                const illegalGeneric = generics.find((item) => !(item === Array ||
                    isBaseType(item) ||
                    isUnknownType(item) ||
                    isAnyType(item) ||
                    item === UTSJSONObject ||
                    (item.prototype && item.prototype instanceof UTSType)));
                if (illegalGeneric) {
                    throw new Error('Generic is not UTSType or Array or UTSJSONObject or base type, generic: ' +
                        illegalGeneric);
                }
            }
            if (parent === Array) {
                // 不带泛型的Array有一部分不会进入这里，需要在构造type时处理
                return class UTSArray extends UTSType {
                    constructor(options, isJSONParse = false) {
                        if (!Array.isArray(options)) {
                            throw new UTSError(`Failed to contruct type, ${options} is not an array`);
                        }
                        super();
                        // @ts-expect-error
                        return options.map((item) => {
                            return normalizeGenericValue(item, generics[0], isJSONParse);
                        });
                    }
                };
            }
            else if (parent === Map || parent === WeakMap) {
                return class UTSMap extends UTSType {
                    constructor(options, isJSONParse = false) {
                        if (options == null || typeof options !== 'object') {
                            throw new UTSError(`Failed to contruct type, ${options} is not an object`);
                        }
                        super();
                        const obj = new parent();
                        for (const key in options) {
                            obj.set(normalizeGenericValue(key, generics[0], isJSONParse), normalizeGenericValue(options[key], generics[1], isJSONParse));
                        }
                        return obj;
                    }
                };
            }
            else if (isUTSType(parent)) {
                return class VirtualClassWithGenerics extends parent {
                    static get$UTSMetadata$() {
                        return parent.get$UTSMetadata$(...generics);
                    }
                    constructor(options, metadata = VirtualClassWithGenerics.get$UTSMetadata$(), isJSONParse = false) {
                        // @ts-expect-error
                        super(options, metadata, isJSONParse);
                    }
                };
            }
            else {
                return parent;
            }
        }
        constructor() { }
        static initProps(options, metadata, isJSONParse = false) {
            // 为了性能，非JSON.parse场景直接返回
            if (!isJSONParse) {
                return options;
            }
            const obj = {};
            if (!metadata.fields) {
                return obj;
            }
            for (const key in metadata.fields) {
                const { type, optional, jsonField } = metadata.fields[key];
                const realKey = isJSONParse ? jsonField || key : key;
                if (options[realKey] == null) {
                    if (optional) {
                        obj[key] = null;
                        continue;
                    }
                    else {
                        throw new UTSError(`Failed to contruct type, missing required property: ${key}`);
                    }
                }
                if (isUTSType(type)) {
                    // 带有泛型的数组会走此分支
                    obj[key] = isJSONParse
                        ? // @ts-expect-error
                            new type(options[realKey], undefined, isJSONParse)
                        : options[realKey];
                }
                else if (type === Array) {
                    // 不带泛型的数组会走此分支
                    if (!Array.isArray(options[realKey])) {
                        throw new UTSError(`Failed to contruct type, property ${key} is not an array`);
                    }
                    obj[key] = options[realKey];
                }
                else {
                    obj[key] = options[realKey];
                }
            }
            return obj;
        }
    }

    function initUTSJSONObjectProperties(obj) {
        const propertyList = [
            '_resolveKeyPath',
            '_getValue',
            'toJSON',
            'get',
            'set',
            'getAny',
            'getString',
            'getNumber',
            'getBoolean',
            'getJSON',
            'getArray',
            'toMap',
            'forEach',
        ];
        const propertyDescriptorMap = {};
        for (let i = 0; i < propertyList.length; i++) {
            const property = propertyList[i];
            propertyDescriptorMap[property] = {
                enumerable: false,
                value: obj[property],
            };
        }
        Object.defineProperties(obj, propertyDescriptorMap);
    }
    function getRealDefaultValue(defaultValue) {
        return defaultValue === void 0 ? null : defaultValue;
    }
    class UTSJSONObject {
        static keys(obj) {
            return Object.keys(obj);
        }
        static assign(target, ...sources) {
            for (let i = 0; i < sources.length; i++) {
                const source = sources[i];
                for (let key in source) {
                    target[key] = source[key];
                }
            }
            return target;
        }
        constructor(content = {}) {
            if (content instanceof Map) {
                content.forEach((value, key) => {
                    this[key] = value;
                });
            }
            else {
                for (const key in content) {
                    if (Object.prototype.hasOwnProperty.call(content, key)) {
                        this[key] = content[key];
                    }
                }
            }
            initUTSJSONObjectProperties(this);
        }
        _resolveKeyPath(keyPath) {
            // 非法keyPath不抛出错误，直接返回空数组
            let token = '';
            const keyPathArr = [];
            let inOpenParentheses = false;
            for (let i = 0; i < keyPath.length; i++) {
                const word = keyPath[i];
                switch (word) {
                    case '.':
                        if (token.length > 0) {
                            keyPathArr.push(token);
                            token = '';
                        }
                        break;
                    case '[': {
                        inOpenParentheses = true;
                        if (token.length > 0) {
                            keyPathArr.push(token);
                            token = '';
                        }
                        break;
                    }
                    case ']':
                        if (inOpenParentheses) {
                            if (token.length > 0) {
                                const tokenFirstChar = token[0];
                                const tokenLastChar = token[token.length - 1];
                                if ((tokenFirstChar === '"' && tokenLastChar === '"') ||
                                    (tokenFirstChar === "'" && tokenLastChar === "'") ||
                                    (tokenFirstChar === '`' && tokenLastChar === '`')) {
                                    if (token.length > 2) {
                                        token = token.slice(1, -1);
                                    }
                                    else {
                                        return [];
                                    }
                                }
                                else if (!/^\d+$/.test(token)) {
                                    return [];
                                }
                                keyPathArr.push(token);
                                token = '';
                            }
                            else {
                                return [];
                            }
                            inOpenParentheses = false;
                        }
                        else {
                            return [];
                        }
                        break;
                    default:
                        token += word;
                        break;
                }
                if (i === keyPath.length - 1) {
                    if (token.length > 0) {
                        keyPathArr.push(token);
                        token = '';
                    }
                }
            }
            return keyPathArr;
        }
        _getValue(keyPath, defaultValue) {
            const keyPathArr = this._resolveKeyPath(keyPath);
            const realDefaultValue = getRealDefaultValue(defaultValue);
            if (keyPathArr.length === 0) {
                return realDefaultValue;
            }
            let value = this;
            for (let i = 0; i < keyPathArr.length; i++) {
                const key = keyPathArr[i];
                if (value instanceof Object) {
                    if (key in value) {
                        value = value[key];
                    }
                    else {
                        return realDefaultValue;
                    }
                }
                else {
                    return realDefaultValue;
                }
            }
            return value;
        }
        get(key) {
            return this._getValue(key);
        }
        set(key, value) {
            this[key] = value;
        }
        getAny(key, defaultValue) {
            const realDefaultValue = getRealDefaultValue(defaultValue);
            return this._getValue(key, realDefaultValue);
        }
        getString(key, defaultValue) {
            const realDefaultValue = getRealDefaultValue(defaultValue);
            const value = this._getValue(key, realDefaultValue);
            if (typeof value === 'string') {
                return value;
            }
            else {
                return realDefaultValue;
            }
        }
        getNumber(key, defaultValue) {
            const realDefaultValue = getRealDefaultValue(defaultValue);
            const value = this._getValue(key, realDefaultValue);
            if (typeof value === 'number') {
                return value;
            }
            else {
                return realDefaultValue;
            }
        }
        getBoolean(key, defaultValue) {
            const realDefaultValue = getRealDefaultValue(defaultValue);
            const boolean = this._getValue(key, realDefaultValue);
            if (typeof boolean === 'boolean') {
                return boolean;
            }
            else {
                return realDefaultValue;
            }
        }
        getJSON(key, defaultValue) {
            const realDefaultValue = getRealDefaultValue(defaultValue);
            let value = this._getValue(key, realDefaultValue);
            if (value instanceof Object) {
                return value;
            }
            else {
                return realDefaultValue;
            }
        }
        getArray(key, defaultValue) {
            const realDefaultValue = getRealDefaultValue(defaultValue);
            let value = this._getValue(key, realDefaultValue);
            if (value instanceof Array) {
                return value;
            }
            else {
                return realDefaultValue;
            }
        }
        toMap() {
            let map = new Map();
            for (let key in this) {
                map.set(key, this[key]);
            }
            return map;
        }
        forEach(callback) {
            for (let key in this) {
                callback(this[key], key);
            }
        }
    }

    const OriginalJSON = JSON;
    function createUTSJSONObjectOrArray(obj) {
        if (Array.isArray(obj)) {
            return obj.map((item) => {
                return createUTSJSONObjectOrArray(item);
            });
        }
        else if (isPlainObject(obj)) {
            const result = new UTSJSONObject({});
            for (const key in obj) {
                const value = obj[key];
                result[key] = createUTSJSONObjectOrArray(value);
            }
            return result;
        }
        return obj;
    }
    function parseObjectOrArray(object, utsType) {
        const objectType = getType(object);
        if (object === null || (objectType !== 'object' && objectType !== 'array')) {
            return object;
        }
        if (utsType && utsType !== UTSJSONObject) {
            try {
                return new utsType(object, undefined, true);
            }
            catch (error) {
                console.error(error);
                return null;
            }
        }
        if (objectType === 'array' || objectType === 'object') {
            return createUTSJSONObjectOrArray(object);
        }
        return object;
    }
    const UTSJSON = {
        parse: (text, reviver, utsType) => {
            // @ts-expect-error
            if (reviver && (isUTSType(reviver) || reviver === UTSJSONObject)) {
                utsType = reviver;
                reviver = undefined;
            }
            try {
                const parseResult = OriginalJSON.parse(text, reviver);
                return parseObjectOrArray(parseResult, utsType);
            }
            catch (error) {
                console.error(error);
                return null;
            }
        },
        parseArray(text, utsType) {
            try {
                const parseResult = OriginalJSON.parse(text);
                if (Array.isArray(parseResult)) {
                    return parseObjectOrArray(parseResult, utsType ? UTSType.withGenerics(Array, [utsType], true) : undefined);
                }
                return null;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        },
        parseObject(text, utsType) {
            try {
                const parseResult = OriginalJSON.parse(text);
                if (Array.isArray(parseResult)) {
                    return null;
                }
                return parseObjectOrArray(parseResult, utsType);
            }
            catch (error) {
                console.error(error);
                return null;
            }
        },
        stringify: (value, replacer, space) => {
            try {
                if (!replacer) {
                    const visited = new Set();
                    replacer = function (_, v) {
                        if (typeof v === 'object') {
                            if (visited.has(v)) {
                                return null;
                            }
                            visited.add(v);
                        }
                        return v;
                    };
                }
                return OriginalJSON.stringify(value, replacer, space);
            }
            catch (error) {
                console.error(error);
                return '';
            }
        },
    };

    function mapGet(map, key) {
        if (!map.has(key)) {
            return null;
        }
        return map.get(key);
    }

    function stringCodePointAt(str, pos) {
        if (pos < 0 || pos >= str.length) {
            return null;
        }
        return str.codePointAt(pos);
    }
    function stringAt(str, pos) {
        if (pos < -str.length || pos >= str.length) {
            return null;
        }
        return str.at(pos);
    }

    function weakMapGet(map, key) {
        if (!map.has(key)) {
            return null;
        }
        return map.get(key);
    }

    const UTS = {
        arrayAt,
        arrayFind,
        arrayFindLast,
        arrayPop,
        arrayShift,
        isInstanceOf,
        UTSType,
        mapGet,
        stringAt,
        stringCodePointAt,
        weakMapGet,
        JSON: UTSJSON,
    };

    class UniError extends Error {
        constructor(errSubject, errCode, errMsg) {
            let options = {};
            const argsLength = Array.from(arguments).length;
            switch (argsLength) {
                case 0:
                    errSubject = '';
                    errMsg = '';
                    errCode = 0;
                    break;
                case 1:
                    errMsg = errSubject;
                    errSubject = '';
                    errCode = 0;
                    break;
                case 2:
                    errMsg = errSubject;
                    options = errCode;
                    errCode = options.errCode || 0;
                    errSubject = options.errSubject || '';
                    break;
            }
            super(errMsg);
            this.name = 'UniError';
            this.errSubject = errSubject;
            this.errCode = errCode;
            this.errMsg = errMsg;
            if (options.data) {
                this.data = options.data;
            }
            if (options.cause) {
                this.cause = options.cause;
            }
        }
        set errMsg(msg) {
            this.message = msg;
        }
        get errMsg() {
            return this.message;
        }
        toString() {
            return this.errMsg;
        }
        toJSON() {
            return {
                errSubject: this.errSubject,
                errCode: this.errCode,
                errMsg: this.errMsg,
                data: this.data,
                cause: this.cause && typeof this.cause.toJSON === 'function'
                    ? this.cause.toJSON()
                    : this.cause,
            };
        }
    }

    class UTSValueIterable {
    }
    function getGlobalOnce() {
        if (typeof globalThis !== 'undefined') {
            return globalThis;
        }
        // worker
        if (typeof self !== 'undefined') {
            return self;
        }
        // browser
        if (typeof window !== 'undefined') {
            return window;
        }
        // nodejs
        // if (typeof global !== 'undefined') {
        //   return global
        // }
        function g() {
            return this;
        }
        if (typeof g() !== 'undefined') {
            return g();
        }
        return (function () {
            return new Function('return this')();
        })();
    }
    let g = undefined;
    function getGlobal() {
        if (g) {
            return g;
        }
        g = getGlobalOnce();
        return g;
    }

    const realGlobal = getGlobal();
    realGlobal.UTS = UTS;
    realGlobal.UTSJSONObject = UTSJSONObject;
    realGlobal.UTSValueIterable = UTSValueIterable;
    realGlobal.UniError = UniError;
    class WorkerTaskImpl {
        constructor() {
            {
                self.onmessage = (e) => {
                    this.onMessage(e.data);
                };
            }
        }
        entry() { }
        onMessage(message) { }
        postMessage(message, options = null) {
            {
                let _options = undefined;
                if ((options === null || options === void 0 ? void 0 : options.transfer) && options.transfer.length > 0) {
                    _options = {
                        transfer: options.transfer,
                    };
                }
                self.postMessage(message, _options);
            }
        }
    }
    // @ts-expect-error
    globalThis.WorkerTaskImpl = WorkerTaskImpl;

    exports.UTS = UTS;
    exports.UTSJSONObject = UTSJSONObject;
    exports.UTSValueIterable = UTSValueIterable;
    exports.UniError = UniError;
    exports.WorkerTaskImpl = WorkerTaskImpl;

    return exports;

})({});

function t(t,n,o){const e=t[n];t[n]=t[o],t[o]=e}function n(t){const n=t.length;for(let o=1;o<n;o++){const n=t[o];let e=o-1;for(;e>=0&&t[e]>n;)t[e+1]=t[e],e-=1;t[e+1]=n}}function o(n,o,e){t(n,o+Math.floor((e-o)/2),e);const l=n[e];let r=o-1;for(let f=o;f<e;f++)n[f]<l&&(r+=1,t(n,r,f));return t(n,r+1,e),r+1}function e(t,n,o,e,l){let r=o,f=e,s=o;for(;r<e&&f<l;)t[r]<=t[f]?(n[s]=t[r],r+=1):(n[s]=t[f],f+=1),s+=1;for(;r<e;)n[s]=t[r],r+=1,s+=1;for(;f<l;)n[s]=t[f],f+=1,s+=1}function l(n,o,e){let l=o;for(;;){const o=2*l+1;if(o>=e)return null;let r=l;n[o]>n[r]&&(r=o);const f=o+1;if(f<e&&n[f]>n[r]&&(r=f),r==l)return null;t(n,l,r),l=r}}class r extends WorkerTaskImpl{constructor(){super()}entry(){}onMessage(r=null){if(null==r)return null;const f=r,s=f.data;if(null==s)return null;const u=f.algo;let c=3;null!=u&&(c=u);const h=s,i=Date.now();0==c?function(n){const o=n.length;for(let e=0;e<o-1;e++)for(let l=0;l<o-1-e;l++)n[l]>n[l+1]&&t(n,l,l+1)}(h):1==c?function(n){const o=n.length;for(let e=0;e<o-1;e++){let l=e;for(let t=e+1;t<o;t++)n[t]<n[l]&&(l=t);l!=e&&t(n,e,l)}}(h):2==c?n(h):3==c?function(t){const n=t.length;if(n<2)return null;const e=[];for(e.push(0),e.push(n-1);e.length>0;){const n=UTS.arrayPop(e),l=UTS.arrayPop(e);if(l>=n)continue;const r=o(t,l,n);e.push(l),e.push(r-1),e.push(r+1),e.push(n)}}(h):4==c?function(t){const n=t.length;if(n<2)return null;const o=[];for(let e=0;e<n;e++)o.push(0);let l=1;for(;l<n;){let r=0;for(;r<n;)e(t,o,r,r+l<n?r+l:n,r+2*l<n?r+2*l:n),r+=2*l;for(let e=0;e<n;e++)t[e]=o[e];l*=2}}(h):5==c?function(n){const o=n.length;let e=Math.floor(o/2)-1;for(;e>=0;)l(n,e,o),e-=1;let r=o-1;for(;r>0;)t(n,0,r),l(n,0,r),r-=1}(h):6==c?function(t){const n=t.length;let o=Math.floor(n/2);for(;o>0;){for(let e=o;e<n;e++){const n=t[e];let l=e;for(;l>=o&&t[l-o]>n;)t[l]=t[l-o],l-=o;t[l]=n}o=Math.floor(o/2)}}(h):7==c&&function(t){const o=t.length;if(0==o)return null;let e=t[0],l=t[0];for(let n=1;n<o;n++)t[n]<e?e=t[n]:t[n]>l&&(l=t[n]);const r=Math.floor((l-e)/5)+1,f=[];for(let n=0;n<r;n++)f.push([]);for(let n=0;n<o;n++)f[Math.floor((t[n]-e)/5)].push(t[n]);let s=0;for(let u=0;u<r;u++){const o=f[u];n(o);for(let n=0;n<o.length;n++)t[s]=o[n],s+=1}}(h);const a=Date.now()-i,g=new UTSJSONObject;g.algo=c,g.elapsed=a,g.sortedPreview=function(t){const n=t.length<10?t.length:10,o=[];for(let e=0;e<n;e++)o.push(t[e]);return o}(h),g.sortedOk=function(t){for(let n=1;n<t.length;n++)if(t[n-1]>t[n])return!1;return!0}(h),this.postMessage(g)}}(new r).entry();
