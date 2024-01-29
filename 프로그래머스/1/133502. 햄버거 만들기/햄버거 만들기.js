function solution(ingredient) {
    let count = 0;
    const temp = [];
    for (let i = 0; i<ingredient.length; i++){
        temp.push(ingredient[i]);
            if(temp.slice(-4).join("")==="1231"){
                count++;
                temp.splice(-4);
            };
        };
    return count;
}