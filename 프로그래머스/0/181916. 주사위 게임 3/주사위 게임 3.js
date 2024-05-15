function solution(a, b, c, d) {
    let dice = [a, b, c, d];
    let count = {};

    for (let num of dice) {
        count[num] = (count[num] || 0) + 1;
    }

    let keys = Object.keys(count);
    if (keys.length === 1) {
        let p = parseInt(keys[0]);
        return 1111 * p;
    } else if (keys.length === 2) {
        let p = parseInt(keys[0]);
        let q = parseInt(keys[1]);
        if (count[p] === 3 || count[q] === 3) {
            if (count[p] === 3) {
                return (10 * p + q) ** 2;
            } else {
                return (10 * q + p) ** 2;
            }
        } else {
            return (p + q) * Math.abs(p - q);
        }
    } else if (keys.length === 3) {
        let p;
        for (let key in count) {
            if (count[key] === 2) {
                p = parseInt(key);
            }
        }
        let q = parseInt(keys.filter(key => key != p)[0]);
        let r = parseInt(keys.filter(key => key != p)[1]);
        return q * r;
    } else {
        return Math.min(...dice);
    }
}