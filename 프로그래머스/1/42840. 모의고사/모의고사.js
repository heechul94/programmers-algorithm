function solution(answers) {
    const pickCase = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    const rank = new Array(3).fill(0);
    const result = [];
    for (let i = 0; i < pickCase.length; i++){
        for (let j = 0; j < answers.length; j++){
            if(j>=pickCase[i].length){
                if(answers[j]===pickCase[i][j%pickCase[i].length])rank[i]++;  
            }
            if(answers[j]===pickCase[i][j])rank[i]++;
        }
    }
    rank.forEach((e, i)=> {
        if(e===Math.max(...rank)) result.push(i+1)
    })
    return result
}