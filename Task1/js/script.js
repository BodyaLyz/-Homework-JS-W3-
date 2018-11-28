
if (Array.prototype.map === undefined) 
  Array.prototype.map = map
  

function map(callback, callbackContext) {
    if (!Array.isArray(this)) {
        throw new Error("Not Arrays")
    }
    if (typeof callback !== 'function') {
        throw new Error('Not function')
    }
    const result = [];
    const context = callbackContext || this
    for (let i = 0; i < this.length; i++) {
        result.push(callback.call(context, this[i], i, this))
    }
    return result;
}

console.log([1,2,3].map(item => item + 1))
