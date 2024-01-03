function solution(arr, divisor) {
    let answer = [];
    answer = arr.filter(e=> e%divisor===0);
    answer.sort((a,b)=>a-b);
    answer.length ? answer : answer.push(-1);
    return answer;
}