function solution(k, m, score) {
    let box = Math.trunc(score.length/m);
    const apples = score.filter(apple => apple<=k).sort((a,b)=>b-a);
    let answer = 0;
    for (let i = m-1; i < m*box; i+=m){
        answer += apples[i]*m;
    }
    return answer;
}