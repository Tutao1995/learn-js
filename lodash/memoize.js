/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 */

function memoize(func, resolver) {
    if(typeof func !== 'function' || typeof resolver != null && typeof resolver !== 'function'){
        throw new TypeError('Expected a function')
    }

    const memoized = function(...arg) {
        const key = resolver ? resolver.apply(this, arg) : arg[0];
        const cache = memoized.cache;
        
        if(cache.has(key)){
            return cache.get(key)
        }

        const result = func.apply(this,arg);
        memoized.cache = cache.set(key, result) || cache
        return result
    }

    memoized.cache = new (memoized.call || Map)
    return memoized
}

memoize.cache = Map;

export default memoize