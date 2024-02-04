function solution(s) {
    let result = "";
    let temp = s.toLowerCase();
    for (let i = 0; i < temp.length; i++){
        if(temp[i-1]===" "|| i === 0){
            result += temp.slice(i,i+1).toUpperCase();
        }else{
            result += temp[i]
        }
    };
    return result;
}