import Vue from 'vue'
import { isString, isObject } from './types'

const hasOwnProperty = Object.prototype.hasOwnProperty;

const hasOwn = (obj,key) => {
    return hasOwnProperty.call(obj,key)
}
const extend = (to,_from) => {
    for(let key in _from){
        to[key] = _from[key]
    }
    return to
}
const toObject = (arr) => {
    let res = {};
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i]){
            extend(res,arr[i])
        }
    }
    return res
}
