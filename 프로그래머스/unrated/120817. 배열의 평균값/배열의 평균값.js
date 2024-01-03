function solution(numbers) {
    let answer = 0;
    return answer = numbers.reduce((acc,cur)=>acc+cur,0)/numbers.length;
}