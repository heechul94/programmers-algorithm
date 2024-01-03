function solution(a, b) {
    let answer = 0;
    let sumString = Number(`${a}`+`${b}`);
    let multi = 2*a*b;
    sumString > multi ? answer = sumString : answer = multi;
    return answer;
}