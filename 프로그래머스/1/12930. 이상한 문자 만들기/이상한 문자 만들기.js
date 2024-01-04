function solution(s) {
    let answer = '';
    let arr1 = [];
    arr1 = s.split(" ");
    const arr2 = Array(arr1.length).fill("")
    
    for(let i = 0; i < arr1.length; i++ ){
        for (let j = 0; j < arr1[i].length; j++){
            if(j%2===0){
                arr2[i]+=arr1[i][j].toUpperCase();
            }else{
                arr2[i]+=arr1[i][j].toLowerCase();
            }
        }
    }

    answer = arr2.join(" ");
    return answer;
}