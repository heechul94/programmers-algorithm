function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let numer = numer1*denom2 + numer2*denom1;
    let denom = denom1*denom2;
    
    if(denom1 === denom2){
        numer = numer1+numer2;
        denom = denom1;
    };
    
    if(numer > denom){
        for(let i = numer; i > 0; i--){
            if(numer%i === 0 && denom%i === 0 ){
                answer.push(parseInt(numer/i));
                answer.push(parseInt(denom/i));
                break;
            };
        };
    }
    else if(numer < denom){
         for(let i = denom; i > 0; i--){
            if(numer%i === 0 && denom%i === 0 ){
                answer.push(parseInt(numer/i));
                answer.push(parseInt(denom/i));
                break;
            };
        };
    }else{
        return [1,1]
    }
    return answer;
}