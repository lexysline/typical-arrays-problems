exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    const result = Math.min(...array);
    return result;
};

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    const result = Math.max(...array);
    return result;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    const tolal = array.reduce((sum, current) => sum + current, 0);
    const result = tolal / array.length;
    return result;
};
