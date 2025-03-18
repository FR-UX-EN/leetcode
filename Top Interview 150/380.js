
var RandomizedSet = function () {
    this.map = new Map();
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) {
        return false;
    }
    const index = this.map.get(val);
    const last = this.arr[this.arr.length - 1];

    this.arr[index] = last;
    this.map.set(last, index);

    this.arr.pop();
    this.map.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(this.arr.length * Math.random())]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */