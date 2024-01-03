function solution(a, d, included) {
    let answer = 0;
    let arr = new Array(included.length).fill(a);
    let indexArr = [];
    for (let i = 1; i < included.length; i++){
        arr[i] += (d*i);
    }
    included.forEach((elem,idx) => elem && indexArr.push(idx));
    for (let i = 0; i < indexArr.length; i++){
        answer += arr[indexArr[i]];
    }
    return answer;
}