function solution(n) {
    let answer = '';
    let soo = [];
    soo = new Array(n).fill('').map((_,i)=>(i+1)%2===0?'박':'수')
    answer = soo.join("")
    return answer;
}