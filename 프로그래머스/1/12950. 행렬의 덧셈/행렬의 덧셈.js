function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
                if(j===0) answer.push([ arr1[i][j] + arr2[i][j] ]);
                else answer[i].push(arr1[i][j] + arr2[i][j] );
            }
    }
    
    return answer;
}