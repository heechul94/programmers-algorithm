function solution(X, Y) {
    const numberCountX = new Array(10).fill(0);
    const numberCountY = new Array(10).fill(0);
    const result = [];
    [...X].forEach((el)=> numberCountX[el]++);
    [...Y].forEach((el)=> numberCountY[el]++);
    for(let i = 9; i >= 0; i--){
        if(numberCountX[i] !== 0 && numberCountY[i] !== 0){
            if(numberCountX[i]<numberCountY[i]){
                for(let j = 0; j < numberCountX[i]; j++){
                    result.push(i);
                };
            }else{
                for(let j = 0; j < numberCountY[i]; j++){
                    result.push(i);
                };
            }
        }
    };
    return result.length === 0 ? "-1" : result[0] === 0 ? "0" : result.join("")
}