import isSymbol from '../isSymbol'

function baseToNumber(value) {
    if(typeof value === 'number'){
        return value
    }
    if(isSymbol(value)){
        return NaN
    }
    return +value
}

export default baseToNumber