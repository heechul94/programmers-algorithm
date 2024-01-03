function solution(s) {
    let answer = '';
    let arr = [...s]
    arr.sort((a,b)=>{
        if(b<a) return -1;
        if(b===a) return 0;
        if(b>a) return 1;
    })
    answer = arr.join("")
    return answer;
}