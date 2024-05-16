function solution(number) {
    let answer = 0;
    let sum = number.split("").reduce((cur,acc)=> +cur + +acc);
    return sum % 9;
}