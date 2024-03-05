function solution(l, r) {
    const result = [];
    for(let i = 1; i <= Infinity; i++){
        const temp = i.toString(2)*5 
        if(temp>r) break;
        if(temp>=l) result.push(temp);
    }
    if(!result.length) result.push(-1);
    return result;
}