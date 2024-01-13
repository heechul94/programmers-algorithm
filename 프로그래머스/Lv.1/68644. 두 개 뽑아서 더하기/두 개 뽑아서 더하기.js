function solution(numbers) {
    // [1,2,3,4,5] => 1 / +2, +3, +4, +5
    //             => 2 / +3, +4, +5
    //             => 3 / +4, +5
    //             => 4 / +5
    // 반복문을 중첩으로 (i = 0 ~ i < numbers.length-1) 의 반복문 안에 (j=i+1 ~ j < numbers.length) 반복문으로 연산하면 될것같다.
    // 반복문안에서 numbers[i] 와 numbers[j]를 더한값들을 새로 만들어준 빈 배열에 push 해준뒤 sort()로 오름차순 정렬해 반환해준다.
    const array = [];
    const answer = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            array.push(numbers[i] + numbers[j])
        }
    };
    array.sort((a,b)=>a-b);
    for(let j = 0; j < array.length; j++){
        if(array[j] !== array[j+1]){
            answer.push(array[j]);
        }else if(array[j] === array[j+1] ){
            continue;
        }else {
            answer.push(array[j]);
        }
    }
    return answer
}