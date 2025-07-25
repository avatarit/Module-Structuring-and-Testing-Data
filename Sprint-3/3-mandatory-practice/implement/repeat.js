function repeat(str, times) {
    if (typeof str !== 'string' || typeof times !== 'number' || times < 0) {
        throw new Error("Invalid input: str must be a string and times must be a non-negative integer");
    }

    if (times === 0) {
        return '';
    }

    return str.repeat(times);
}

module.exports = repeat;