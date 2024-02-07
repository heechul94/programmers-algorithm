// n = 1 => 1
// n = 2 => 2
// n = 3 => 3
// n = 4 => 5
// n = 5 => 1,1,1,1,1 / 1,2,1,1 / 1,1,2,1 / 1,1,1,2 / 1,2,2 / 2,1,1,1 / 2,2,1 / 2,1,2 / => 8
// 피보나치수열
function solution(n) {
    let result = 0;
    let first = 1;
    let second = 2;
    if(n === 1) return first;
    if(n === 2) return second;
    for(let i = 3; i <= n; i++){
        result = (first + second)%1234567;
        first = second;
        second = result;
    }
    return result;
}