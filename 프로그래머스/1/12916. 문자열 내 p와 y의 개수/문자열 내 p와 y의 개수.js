function solution(s){
    const obj = {};
    const transFormToLowerString = s.toLowerCase();
    [...transFormToLowerString].forEach((el)=>{
        obj[el] ? obj[el]++  : obj[el] = 1
    });
    
    if(obj['p'] === undefined && obj['y'] === undefined) return true;
    
    if(obj['p'] === obj['y']){
        return true
    }else{
        return false
    };
}