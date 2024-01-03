function solution(n) {
    let answer = 0;
    let arr = [...String(n)]
    arr.sort((a,b)=>b-a)
    answer = +arr.join("")
    return answer;
}