Array.prototype.map2 = (callback) => {
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[i], i, this));        
    }
    return newArray;
}