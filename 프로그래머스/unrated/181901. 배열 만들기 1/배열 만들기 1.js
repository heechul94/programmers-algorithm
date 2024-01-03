function solution(n, k) {
    let answer = [];
    answer = Array(n-k+1).fill(k).map((e,i)=>e*(i+1)).filter(element => element<=n);
    return answer;
}