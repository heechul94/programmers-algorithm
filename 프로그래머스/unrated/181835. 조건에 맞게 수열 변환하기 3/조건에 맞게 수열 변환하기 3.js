function solution(arr, k) {
    let answer = [];
    if(k%2!=0){
        answer = arr.map(element => element*k);
    }else{
        answer = arr.map(element => element+k);
    }
    return answer;
}