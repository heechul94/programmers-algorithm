function solution(n) {
    let answer = 0;
    if( n**(1/2) - Math.trunc(n**(1/2)) !== 0 ){
        answer = -1
    } else {
        answer = (n**(1/2)+1)**2
    }
    return answer;
}