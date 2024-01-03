function solution(absolutes, signs) {
    let answer = 0;
    signs.forEach((elem,idx)=>elem ? answer += absolutes[idx] : answer -= absolutes[idx] )
    return answer;
}