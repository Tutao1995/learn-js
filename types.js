const toString = Object.prototype.toString;
const isString = (obj) => {
    return toString.call(obj) === '[object String]'
}
const isObject = (obj) => {
    return toString.call(obj) === '[object Object]'
}
const isHtmlElement = (node) => {
    return node && node.type === Node.ELEMENT_NODE;
}
const isFunction = (obj) => {
    let getType = {};
    return obj && getType.toString.call(obj) === '[object Function]'
}
const isUndefined = (obj) => {
    return obj === void 0;
}

export {
    isString,
    isObject,
    isHtmlElement,
    isFunction,
    isUndefined
}