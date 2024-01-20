
function solution(nums) {
    let answer = [];
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length -1; j++){
            for(let k = j + 1; k < nums.length; k++){
                let num = nums[i]+nums[j]+nums[k];
                for(let l = 2; l < num; l++){
                    if(num%l===0){
                        break;
                    }else if(num%l!==0&&num-1===l){
                        answer.push(num);
                    }
                }
               
            }
        }
    }
    return answer.length
}
