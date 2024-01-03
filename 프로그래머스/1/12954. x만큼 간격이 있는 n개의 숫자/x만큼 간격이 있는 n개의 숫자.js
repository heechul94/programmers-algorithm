function solution(x, n) {
    let answer = [];
    answer = new Array(n).fill(0).map((e,i)=>e+x*(i+1))
    return answer;
}