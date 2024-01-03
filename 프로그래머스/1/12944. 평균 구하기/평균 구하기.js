function solution(arr) {
    let answer = 0;
    let sum = 0;
    sum = arr.reduce((acc,cur)=>acc+cur);
    answer = sum/arr.length
    return answer;
}