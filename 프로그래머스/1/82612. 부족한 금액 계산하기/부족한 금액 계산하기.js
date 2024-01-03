function solution(price, money, count) {
    let answer = -1;
    let sum = 0;
    sum = Array(count).fill(price).map((e,i)=>e*=i+1).reduce((acc,cur)=>acc+cur);
    answer = money - sum
    if(answer>0) return answer = 0
    return -answer;
}