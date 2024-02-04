function solution(brown, yellow) {
    const total = brown + yellow;
    let h = 3;
    let temp = 0;
    for(let i = 0; i < yellow; i++){
        if(temp === yellow) break;
        if(total%h===0){
            temp = (total/h-2) * (h-2);
        };
        if(total%h!==0||temp!==yellow){
            h++;
        };
    };
        
    return [total/h,h]
}