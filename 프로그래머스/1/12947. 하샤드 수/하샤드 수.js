function solution(x) {
    let answer = true;
    let arr = [...String(x)];
    let sum = arr.reduce((acc,cur)=> +acc + +cur);
    x%sum === 0 ? answer = true  : answer = false
    return answer;
}