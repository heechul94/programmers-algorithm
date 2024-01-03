function solution(s) {
    let answer = false;
    if(s.length === 4 || s.length === 6){
        let arr = [];
        arr = [...s].map(e=>Number(e));
        arr.sort();
        Number.isNaN(arr[s.length-1]) ? answer = false : answer = true;
    }
    return answer;
}