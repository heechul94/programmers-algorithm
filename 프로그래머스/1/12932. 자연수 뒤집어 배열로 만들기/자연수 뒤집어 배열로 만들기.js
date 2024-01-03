function solution(n) {
    let answer = [];
    let arr = [...String(n)]
    arr.forEach((e)=>answer.unshift(+e))
    return answer;
}