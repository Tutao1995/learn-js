import isArguments from '../isArguments.js'

const spreadableSymbol = Symbol.isConcatSpreadable;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */

function isFlattenable(value) {
    return Array.isArray(value) || isArguments(value) || !!(value && value[spreadableSymbol])
}

export default isFlattenable